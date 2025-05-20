"use client";

import React, { useState, useEffect } from "react";
import Cart_01, {
  CartProduct,
} from "@/components/commerce-ui/blocks/carts/cart-01";
import { Button } from "@/components/ui/button";

export default function CartExample_01() {
  // Initial products for the demo
  const initialProducts: CartProduct[] = [
    {
      id: "prod-1",
      imageUrl:
        "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
      name: "Wireless Headphones",
      price: 98.96,
      quantity: 1,
    },
    {
      id: "prod-2",
      imageUrl:
        "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/smartwatch-01.jpg",
      name: "Smart Watch",
      price: 129.99,
      quantity: 2,
    },
    {
      id: "prod-3",
      imageUrl:
        "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
      name: "Bluetooth Speaker",
      price: 79.95,
      quantity: 1,
    },
  ];

  // State management
  const [products, setProducts] = useState<CartProduct[]>(initialProducts);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [shippingCost] = useState<number>(15.99);
  const [vatRate] = useState<number>(0.2); // 20% VAT rate

  // Calculate subtotal whenever the products change
  useEffect(() => {
    const newSubtotal = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setSubtotal(newSubtotal);
  }, [products]);

  // Handler to update product quantity
  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  // Handler to remove a product
  const handleRemoveProduct = (productId: string) => {
    const productName = products.find((p) => p.id === productId)?.name;
    setProducts(products.filter((product) => product.id !== productId));
  };

  // Add a demo product
  const handleAddDemoProduct = () => {
    const demoProducts = [
      {
        id: `demo-${Date.now()}`,
        imageUrl:
          "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
        name: "SoundSphere Ultra Wireless Speaker",
        price: 49.99,
        quantity: 1,
      },
      {
        id: `demo-${Date.now() + 1}`,
        imageUrl:
          "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphones-4.jpg",
        name: "AeroTune X9",
        price: 89.95,
        quantity: 1,
      },
    ];

    const randomProduct =
      demoProducts[Math.floor(Math.random() * demoProducts.length)];
    setProducts([...products, randomProduct]);
  };

  // Reset cart to initial state
  const handleResetCart = () => {
    setProducts(initialProducts);
  };

  return (
    <div className="mx-auto max-w-4xl py-8">
      <div className="mb-6 flex justify-center space-x-4">
        <Button
          onClick={handleAddDemoProduct}
          variant="outline"
          className="font-mono"
          size="sm"
        >
          Add Demo Product
        </Button>

        <Button
          onClick={handleResetCart}
          variant="outline"
          className="font-mono"
          size="sm"
        >
          Reset Cart
        </Button>
      </div>

      <Cart_01
        storeName="TechGadgets Store"
        logoUrl="https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/logo-05.png"
        products={products}
        subtotal={subtotal}
        shippingCost={shippingCost}
        vatRate={vatRate}
        currencyPrefix="$"
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
}
