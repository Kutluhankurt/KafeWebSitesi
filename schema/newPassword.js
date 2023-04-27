import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Şifre gerekli.")
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir."
    ),
  confirmPassword: Yup.string()
    .required("Parolanızı onaylayın.")
    .oneOf([Yup.ref("password"), null], "Şifreler aynı olmalıdır."),
});