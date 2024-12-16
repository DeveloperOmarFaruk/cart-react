import React, { useState } from "react";
import { productData } from "../FackData/FackData";
import { toast } from "react-toastify";

const useFunction = () => {
  // State Management
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);
  const [selectedSize, setSelectedSize] = useState(
    selectedProduct.sizes[0].size
  );
  const [selectedPrice, setSelectedPrice] = useState(
    selectedProduct.sizes[0].dPrice
  );
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  // Functions

  // Handle size selection function
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Handle size selection function
  const handlePriceSelect = (price) => {
    setSelectedPrice(price);
  };

  // Handle color selection function
  const handleColorChange = (colorId) => {
    const color = selectedProduct.colors.find((c) => c.id === colorId);
    setSelectedColor(color);
  };

  // Handle Add to Cart function
  const handleAddToCart = () => {
    const cartItem = {
      image: selectedColor.image,
      title: selectedProduct.title,
      color: selectedColor.color,
      size: selectedSize,
      quantity: quantity,
      price: selectedPrice * quantity,
    };
    setCart([...cart, cartItem]);
    toast.success("Your cart added");
  };

  const totalQuantity = cart.reduce(
    (sum, item) => sum + parseInt(item.quantity),
    0
  );
  const totalPrice = cart.reduce((sum, item) => sum + parseInt(item.price), 0);

  return {
    selectedColor,
    selectedProduct,
    selectedPrice,
    selectedSize,
    quantity,
    cart,
    totalQuantity,
    totalPrice,
    handleColorChange,
    handleSizeSelect,
    handlePriceSelect,
    setQuantity,
    handleAddToCart,
  };
};

export default useFunction;
