import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("İsim Soyisim hatalı.")
    .min(3, "İsim Soyisim en az 3 karakter olmalıdır."),
  phoneNumber: Yup.string()
    .required("Telefon numarası hatalı.")
    .min(10, "Telefon numarası en az 10 karakter olmalıdır."),
  email: Yup.string().required("Email adresi hatalı.").email("Email geçersiz."),
  address: Yup.string().required("ADres hatalı."),
  job: Yup.string().required("iş hatalı."),
  bio: Yup.string().required("Bio hatalı."),
});