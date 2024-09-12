type Data = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  calories: string;
  section: string;
  longDescription: string;
  nameAr: string;
};
const data: Data[] = [
  {
    id: "1",
    name: "Pizza Margrita",
    nameAr: " بيتزا مارجريتا",
    description: "Tomato Sauce, Cheese",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/photo_5985755204877926914_y.jpg?raw=true",
    price: "25",
    calories: "671",
    section: "pizza",
    longDescription: "صوص الطماطم, جبن مزريلا و برميزانن",
  },
  {
    id: "2",
    name: "Tascuny spicy & no spicy",
    nameAr: "تسكني حارة و غير حارة",
    description: "Tomato Sauce, cheese, Grilled Chicken and Olives",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/photo_5985755204877926916_y.jpg?raw=true",
    price: "28",
    calories: "793",
    section: "pizza",
    longDescription: " صوص الطماطم, دجاج مشوي, زيتون, جبن مزريلا و برميزان",
  },
  {
    id: "3",
    name: "Roka Pizza",
    nameAr: "بيتزا روكا",
    description:
      "Tomato Sauce, cheese, Jirjir, Fresh Mushroom and Dried Tomato",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/photo_5985755204877926917_y.jpg?raw=true",
    price: "29",
    calories: "678",
    section: "pizza",
    longDescription:
      " صوص الطماطم, جرجير, فطر, طماطم مجففة, جبن كزريلا و برميزان",
  },
  {
    id: "4",
    name: "Pizza Pepperoni",
    nameAr: "بيتزا ببروني",
    description: "Tomato Sauce, cheese and Smoked Beef Pepperoni",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/photo_5985755204877926915_y.jpg?raw=true",
    price: "28",
    calories: "1165",
    section: "pizza",
    longDescription:
      "صوص الطماطم, ببروني, لحم البقر المدخن, جبن مزريلا و برميزان",
  },
  {
    id: "5",
    name: "Pasta Mix",
    nameAr: "باستا مكس",
    description: "Shrimp, Chicken, Hotdog, Mushroom, VEG, Cheese and Mix Sauce",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/7.jpg?raw=true",
    price: "25",
    calories: "985",
    section: "pasta",
    longDescription: "ربيان, دجاج, نقانق, فطر, جبن, صوص مكس",
  },
  {
    id: "6",
    name: "Futtuchini Afredo",
    nameAr: "فوتشيني الفريدو",
    description:
      "Chicken, Mushroom, Greenbel, Permisan, Mozarella, White Sauce and Cream",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/photo_5985755204877926919_y.jpg?raw=true",
    price: "27",
    calories: "954",
    section: "pasta",
    longDescription:
      " دجاج, فطر, فلفل بارد, جبن برميزان, مزريلا, صلصة ابيض مع كريمة",
  },
  {
    id: "7",
    name: "Pasta Tiano",
    nameAr: "باستا تيانو",
    description:
      "Grilled Chicken, Fresh Mushroom, VEG, Garlic, Permisan, Mozzarella, Pink Sauce and Cream",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/6.jpg?raw=true",
    price: "31",
    calories: "767",
    section: "pasta",
    longDescription:
      "دجاج صحر مشوي, فطر طازج, خضار, ثوم, جبن برميزان, مزريلا, صوص بنط مع كريمة",
  },
  {
    id: "8",
    name: "Pasta Vince",
    nameAr: "باستا فينيسيا",
    description:
      "Grilled Chicken, Fresh Mushroom, VEG, Garlic, Permisan, Mozzarella, Pink Sauce and Cream",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/1.jpg?raw=true",
    price: "23",
    calories: "804",
    section: "pasta",
    longDescription:
      "دجاج صحر مشوي, فطر طازج, خضار, ثوم, جبن برميزان, مزريلا, صوص بنك مع كريمة",
  },
  {
    id: "9",
    name: "Spaghetti Plermo",
    nameAr: "سباجتي بليرمو",
    description: "Chicken, VEG and SOY Sauce",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/3.jpg?raw=true",
    price: "20",
    calories: "679",
    section: "pasta",
    longDescription: "دجاج, خضار, صلصة صويا",
  },
  //
  {
    id: "10",
    name: "Spaghetti Juliano",
    nameAr: "سباجتي جوليانو",
    description: "Chicken, VEG and Red Sauce",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/2.jpg?raw=true",
    price: "20",
    calories: "909",
    section: "pasta",
    longDescription: "دجاج, خضار, صوص احمر",
  },
  {
    id: "11",
    name: "Spaghetti bolognese",
    nameAr: "سباجتي بولوغنيز",
    description: "Chicken, VEG and Red Sauce",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/5.jpg?raw=true",
    price: "20",
    calories: "909",
    section: "pasta",
    longDescription: "لحم, خضار, صوص احمر",
  },
  {
    id: "12",
    name: "Mushroom Soup",
    nameAr: "شوربة الفطر",
    description: "Mushroom with Cream",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/12.jpg?raw=true",
    price: "16",
    calories: "105",
    section: "soup",
    longDescription: "فطر مع كريمة",
  },
  {
    id: "13",
    name: "Chicken Soup",
    nameAr: "شوربة دجاج",
    description: "Chicken and Corn with Cream",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/photo_5985755204877926921_y.jpg?raw=true",
    price: "16",
    calories: "117",
    section: "soup",
    longDescription: "دجاج, ذرة مع كريمة",
  },
  {
    id: "14",
    name: "Ceaser Salad",
    nameAr: "سلطة سيزر",
    description:
      "American Lettuce, Grilled Chicken, Cheese Permisan, Dry Bread and Ranch Sauce",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/14.jpg?raw=true",
    price: "15",
    calories: "100",
    section: "salad",
    longDescription: "خس امريكي, دجاج مشوي, جبن برميزان, خبز مجفف, صوص رنش",
  },
  {
    id: "15",
    name: "Jirjir Salad",
    nameAr: "سلطة الجرجير",
    description:
      "Jirjir, Fresh Mushroom, Pine Nuts, Cheese Permisan, Dried Tomato, Red Onion With Palsamic Sauce",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/15.jpg?raw=true",
    price: "18",
    calories: "98",
    section: "salad",
    longDescription: "جرجير, فطر, سنوبر, جبن, طماطم مجفف, بصل, صوص بالسامك",
  },
  {
    id: "16",
    name: "Dynamite Shrimp",
    nameAr: "دينامت ربيان",
    description: "Fried Shrimp with Dynamite Sauce",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/16.jpg?raw=true",
    price: "32",
    calories: "415",
    section: "appetizer",
    longDescription: "ربيان مقلي, صوص داينمت",
  },
  {
    id: "17",
    name: "French Fries",
    nameAr: "بطاطس مقلي",
    description: "French Fries",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/18.jpg?raw=true",
    price: "10",
    calories: "348",
    section: "appetizer",
    longDescription: "بطاطس مقلية",
  },
  {
    id: "18",
    name: "Chicken Qasadiya",
    nameAr: "كسادية دجاج",
    description: "Tortilla, Grilled Chicken, Cheese, Tomato and Sauce Special",
    image:
      "https://github.com/omarghandour/photos/blob/main/menu/17.jpg?raw=true",
    price: "25",
    calories: "789",
    section: "chickenQasadiya",
    longDescription: "تورتيلا, دجاج مشوي, جبن, طماطم, صوص سبيشيال",
  },
];
export default data;
