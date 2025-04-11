"use client";

import { useState } from "react";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";

export default function QuantityInput_Basic_Ex_01() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      <QuantityInputBasic quantity={quantity} onChange={handleQuantityChange} />
    </>
  );
}
