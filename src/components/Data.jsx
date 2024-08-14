import photos from './images/photos'

const items = [
  {
    id: Math.random(),
    name: "بيتزا",
    price: 25,
    img: photos.pizza,
    description: "بيتزا مارجريتا مع جبنة موزاريلا",
    category: "الفطار",
  },
  {
    id: Math.random(),
    name: "برجر",
    price: 20,
    img: photos.burger,
    description: "برجر لحم بقري مع جبنة وشريحة طماطم",
    category: "الغداء",
  },
  {
    id: Math.random(),
    name: "سلطة",
    price: 15,
    img: photos.salad,
    description: "سلطة خضراء طازجة مع صوص خل",
    category: "العشاء",
  },
  {
    id: Math.random(),
    name: "بسكويت",
    price: 10,
    img: photos.chocolate,
    description: "بسكويت بالشوكولاتة الطازجة",
    category: "الفطار",
  },
  {
    id: Math.random(),
    name: "عصير برتقال",
    price: 8,
    img: photos.orange,
    description: "عصير برتقال طبيعي ومنعش",
    category: "الغداء",
  },
  {
    id: Math.random(),
    name: "شوربة",
    price: 12,
    img: photos.soup,
    description: "شوربة دافئة مع مكونات طازجة",
    category: "العشاء",
  },
  {
    id: Math.random(),
    name: "سوشي",
    price: 30,
    img: photos.sushi,
    description: "سوشي طازج مع صلصة الصويا",
    category: "الفطار",
  },
];

export default items;
