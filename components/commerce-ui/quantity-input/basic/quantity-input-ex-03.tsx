"use client";

import { useState } from "react";
import QuantitySelectorBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";

export default function QuantitySelector_Basic_Ex_03() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      <QuantitySelectorBasic
        quantity={quantity}
        onChange={handleQuantityChange}
        min={1}
        max={30}
        step={3}
      />
    </>
  );
}
