import * as yup from "yup";

// YUP ile nesne içerisindeki alanların geçerli olması için gerekli koşulları belirleyebiliriz
export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("Başlık alanı zorunludur.")
    .min(3, " En az 3 karakter olmalıdır.")
    .max(40, "En fazla 40 karakter olabilir"),
  location: yup
    .string()
    .required("Konum belirtmek zorunludur.")
    .min(3, " Lokasyon en az 3 karakter olmalıdır.")
    .max(40, "Lokasyon en fazla 40 karakter olabilir"),
  address: yup
    .string()
    .required("Adres alanı zorunludur.")
    .min(3, " Adres en az 3 karakter olmalıdır.")
    .max(40, "Adres en fazla 40 karakter olabilir"),
  description: yup
    .string()
    .required("Açıklama girmek zorunludur.")
    .min(10, "Açıklama alanı en az 10 karakter olmalıdır.")
    .max(200, "Açıklama en fazla 40 karakter olabilir"),
  amenities: yup
    .string()
    .required("Yapı özellikleri girmek zorunludur.")
    .min(3, "Özellikler en az 3 karakter olmalıdır.")
    .max(80, "Özellikler fazla 80 karakter olabilir"),
  rating: yup
    .number()
    .required("Rating alanı zorunludur.")
    .min(1, "Rating en az 1 olabilir.")
    .max(5, "Rating en fazla  5 olabilir."),
  price_per_night: yup
    .number()
    .required("Fiyat alanı zorunludur")
    .positive("Fiyat pozitif olmalıdır.")
    .max(99999, "Fiyat en fazla 100 bin değerinde olabilir"),
  availability: yup.boolean(),
});
