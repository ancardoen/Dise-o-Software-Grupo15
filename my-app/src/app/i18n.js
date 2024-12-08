import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import jsonES from "../../public/locales/es.js"
import jsonEN from "../../public/locales/en.js"
import { resourceUsage } from "process";
i18n
  .use(initReactI18next)
  .init({
    lng: "es", // Idioma por defecto
    fallbackLng: "es",
    resources:{
      en:{
        translation:{
          "Main":{
            "t1":"Welcome"
          }
        }
      },
      es:{
        translation:{
          "Main":{
            "t1":"Bienvenido"
          }
        }
      }
    }
  });

export default i18n;
