import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcome: "Real Mobile Shopping",
      welcome2:"Welcome to Mobile Phone Store",
      explore:"explore our latest collection of products",
      shop:"Shop now",
      Cart:"Cart",
      Price:"Price",
      Payment:"Send Payment",
      Total:"Total Birr",
      TotalA:"Total Amount in the store:",
      Search:"Search Products",
      Catagory:"Catagories",
      Catagories:{
        Phones:"Phones",
        Computers:"Computers",
        ElectronicDevices:"ElectronicDevices"
      },
      navigationMenu:{
        home:'Home',
        login:'Login',
        signup:'Signup',
        cart:'Add to Cart',
        removeCart:'Remove from the Cart'
      },
      Footer:{
        customerService:"Customer Service",
        contact:"Contact",
        shipping:"Shipping",
        returning:"Returns",
        FAQ:"FAQ",
        Links:"Links",
        About:"About us",
        Privacy:"Privacy",
        Terms:"Terms and Policy",
        Site:"Site",
        Newsettler:"Newsettler",
        Subscribe:"Subscribe",
        Subscribe2:"Subscribe to our newsletter for the latest updates",
        Enter:"Enter your email",
        Next:"Next",
        Prev:"Prev"
      }
    }
  },
  amh: {
    translation: {
      welcome: "ሪል የሞባይል መሸጫ ሱቅ",
      welcome2:"እንኳን ወደ ሱቃችን በደህና መጡ",
      explore:"የእኛን የቅርብ ጊዜ የምርት ስብስቦችን ያስሱ",
      shop:"አሁን ይሸምቱ",
      Cart:"ጋሪ",
      Price:"ዋጋ",
      Payment:"ክፍያ ላክ",
      Total:"ጠቅላላ ብር",
      TotalA:"በመደብሩ ውስጥ ያለው ጠቅላላ መጠን",
      Search:"ምርቶችን ይፈልጉ",
      Catagory:"ምድቦች",
      Catagories:{
        Phones:"ስልኮች",
        Computers:"ኮምፒውተሮች",
        ElectronicDevices:"የኤሌክትሮኒክስ መሳሪያዎች"
      },
      navigationMenu:{
        home:'Home',
        login:'ግባ',
        signup:'ተመዝገብ',
        cart:'ወደ ግዢው ቅርጫት ጨምር',
        removeCart:'ከግዢው ቅርጫት ያስወጡ'
      },
      Footer:{
        customerService:"የደንበኞች ግልጋሎት",
        contact:"አድራሻ",
        shipping:"ማጓጓዣ",
        returning:"መመለስ",
        FAQ:"ተደጋግሞ የሚነሱ ጥያቄዎች",
        Links:"አገናኞች",
        About:"ስለ እኛ",
        Privacy:"ግላዊነት",
        Terms:"ውሎች እና ፖሊሲ",
        Site:"ጣቢያ",
        Newsettler:"ጋዜጣ",
        Subscribe:"ሰብስክራይብ",
        Subscribe2:"ለአዳዲስ ዝመናዎች ለጋዜጣችን ይመዝገቡ",
        Enter:"የእርስዎን ኢሜይል ያስገቡ",
        Next:"ቀጣይ ገጽ",
        Prev:"ቀዳሚ ገጽ"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug:true,
    returnObjects:true,
    resources,
    lng: "amh", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;