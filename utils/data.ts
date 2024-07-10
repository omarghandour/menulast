type Data = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  calories: string;
  section: string;
  longDescription: string;
};
const data: Data[] = [
  {
    id: "1",
    name: "Pizza Margrita - بيتزا مارجريتا",
    description: "Tomato Sauce, Cheese",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biggerbolderbaking.com%2Fwp-content%2Fuploads%2F2021%2F02%2FNew-York-Style-Pizza-Thumbnail1-scaled.jpg&f=1&nofb=1&ipt=62f50d7d79be7e7af34b8f835579c9683915eb0c08bcf9aeee3dc053c5aeff3c&ipo=images",
    price: "25",
    calories: "671",
    section: "pizza",
    longDescription: "صوص الطماطم, جبن مزريلا و برميزانن",
  },
  {
    id: "2",
    name: "Tascuny spicy & no spicy - تسكني حارة و غير حارة",
    description: "Tomato Sauce, cheese, Grilled Chicken and Olives",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.epicuricloud.com%2Fwp-content%2Fuploads%2F2020%2F02%2FHomemade-Pizza-Crust-Sauce-close-up-front-2048x1365.jpg&f=1&nofb=1&ipt=df786e26f9c68060c0f3ce2694ab7f9b373679b8cef40d37ec7903dc032ed8a8&ipo=images",
    price: "28",
    calories: "793",
    section: "pizza",
    longDescription: " صوص الطماطم, دجاج مشوي, زيتون, جبن مزريلا و برميزان",
  },
  {
    id: "3",
    name: "Roka Pizza - بيتزا روكا",
    description:
      "Tomato Sauce, cheese, Jirjir, Fresh Mushroom and Dried Tomato",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.notrefamille.com%2F1800x0%2Fsmart%2F2020%2F09%2F24%2F44198-large.jpg&f=1&nofb=1&ipt=4f64a5d3fe859fbd325b4a46de8aaff616b3cfb3b9be13c85643c1977b2f4bde&ipo=images",
    price: "29",
    calories: "678",
    section: "pizza",
    longDescription:
      " صوص الطماطم, جرجير, فطر, طماطم مجففة, جبن كزريلا و برميزان",
  },
  {
    id: "4",
    name: "Pizza Pepperoni - بيتزا ببروني",
    description: "Tomato Sauce, cheese and Smoked Beef Pepperoni",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Friotfest.org%2Fwp-content%2Fuploads%2F2016%2F10%2FPepperoni_1.jpg&f=1&nofb=1&ipt=e86954b8021c47a7fecf7a1d653101e4551d3fae836e6673f8965134d023c693&ipo=images",
    price: "28",
    calories: "1165",
    section: "pizza",
    longDescription:
      "صوص الطماطم, ببروني, لحم البقر المدخن, جبن مزريلا و برميزان",
  },
  {
    id: "5",
    name: "Pasta Mix - باستا مكس",
    description: "Shrimp, Chicken, Hotdog, Mushroom, VEG, Cheese and Mix Sauce",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flestta.com%2Fwp-content%2Fuploads%2F2021%2F03%2FPasta-2048x1366.jpg&f=1&nofb=1&ipt=db470ccc6cfe7e90f538389522c3b2f3173be9d24da7a21a8b1f7074354b046e&ipo=images",
    price: "25",
    calories: "985",
    section: "pasta",
    longDescription: "ربيان, دجاج, نقانق, فطر, جبن, صوص مكس",
  },
  {
    id: "6",
    name: "Futtuchini Afredo - فوتشيني الفريدو",
    description:
      "Chicken, Mushroom, Greenbel, Permisan, Mozarella, White Sauce and Cream",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Featsdelightful.com%2Fwp-content%2Fuploads%2F2020%2F09%2Ffettuccine-alfredo-complete.jpg%3Ffit%3D1728%252C1996%26ssl%3D1&f=1&nofb=1&ipt=1dceee473dfe6de885462b94cddc7176c4656968abd8dfcc69424bc3f3010ecf&ipo=images",
    price: "27",
    calories: "954",
    section: "pasta",
    longDescription:
      " دجاج, فطر, فلفل بارد, جبن برميزان, مزريلا, صلصة ابيض مع كريمة",
  },
  {
    id: "7",
    name: "Pasta Tiano - باستا تيانو",
    description:
      "Grilled Chicken, Fresh Mushroom, VEG, Garlic, Permisan, Mozzarella, Pink Sauce and Cream",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvegecravings.com%2Fwp-content%2Fuploads%2F2023%2F01%2FPink-Sauce-Pasta-Recipe-Step-By-Step-Instructions-scaled.jpg&f=1&nofb=1&ipt=fd9c1c9299ffab59b5433034f4d4b2a35403b2e0b87788189a767f4f80e34314&ipo=images",
    price: "31",
    calories: "767",
    section: "pasta",
    longDescription:
      "دجاج صحر مشوي, فطر طازج, خضار, ثوم, جبن برميزان, مزريلا, صوص بنط مع كريمة",
  },
  {
    id: "8",
    name: "Pasta Vince - باستا فينيسيا",
    description:
      "Grilled Chicken, Fresh Mushroom, VEG, Garlic, Permisan, Mozzarella, Pink Sauce and Cream",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbloximages.newyork1.vip.townnews.com%2Favpress.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2Fe%2F74%2Fe74613f8-3edc-11ea-8e35-a356ef53e24c%2F5e2b40c1126dd.image.jpg%3Fresize%3D1200%252C804&f=1&nofb=1&ipt=463949b2f7b8b920d8e046689f91fc7ca07eb17c65972aaef6b2e0a66d55994f&ipo=images",
    price: "23",
    calories: "804",
    section: "pasta",
    longDescription:
      "دجاج صحر مشوي, فطر طازج, خضار, ثوم, جبن برميزان, مزريلا, صوص بنك مع كريمة",
  },
  {
    id: "9",
    name: "Spaghetti Plermo - سباجتي بليرمو",
    description: "Chicken, VEG and SOY Sauce",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1mlbwr23caxox.cloudfront.net%2Fsmulweb_images%2F125115-spaghetti-palermo.png&f=1&nofb=1&ipt=2e30e9959112c3a82152e1bbe13c6112e0094e2f7da4b63c32eef2d5768b6674&ipo=images",
    price: "20",
    calories: "679",
    section: "pasta",
    longDescription: "دجاج, خضار, صلصة صويا",
  },
  {
    id: "10",
    name: "Spaghetti Juliano - سباجتي جوليانو",
    description: "Chicken, VEG and Red Sauce",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2Frck8_jNf.BTf9Ek70uM5LQ--~B%2FaD0xMDA1O3c9MTQxNjtzbT0xO2FwcGlkPXl0YWNoeW9u%2Fhttps%3A%2F%2Fs.yimg.com%2Fcd%2Fresizer%2F2.0%2FFIT_TO_WIDTH-w1416%2F994ccac5ffb8b76215091aa0e3f3e455dda55669.jpg&f=1&nofb=1&ipt=68a7944813fca2336f67d78e033315949139bf37c651e16b354d999c9f4c2fc1&ipo=images",
    price: "20",
    calories: "909",
    section: "pasta",
    longDescription: "دجاج, خضار, صوص احمر",
  },
  {
    id: "11",
    name: "Mushroom Soup - شوربة الفطر",
    description: "Mushroom with Cream",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.deliveryhero.io%2Fimage%2Ffoodpanda%2Frecipes%2Fmushroom-soup-recipe-1.jpg&f=1&nofb=1&ipt=651ae7460aacf3fbcab8b2b664a5b5245bb3b9f0674bdab4a488c9158ce7bc46&ipo=images",
    price: "16",
    calories: "105",
    section: "soup",
    longDescription: "فطر مع كريمة",
  },
  {
    id: "12",
    name: "Chicken Soup - شوربة دجاج",
    description: "Chicken and Corn with Cream",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhealthylivinglinks.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fchickensoup-min.png&f=1&nofb=1&ipt=c8453a2439fcf43a5e370c1eb176c0e3b83620edf06e9574fa44f2bd484cd89a&ipo=images",
    price: "16",
    calories: "117",
    section: "soup",
    longDescription: "دجاج, ذرة مع كريمة",
  },
  {
    id: "13",
    name: "Ceaser Salad - سلطة سيزر",
    description:
      "American Lettuce, Grilled Chicken, Cheese Permisan, Dry Bread and Ranch Sauce",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FZ6IWF7c9zywuU9maSIimGLbHoI4%3D%2F3000x2000%2Ffilters%3Afill(auto%2C1)%2Fclassic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg&f=1&nofb=1&ipt=ab224fa85fa60a5a3cf146c308554a7f04fe367cf25c80001e7789b9c131e18a&ipo=images",
    price: "15",
    calories: "100",
    section: "salad",
    longDescription: "خس امريكي, دجاج مشوي, جبن برميزان, خبز مجفف, صوص رنش",
  },
  {
    id: "14",
    name: "Jirjir Salad - سلطة الجرجير",
    description:
      "Jirjir, Fresh Mushroom, Pine Nuts, Cheese Permisan, Dried Tomato, Red Onion With Palsamic Sauce",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-KuaKnWULhHU%2FVCBxxJwNPNI%2FAAAAAAAAfZU%2FapHVTjJvzKk%2Fs1600%2Fseafood%2Bsalad%2B2.jpg&f=1&nofb=1&ipt=b0067dd7df13e26bd79c1fde200cae3695f9604ebccb5a5d0936d701984a9994&ipo=images",
    price: "18",
    calories: "98",
    section: "salad",
    longDescription: "جرجير, فطر, سنوبر, جبن, طماطم مجفف, بصل, صوص بالسامك",
  },
  {
    id: "15",
    name: "Dynamite Shrimp - دينامت ربيان",
    description: "Fried Shrimp with Dynamite Sauce",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Firepo.primecp.com%2F2019%2F02%2F402087%2FDynamite-Shrimp-_ExtraLarge1000_ID-3102085.jpg%3Fv%3D3102085&f=1&nofb=1&ipt=91ccbaae721cb9f0fb129e657fa207e171654801b2b07e7f7f82c9175d9be971&ipo=images",
    price: "32",
    calories: "415",
    section: "appetizer",
    longDescription: "ربيان مقلي, صوص داينمت",
  },
  {
    id: "16",
    name: "French Fries - بطاطس مقلي",
    description: "French Fries",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FIHKuXcx3uUI1IWkM_cnnQdFH-zQ%3D%2F3485x2323%2Ffilters%3Afill(auto%2C1)%2Fhow-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg&f=1&nofb=1&ipt=674766a5346c19beab5f39a65809e6578e2538f446717e406d8013880d261445&ipo=images",
    price: "10",
    calories: "348",
    section: "appetizer",
    longDescription: "بطاطس مقلية",
  },
  {
    id: "17",
    name: "Chicken Qasadiya - كسادية دجاج",
    description: "Tortilla, Grilled Chicken, Cheese, Tomato and Sauce Special",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kyleecooks.com%2Fwp-content%2Fuploads%2F2021%2F01%2FChicken-Quesadillas-14.jpg&f=1&nofb=1&ipt=8fd3e1a5f75fa535e0f1bd3713fe1b7376b3952fff946a8bb7707c3849e2a166&ipo=images",
    price: "25",
    calories: "789",
    section: "chickenQasadiya",
    longDescription: "تورتيلا, دجاج مشوي, جبن, طماطم, صوص سبيشيال",
  },
];
export default data;
