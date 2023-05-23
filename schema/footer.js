import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string().required("Konum gerekli."),
  phoneNumber: Yup.string()
    .required("Telefon numarası gerekli.")
    .min(10, "Telefon numarası en az 10 karakter olmalıdır."),
  email: Yup.string().required("Email gereklidir.").email("Email geçersizdir."),
  desc: Yup.string().required("Açıklama gerekli."),
  day: Yup.string().required("Gün gerekli."),
  time: Yup.string().required("Saat gerekli."),
});