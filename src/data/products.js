import lehenga from "/lehenga.webp"   
import whitetop from "/white-top_comp.webp";
import chaniyacholi from "/chaniya choli_comp.webp";
import pinkcholi from "/pink choli_comp.webp";
import productfive from "/product5_comp.webp";
import productsix from "/product6_comp.webp";
import productseven from "/product7_comp.webp";
import producteight from "/product 8_comp.webp";

const products = [
  {
    id: 1,
    name: "Lehenga",
    price: 1999,
    image: lehenga,
    images: [lehenga, whitetop, chaniyacholi],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "sarees",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 2,
    name: "Casual White Top",
    price: 899,
    image: whitetop,
    images: [whitetop, chaniyacholi, lehenga],
    description: "Beautiful white top dskjksdjhfjds ",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 3,
    name: "Chaniya Choli",
    price: 2199,
    image: chaniyacholi,
    images: [chaniyacholi, lehenga, whitetop],
    description: "Cool Denim Jacket with 4 pockets for party",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 4,
    name: "Pink Choli",
    price: 1899,
    image: pinkcholi,
    images: [pinkcholi, chaniyacholi, lehenga],
    description: "Stylish Pink colored co-ord set which suits every ocassion",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    price: 1299,
    image: productfive,
    images: [productfive, whitetop, chaniyacholi],
    description:
      "description for the given product 5 which specifies it mostly",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 6,
    name: "Product 6",
    price: 1499,
    image: productsix,
    images: [productsix, productfive, chaniyacholi],
    description:
      "description for the given product 6 which specifies it mostly",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 7,
    name: "Product 7",
    price: 1999,
    image: productseven,
    images: [productseven, producteight, chaniyacholi],
    description:
      "description for the given product 7 which specifies it mostly",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 8,
    name: "Product 8",
    price: 1499,
    image: producteight,
    images: [producteight, productseven, chaniyacholi],
    description:
      "description for the given product 8 which specifies it mostly",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  //Accessories
  {
    id: 9,
    name: "Dangle Earrings",
    price: 999,
    description: "aufhahk dskj kdkdsv ;ldskfdskj;dsfkd ",
    category: "accessories",
    image:
      "https://images.pexels.com/photos/12145096/pexels-photo-12145096.jpeg?w=500&q=80",
    images: [
      "https://images.pexels.com/photos/12145096/pexels-photo-12145096.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    ],
  },
  {
    id: 10,
    name: "Earpiece",
    price: 1999,
    image:
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/12145096/pexels-photo-12145096.jpeg?w=500&q=80",

      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    ],
  },
  {
    id: 11,
    name: "prodcut",
    price: 2699,
    image:
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/12145096/pexels-photo-12145096.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
    ],
  },
  {
    id: 12,
    name: "Jewel",
    price: 1199,
    image:
      "https://images.pexels.com/photos/13595733/pexels-photo-13595733.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/13595733/pexels-photo-13595733.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    ],
  },
  {
    id: 13,
    name: "Glitz Drop Earrings",
    price: 1299,
    image:
      "https://images.pexels.com/photos/7509257/pexels-photo-7509257.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/7509257/pexels-photo-7509257.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    ],
  },
  {
    id: 14,
    name: "Bracelet",
    price: 1999,
    image:
      "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    ],
  },
  {
    id: 15,
    name: "Polki Chandbali earrings",
    price: 1999,
    image:
      "https://images.pexels.com/photos/13595829/pexels-photo-13595829.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/13595829/pexels-photo-13595829.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    ],
  },
  {
    id: 16,
    name: "Hoop Earring",
    price: 1399,
    image:
      "https://images.pexels.com/photos/7941485/pexels-photo-7941485.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/7941485/pexels-photo-7941485.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/13595829/pexels-photo-13595829.jpeg?w=500&q=80",
    ],
  },
  {
    id: 17,
    name: "Cluster Ring",
    price: 2299,
    image:
      "https://images.pexels.com/photos/10792976/pexels-photo-10792976.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/10792976/pexels-photo-10792976.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/7941485/pexels-photo-7941485.jpeg?w=500&q=80",
    ],
  },
  {
    id: 18,
    name: "Pearl Bracelet",
    price: 999,
    image:
      "https://images.pexels.com/photos/8281585/pexels-photo-8281585.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/8281585/pexels-photo-8281585.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/29385411/pexels-photo-29385411.jpeg?w=500&q=80",
    ],
  },
  {
    id: 19,
    name: "Bangle Bracelet",
    price: 999,
    image:
      "https://images.pexels.com/photos/29385411/pexels-photo-29385411.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/29385411/pexels-photo-29385411.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/5442463/pexels-photo-5442463.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    ],
  },

  {
    id: 20,
    name: "prodcut",
    price: 2699,
    image:
      "https://images.pexels.com/photos/29502924/pexels-photo-29502924.jpeg?w=500&q=80",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/29502924/pexels-photo-29502924.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/29385411/pexels-photo-29385411.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?w=500&q=80",
    ],
  },

  //sarees section
  {
    id: 21,
    name: "Wedding Saree",
    price: 2499,
    image:
      "https://images.pexels.com/photos/13162252/pexels-photo-13162252.jpeg?w=500&q=80",
    images: [
      "https://images.pexels.com/photos/13162252/pexels-photo-13162252.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/35399662/pexels-photo-35399662.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?w=500&q=80",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "sarees",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 22,
    name: "Red Saree",
    price: 1599,
    image:
      "https://images.pexels.com/photos/35399662/pexels-photo-35399662.jpeg?w=500&q=80",
    images: [
      "https://images.pexels.com/photos/35399662/pexels-photo-35399662.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/13162252/pexels-photo-13162252.jpeg?w=500&q=80",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "sarees",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 23,
    name: "Red Wedding Saree",
    price: 2199,
    image:
      "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?w=500&q=80",
    images: [
      "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/35399662/pexels-photo-35399662.jpeg?w=500&q=80",

      "https://images.pexels.com/photos/13162252/pexels-photo-13162252.jpeg?w=500&q=80",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "sarees",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 24,
    name: "Red-Grey Saree",
    price: 1999,
    image:
      "https://images.pexels.com/photos/13192074/pexels-photo-13192074.jpeg?w=500&q=80",
    images: [
      "https://images.pexels.com/photos/13192074/pexels-photo-13192074.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/13162252/pexels-photo-13162252.jpeg?w=500&q=80",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "sarees",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 25,
    name: "Pink Saree",
    price: 1899,
    image:
      "https://images.pexels.com/photos/6382266/pexels-photo-6382266.jpeg?w=500&q=80",
    images: [
      "https://images.pexels.com/photos/6382266/pexels-photo-6382266.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/13162252/pexels-photo-13162252.jpeg?w=500&q=80",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "sarees",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 26,
    name: "Blue Saree",
    price: 1699,
    image:
      "https://images.pexels.com/photos/29049398/pexels-photo-29049398.jpeg?w=500&q=80",
    images: [
      "https://images.pexels.com/photos/29049398/pexels-photo-29049398.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/13162252/pexels-photo-13162252.jpeg?w=500&q=80",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "sarees",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 27,
    name: "Saffron Saree",
    price: 1499,
    image:
      "https://images.pexels.com/photos/28943495/pexels-photo-28943495.jpeg?w=500&q=80",
    images: [
      "https://images.pexels.com/photos/28943495/pexels-photo-28943495.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?w=500&q=80",
      "https://images.pexels.com/photos/13162252/pexels-photo-13162252.jpeg?w=500&q=80",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "sarees",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  //Kurtis section
  {
    id: 28,
    name: "Grey Kurti",
    price: 1399,
    image:
      "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/27603233/pexels-photo-27603233.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/31323190/pexels-photo-31323190.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "kurtis",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 29,
    name: "Dark grey Kurti",
    price: 1899,
    image:
      "https://images.pexels.com/photos/27603233/pexels-photo-27603233.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/27603233/pexels-photo-27603233.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/31323190/pexels-photo-31323190.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "kurtis",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 30,
    name: "Maroon Kurti",
    price: 1499,
    image:
      "https://images.pexels.com/photos/31323190/pexels-photo-31323190.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/31323190/pexels-photo-31323190.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/27603233/pexels-photo-27603233.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "kurtis",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 31,
    name: "Yellow-green Kurti",
    price: 1499,
    image:
      "https://images.pexels.com/photos/28213745/pexels-photo-28213745.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/28213745/pexels-photo-28213745.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/32347613/pexels-photo-32347613.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?w=500&q=8",
    ],

    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "kurtis",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 32,
    name: "Dark Kurti",
    price: 1599,
    image:
      "https://images.pexels.com/photos/32347613/pexels-photo-32347613.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/32347613/pexels-photo-32347613.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/28213745/pexels-photo-28213745.jpeg?w=500&q=8",

      "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?w=500&q=8",
    ],

    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "kurtis",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 33,
    name: "Light blue Kurti",
    price: 1499,
    image:
      "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/28213745/pexels-photo-28213745.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/32347613/pexels-photo-32347613.jpeg?w=500&q=8",
    ],

    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "kurtis",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 34,
    name: "Light grey Kurti",
    price: 1499,
    image:
      "https://images.pexels.com/photos/28512779/pexels-photo-28512779.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/28512779/pexels-photo-28512779.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/32347613/pexels-photo-32347613.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?w=500&q=8",
    ],

    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "kurtis",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 35,
    name: "Kurti",
    price: 1699,
    image:
      "https://images.pexels.com/photos/33300904/pexels-photo-33300904.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/33300904/pexels-photo-33300904.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/32347613/pexels-photo-32347613.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?w=500&q=8",
    ],

    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "kurtis",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  //Anarkali Section

  {
    id: 36,
    name: "Orange Anarkali",
    price: 1799,
    image:
      "https://images.pexels.com/photos/5922737/pexels-photo-5922737.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/5922737/pexels-photo-5922737.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/34673582/pexels-photo-34673582.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/28512773/pexels-photo-28512773.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "anarkali",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 37,
    name: "Purple Anarkali",
    price: 1599,
    image:
      "https://images.pexels.com/photos/34673582/pexels-photo-34673582.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/34673582/pexels-photo-34673582.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/5922737/pexels-photo-5922737.jpeg?w=500&q=8",

      "https://images.pexels.com/photos/28512773/pexels-photo-28512773.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "anarkali",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 38,
    name: "White Anarkali",
    price: 1999,
    image:
      "https://images.pexels.com/photos/28512773/pexels-photo-28512773.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/28512773/pexels-photo-28512773.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/5922737/pexels-photo-5922737.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/34673582/pexels-photo-34673582.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "anarkali",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 39,
    name: "Grey Anarkali",
    price: 1899,
    image:
      "https://images.pexels.com/photos/22064227/pexels-photo-22064227.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/22064227/pexels-photo-22064227.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/18380705/pexels-photo-18380705.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/13162239/pexels-photo-13162239.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "anarkali",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 40,
    name: "Light Grey Anarkali",
    price: 1499,
    image:
      "https://images.pexels.com/photos/18380705/pexels-photo-18380705.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/22064227/pexels-photo-22064227.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/13162239/pexels-photo-13162239.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/18380705/pexels-photo-18380705.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "anarkali",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 41,
    name: "Light Pink Anarkali",
    price: 2499,
    image:
      "https://images.pexels.com/photos/13162239/pexels-photo-13162239.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/13162239/pexels-photo-13162239.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/22064227/pexels-photo-22064227.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/18380705/pexels-photo-18380705.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "anarkali",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
  {
    id: 42,
    name: "Yellow Anarkali",
    price: 1399,
    image:
      "https://images.pexels.com/photos/34658495/pexels-photo-34658495.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/34658495/pexels-photo-34658495.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/5922737/pexels-photo-5922737.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/13162239/pexels-photo-13162239.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "anarkali",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 43,
    name: "Orange Anarkali",
    price: 1699,
    image:
      "https://images.pexels.com/photos/5922737/pexels-photo-5922       737.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/5922737/pexels-photo-5922737.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/18380705/pexels-photo-18380705.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/13162239/pexels-photo-13162239.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "anarkali",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  //salwaer-suits

  {
    id: 44,
    name: "Salwar Suit",
    price: 1299,
    image:
      "https://images.pexels.com/photos/20777176/pexels-photo-20777176.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/20777176/pexels-photo-20777176.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/25185000/pexels-photo-25185000.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/20777203/pexels-photo-20777203.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "salwar-suits",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 45,
    name: "Salwar Suit",
    price: 1499,
    image:
      "https://images.pexels.com/photos/25185000/pexels-photo-25185000.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/25185000/pexels-photo-25185000.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/20777176/pexels-photo-20777176.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/20777203/pexels-photo-20777203.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "salwar-suits",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 46,
    name: "Salwar Suit",
    price: 1599,
    image:
      "https://images.pexels.com/photos/20777203/pexels-photo-20777203.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/20777203/pexels-photo-20777203.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/20777176/pexels-photo-20777176.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/25185000/pexels-photo-25185000.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "salwar-suits",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 47,
    name: "Salwar Suit",
    price: 1599,
    image:
      "https://images.pexels.com/photos/33363057/pexels-photo-33363057.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/33363057/pexels-photo-33363057.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/20777181/pexels-photo-20777181.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/25184999/pexels-photo-25184999.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "salwar-suits",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 48,
    name: "Salwar Suit",
    price: 1399,
    image:
      "https://images.pexels.com/photos/20777181/pexels-photo-20777181.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/20777181/pexels-photo-20777181.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/11840167/pexels-photo-11840167.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/20407197/pexels-photo-20407197.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "salwar-suits",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 49,
    name: "Salwar Suit",
    price: 1299,
    image:
      "https://images.pexels.com/photos/25184999/pexels-photo-25184999.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/25184999/pexels-photo-25184999.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/11840167/pexels-photo-11840167.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/20407197/pexels-photo-20407197.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "salwar-suits",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 50,
    name: "Salwar Suit",
    price: 1799,
    image:
      "https://images.pexels.com/photos/20407197/pexels-photo-20407197.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/20407197/pexels-photo-20407197.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/11840167/pexels-photo-11840167.jpeg?w=500&q=8",

      "https://images.pexels.com/photos/25184999/pexels-photo-25184999.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "salwar-suits",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },

  {
    id: 51,
    name: "Salwar Suit",
    price: 1899,
    image:
      "https://images.pexels.com/photos/11840167/pexels-photo-11840167.jpeg?w=500&q=8",
    images: [
      "https://images.pexels.com/photos/11840167/pexels-photo-11840167.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/20407197/pexels-photo-20407197.jpeg?w=500&q=8",
      "https://images.pexels.com/photos/25184999/pexels-photo-25184999.jpeg?w=500&q=8",
    ],
    description: "Beautiful lahenga with customized dupatta",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Maroon", "Pink"],
    category: "salwar-suits",
    mainCategory: "women",
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Amazing quality!" },
      { id: 2, user: "Anita", rating: 4, comment: "very elegent design." },
    ],
  },
];

export default products;
