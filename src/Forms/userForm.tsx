import React from "react";

import {
  Container,
  Form,
  FormControl,
  FormLabel,
  Badge
} from "react-bootstrap";
import { useFormContext } from "react-hook-form";
type FormValues = {
  name: string;
  email: string;
  tel: number;
};
const UserForm = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<FormValues>();
  // useEffect(() => {
  //     if (watch("postcode")) {
  //         const newpostcode = watch("postcode");
  //       fetch(`https://api.zipaddress.net/?zipcode=${newpostcode}`, {
  //         mode: 'cors',
  //       })
  //         .then((result) => {
  //           return result.json;
  //         })
  //         .then((result) => {
  //             if(result){
  //                 // ↓使うと２回レンダーされる
  //                 // reset({
  //                 //     pref:result.data?.pref,
  //                 //     address1: result.data?.address,
  //                 // })
  //                 console.log('render');
  //             }
  //         })
  //     }
  //   }, [watch("postcode")]);
  return (
    <>
      <h4 className="pl-3">お客様情報</h4>

      <Container className="py-3">
        {/* 名前 */}
        <Form.Group className="mb-3 bg-light p-2 pb-3">
          <FormLabel className="pb-1">
            お名前 <Badge bg="danger text-white">必須</Badge>
          </FormLabel>
          <FormControl
            type="text"
            autoComplete="name"
            className={errors.name ? "is-invalid w-75" : "w-75"}
            placeholder="例：テスト 太郎"
            defaultValue=""
            {...register("name")}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* メールアドレス項目 */}
        <Form.Group className="mb-3 bg-light p-2 pb-3">
          <FormLabel htmlFor="email" className="fw-bold pb-1">
            メールアドレス <Badge bg="danger text-white">必須</Badge>
          </FormLabel>
          <FormControl
            type="email"
            autoComplete="email"
            placeholder="例:example@example.com"
            defaultValue=""
            {...register("email")}
            className={errors.email ? "is-invalid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        {/* 電話番号項目 */}
        <Form.Group className="mb-3 bg-light p-2 pb-3">
          <FormLabel htmlFor="tel" className="fw-bold pb-1">
            電話番号 <Badge bg="danger text-white">必須</Badge>
          </FormLabel>
          <FormControl
            type="tel"
            autoComplete="tel"
            placeholder="例:000-000-0000"
            defaultValue=""
            {...register("tel")}
            className={errors.tel ? "is-invalid w-75" : "w-75"}
          />
          <Form.Control.Feedback type="invalid">
            {errors.tel?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </Container>
    </>
  );
};
export default UserForm;
