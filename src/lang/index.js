import Cookies from "js-cookie";
import elementEnLocale from "element-plus/lib/locale/lang/en"; // element-ui lang
import elementFaLocale from "element-plus/lib/locale/lang/fa"; // element-ui lang
import enLocale from "./en";
import faLocale from "./fa";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  fa: {
    ...faLocale,
    ...elementFaLocale,
  },
};

const i18n = createI18n({
  // set locale
  // options: en or zh
  locale: Cookies.get("language") || "en",
  // set locale messages
  messages,
});

export default i18n;
