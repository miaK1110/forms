import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col } from "react-bootstrap";

import { userFormSchema } from "../Schemas/userSchema";

import UserForm from "./userForm";

const ParentForm = () => {
  const methods = useForm({
    resolver: yupResolver(userFormSchema),
    mode: "onBlur"
  });
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <>
      <FormProvider {...methods}>
        <form
          className="container mt-5"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <UserForm />
          <Col className="text-center mb-5">
            <Button variant="danger" size="lg" type="submit">
              内容を送信する
            </Button>
          </Col>
        </form>
      </FormProvider>
    </>
  );
};
export default ParentForm;
