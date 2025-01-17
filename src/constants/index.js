import {
  card_img1,
  card_img2,
  card_img3,
  card_img4,
  card_img5,
  card_img6,
  card_img7,
  card_img8,
  card_img9,
  card_img10,
  card_img11,
  footwear_1,
  footwear_2,
  footwear_3,
  Product_banner_01,
  Product_banner_02,
  Product_banner_03,
  Product_banner_04,
  Product_banner_05,
  Product_banner_06,
  Product_banner_07,
  Product_banner_08,
  mvp1,
  mvp2,
  nike_img1,
  nike_img2,
  nike_img3,
  product_d1,
  product_d2,
  product_d3,
  product_d4,
  product_d5,
  product_d6,
  xtra_p1,
  xtra_p2,
  xtra_p3,
  // xtra_p2,
  // xtra_p3,
} from "../assets/Images";
export const navLinks = [
  {
    id: "category",
    title: "Category",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// nav item data start l.
export const navData = [
  {
    url: "",
    title: "Home",
  },
  {
    url: "category",
    title: "Category",
  },
  {
    url: "offers",
    title: "Offers",
  },
  {
    url: "products",
    title: "Products",
  },
  {
    url: "contact",
    title: "Contact",
  },
];

// nav item data end
export const cards = [
  {
    name: "Nike Air Max 270",
    description: "ONE TAKE",
    rate: 4,
    img: footwear_1,
  },
  {
    name: "Nike Air Max 270",
    description: "ONE TAKE",
    rate: 4,
    img: footwear_2,
  },
  {
    name: "Nike Air Max 270",
    description: "ONE TAKE",
    rate: 4,
    img: footwear_3,
  },
];

export const productMYNTG = [
  {
    name: "1",
    img: Product_banner_01,
  },
  {
    name: "2",
    img: Product_banner_02,
  },
  {
    name: "3",
    img: Product_banner_03,
  },
  {
    name: "4",
    img: Product_banner_04,
  },
  {
    name: "5",
    img: Product_banner_05,
  },
  {
    name: "6",
    img: Product_banner_06,
  },
  {
    name: "7",
    img: Product_banner_07,
  },
  {
    name: "8",
    img: Product_banner_08,
  },
];

export const allproducts = [
  {
    title: "Bestseller",
    name: "Nike Air Force 1 ‘07 EasyOn",
    type: "Women’s Shoes",
    color: "2 Colours",
    price: "$17.00",
    img: card_img1,
  },
  {
    title: "Just In",
    name: "Nike Air Huarache x Serena Williams Design Crew",
    type: "Women’s Shoes",
    color: "1 Colours",
    price: "$17.00",
    img: card_img2,
  },
  {
    title: "",
    name: "Nike DBreak Vintage",
    type: "Women’s Shoes",
    color: "1 Colours",
    price: "$17.00",
    img: card_img3,
  },
  {
    title: "",
    name: "Nike DBreak Vintage",
    type: "Women’s Shoes",
    color: "1 Colours",
    price: "$17.00",
    img: card_img4,
  },
  {
    title: "Just In",
    name: "Nike Structure 25",
    type: "Women;s Road Running Shoes",
    color: "3 Colours",
    price: "$17.00",
    img: card_img5,
  },
  {
    title: "Bestseller",
    name: "Nike Gamma Force",
    type: "Women’s Shoes",
    color: "3 Colours",
    price: "$17.00",
    img: card_img6,
  },
  {
    title: "Promo Exclusion",
    name: "Air Jordan Elevate Low",
    type: "Women’s Shoes",
    color: "6 Colours",
    price: "$17.00",
    img: card_img7,
  },
  {
    title: "",
    name: "NikeCourt Air Zoom Vapor Pro 2",
    type: "Women’s Hard Court Tennis Shoes",
    color: "3 Colours",
    price: "$17.00",
    img: card_img8,
  },
  {
    title: "Bestseller",
    name: "Nike Gamma Force",
    type: "Women’s Shoes",
    color: "3 Colours",
    price: "$17.00",
    img: card_img9,
  },
  {
    title: "Promo Exclusion",
    name: "Air Jordan Elevate Low",
    type: "Women’s Shoes",
    color: "6 Colours",
    price: "$17.00",
    img: card_img10,
  },
  {
    title: "",
    name: "NikeCourt Air Zoom Vapor Pro 2",
    type: "Women’s Hard Court Tennis Shoes",
    color: "3 Colours",
    price: "$17.00",
    img: card_img11,
  },
];

// Product details start

export const productDetailsimg = [
  {
    img: [
      product_d1,
      product_d2,
      product_d3,
      product_d4,
      product_d5,
      product_d6,
    ],
  },
];

// MVP Data start
export const mvpData = [
  {
    url: mvp1,
  },
  {
    url: mvp2,
  },
];
// MVP Data end
// nike tech start
export const nikeTechData = [
  {
    url: nike_img1,
  },
  {
    url: nike_img2,
  },
  {
    url: nike_img3,
  },
];
// nike tech end

// size chart btns
const sbtn = [];
let s = 1.5;
for (let i = 1; i < 22; i++) {
  if (i < 12) {
    sbtn[i] = { size: s };
    s += 0.5;
  } else {
    sbtn[i] = { size: s };
    s += 1;
  }
}

export { sbtn };

// size chart btns end

//Review data

export const review = [
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 4,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 5,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 4,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 1,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 4,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 3,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 2,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 4,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 5,
  },
  {
    name: "John Doe",
    date: "24th September 2023",
    topic: "Lorem ipsum dolor ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    rate: 3,
  },
];

export const xtrashoe = [
  {
    img: xtra_p1,
    entity: "Jordan 2",
    type: "Men's Shoes",
    price: "17.00",
  },
  {
    img: xtra_p2,
    entity: "Jordan 3",
    type: "Men's Shoes",
    price: "17.00",
  },
  {
    img: xtra_p3,
    entity: "Jordan 4",
    type: "Men's Shoes",
    price: "17.00",
  },
];

export const footitems1 = [
  {
    des: "Find a Store",
    link: "#",
    color: "text-white",
  },
  {
    des: "Become a member",
    link: "#",
    color: "text-white",
  },
  {
    des: "Send us feedback",
    link: "#",
    color: "text-white",
  },
  {
    des: "Students discount",
    link: "#",
    color: "text-white",
  },
];

export const footitems2 = [
  {
    des: "GET HELP",
    link: "#",
    color: "text-white",
  },
  {
    des: "Order status",
    link: "#",
  },
  {
    des: "Delivery",
    link: "#",
  },
  {
    des: "Returns",
    link: "#",
  },
  {
    des: "Payment options",
    link: "#",
  },
  {
    des: "Contact us",
    link: "#",
  },
  {
    des: "All other enquiries",
    link: "#",
  },
];

export const footitems3 = [
  {
    des: "ABOUT NIKE",
    link: "#",
    color: "text-white",
  },
  {
    des: "News",
    link: "#",
  },
  {
    des: "Careers",
    link: "#",
  },
  {
    des: "Investors",
    link: "#",
  },
  {
    des: "Sustainability",
    link: "#",
  },
];