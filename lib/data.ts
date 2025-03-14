import { Data, IProductInput } from "@/types";

import { toSlug } from "./utils";

const products: IProductInput[] = [
  {
    name: "Nike mens Slim-fit  long-Steeve T-shirt",
    slug: toSlug("Nike mens Slim-fit  long-Steeve T-shirt"),
    category: "T-shirt",
    image: ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg"],
    tags: ["New arrival"],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: "Nike",
    avgRating: 4.71,
    numReviews: 7,

    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],

    numSales: 9,
    countInStock: 11,

    description:
      "Nike mens Slim-fit  long-Steeve T-shirt Nike mens Slim-fit  long-Steeve T-shirtNike mens Slim-fit  long-Steeve T-shirt",

    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["white", "red", "black", "blue", "green"],
    reviews: [],
  },
];

const data: Data = {
  products,

  headerMenus: [
    {
      name: "Today's Deal",
      href: `/search?tag=todays-deal`,
    },
    {
      name: "New arrivals",
      href: `/search?tag=new-arrival`,
    },
    {
      name: "Featured products",
      href: `/search?tag=featured`,
    },
    {
      name: "Best sellers",
      href: `/search?tag=best-seller`,
    },
    {
      name: "Browsing history",
      href: `/#browsing-history`,
    },
    {
      name: "Customer service",
      href: `/page/customer-service`,
    },
    {
      name: "About us",
      href: `/page/About us`,
    },
    {
      name: "Help",
      href: `/page/help`,
    },
  ],

  carousels: [
    {
      title: "Most popular shoes for sale",
      buttonCaption: "Shop now",
      image: "/images/b1.jpeg",
      url: "/search?category=Shoes",
      isPublished: true,
    },
    {
      title: "Best Sellers in Month",
      buttonCaption: "Shop now",
      image: "/images/b2.jpeg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },
    {
      title: "Most popular beauty for sale",
      buttonCaption: "Shop now",
      image: "/images/b3.jpeg",
      url: "/search?category=Wrist Watches",
      isPublished: true,
    },
  ],
};

export default data;
