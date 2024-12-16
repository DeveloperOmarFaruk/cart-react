import blackWatch from "../assets/images/black.jpg";
import primaryWatch from "../assets/images/primary.jpg";
import lightGreenWatch from "../assets/images/lightGreen.jpg";
import purpleWatch from "../assets/images/purple.jpg";

export const productData = [
  {
    id: 0,
    title: "Classy Modern Smart Watch",
    reviewStar: 4.5,
    reviewNumber: 2,
    type: "Watch",
    modelNumber: "Forerunner 290XT",
    price: 99,
    sizes: [
      {
        id: 0,
        size: "S",
        dPrice: 69,
      },
      {
        id: 1,
        size: "M",
        dPrice: 79,
      },
      {
        id: 2,
        size: "L",
        dPrice: 89,
      },
      {
        id: 3,
        size: "XL",
        dPrice: 99,
      },
    ],
    colors: [
      {
        id: 0,
        cCode: "#816bff",
        color: "Purple",
        image: purpleWatch,
      },
      {
        id: 1,
        cCode: "#1fcec9",
        color: "Cyan",
        image: lightGreenWatch,
      },
      {
        id: 2,
        cCode: "#4b97d3",
        color: "Blue",
        image: primaryWatch,
      },
      {
        id: 3,
        cCode: "#3b4747",
        color: "Black",
        image: blackWatch,
      },
    ],
    description:
      "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
  },
];
