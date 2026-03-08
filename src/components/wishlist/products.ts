import type { Product } from "./ProductCard";
import Wishlist1 from "../../assets/Wishlist1.png"
import Wishlist2 from "../../assets/Wishlist2.png";
import Wishlist3 from "../../assets/Wishlist3.png";
import Wishlist4 from "../../assets/Wishlist4.png";
import Wishlist5 from "../../assets/Wishlist5.png";
import Wishlist6 from "../../assets/Wishlist6.png";
import Wishlist7 from "../../assets/Wishlist7.png";
import Wishlist8 from "../../assets/Wishlist8.png";

export const wishlistProducts: Product[] = [
  {
    id: 1,
    name: "Gucci Duffle Bag",
    price: 960,
    oldPrice: 1160,
    image: Wishlist1,
    discount: "-35%",
  },
  {
    id: 2,
    name: "RGB Liquid CPU Cooler",
    price: 160,
    image: Wishlist2,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 100,
    image: Wishlist3,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    image: Wishlist4,
  },
];

export const recommendedProducts: Product[] = [
  {
    id: 5,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1160,
    image: Wishlist5,
    discount: "-35%",
    rating: 5,
    reviews: 65,
  },
  {
    id: 6,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    image: Wishlist6,
    rating: 5,
    reviews: 65,
  },
  {
    id: 7,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    image: Wishlist7,
    badge: "NEW",
    rating: 4,
    reviews: 65,
  },
  {
    id: 8,
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: Wishlist8,
    rating: 4,
    reviews: 65,
  },
];
