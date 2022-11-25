import * as yup from "yup";
import { setLocale } from "yup";

const localeJP = {
  mixed: {
    notType: "${path} "
  }
};

setLocale(localeJP);

export const userFormSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, "名前項目で入力できるのは50文字までです")
    .required("名前は入力必須です"),
  email: yup
    .string()
    .max(254, "メールアドレスで入力できるのは254文字までです")
    .email("メールアドレスの形式が正しくありません")
    .required("メールアドレスは入力必須です"),
  tel: yup
    .number()
    .typeError("半角数字でお願いします")
    .required("電話番号は入力必須です")
    .label("電話番号は半角数字でご入力ください")
});
