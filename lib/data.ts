/* import b1 from "@/public/images/b1.jpeg";
import b2 from "@/public/images/b2.jpeg";
import b3 from "@/public/images/b3.jpeg"; */

const data = {
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
