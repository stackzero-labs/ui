"use client";

import Cart_01, {
  CartCheckoutPayload,
  CartProduct,
} from "@/components/commerce-ui/blocks/carts/cart-01";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    setProducts(products.filter((product) => product.id !== productId));
  };

  // Handler for checkout
  const handleCheckout = (payload: CartCheckoutPayload) => {
    const itemCount = payload.products.reduce((sum, p) => sum + p.quantity, 0);
    window.alert(
      `Proceeding to checkout with ${itemCount} items.\nTotal: ${payload.currencyPrefix}${payload.totalAmount.toFixed(2)}
      `
    );
  };

  // Handler for continue shopping
  const handleContinueShopping = (payload: CartCheckoutPayload) => {
    if (payload.products.length === 0) {
      window.alert("Starting your shopping journey!");
    } else {
      const itemCount = payload.products.reduce(
        (sum, p) => sum + p.quantity,
        0
      );
      window.alert(
        `Continuing shopping with ${itemCount} items in your cart.\nSubtotal: ${payload.currencyPrefix}${payload.subtotal.toFixed(2)}
        `
      );
    }
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
          "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-4.jpg",
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
    setErrorMessage("");
  };

  // Clear cart
  const handleClearCart = () => {
    setProducts([]);
    setErrorMessage("");
  };

  // Toggle loading state
  const handleToggleLoading = () => {
    setIsLoading(!isLoading);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // Toggle error state
  const handleToggleError = () => {
    if (errorMessage) {
      setErrorMessage("");
    } else {
      setErrorMessage("Unable to load cart items. Please try again later.");
    }
    if (isLoading) {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl py-8">
      <div className="mb-6 flex flex-wrap justify-center gap-4">
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

        <Button
          onClick={handleClearCart}
          variant="outline"
          className="font-mono"
          size="sm"
        >
          Clear Cart
        </Button>

        <Button
          onClick={handleToggleLoading}
          variant="outline"
          className={`font-mono ${
            isLoading ? "border-blue-500 text-blue-500" : ""
          }`}
          size="sm"
        >
          {isLoading ? "Stop Loading" : "Simulate Loading"}
        </Button>

        <Button
          onClick={handleToggleError}
          variant="outline"
          className={`font-mono ${
            errorMessage ? "border-red-500 text-red-500" : ""
          }`}
          size="sm"
        >
          {errorMessage ? "Clear Error" : "Simulate Error"}
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
        isLoading={isLoading}
        errorMessage={errorMessage}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveProduct={handleRemoveProduct}
        onCheckout={handleCheckout}
        onContinueShopping={handleContinueShopping}
      />
    </div>
  );
}
