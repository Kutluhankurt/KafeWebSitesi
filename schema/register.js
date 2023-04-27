import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("İsim Soyisim gerekli.")
    .min(3, "İsim Soyisim en az 3 karakter olmalıdır."),
  email: Yup.string().required("Email gerekli.").email("Geçersiz email adresi."),
  password: Yup.string()
    .required("Şifre gerekli.")
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir."
    ),
  confirmPassword: Yup.string()
    .required("Şifre tekrarı gerekli.")
    .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor."),
});