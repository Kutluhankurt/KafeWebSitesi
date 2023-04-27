import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("Email adresi gerekli").email("Email adresi geçersiz"),
  password: Yup.string()
    .required("Şifre gerekli.")
    .min(8, "Şifre en az 8 karakter olmalı.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir."
    ),
});
