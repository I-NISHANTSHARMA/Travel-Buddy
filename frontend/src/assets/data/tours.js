import tourImg01 from "../images/jaiselmer.jpg";
// import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg07 from "../images/thailand.jpg";
import tourImg03 from "../images/tour-img03.jpg"
import tourImg04 from "../images/Tajmahal.jpg";
// import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/Leh.jpg";
// import tourImg06 from "../images/tour-img06.jpg";
import tourImg08 from "../images/srinagar.jpg";

const tours = [
  {
    id: "01",
    title: "Jaisalmer",
    city: "Rajasthan",
    distance: 800,
    address :'In India',
    price: 4999,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Palolem Beach",
    city: "Goa",
    distance: 1000,
    address :'Somewhere',
    price: 9999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Solang Valley",
    city: "Manali",
    distance: 500,
    address :'Somewhere',
    price: 6999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Taj Mahal",
    city: "Agra",
    distance: 400,
    address :'Somewhere',
    price: 3999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Tso Moriri",
    city: "Ladakh",
    distance: 500,
    address :'Somewhere',
    price: 12000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Leh",
    city: "Ladakh,India",
    distance: 550,
    address :'Somewhere',
    price: 13999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Srinagar",
    city: "Jammu and Kashmir",
    distance: 2000,
    address :'Somewhere',
    price: 15000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 10000,
    address :'Somewhere',
    price: 99000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      // {
      //   // name: "jhon doe",
      //   // rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  
];

export default tours;