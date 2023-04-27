import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("İsim Soyisim gerekli.")
    .min(3, "İsim Soyisim en az 3 karakter olmalıdır."),
  phoneNumber: Yup.string()
    .required("Telefon numarası gerekli.")
    .min(10, "Telefon numarası en az 10 karakter olmalıdır"),
  email: Yup.string().required("Email adresi gerekli.").email("Geçersiz email adresi."),
  persons: Yup.string().required("Kişi sayısı gerekli."),
  date: Yup.string().required("Tarih gerekli."),
});