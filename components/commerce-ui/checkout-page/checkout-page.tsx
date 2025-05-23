"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Plus, Minus, X, Tag } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckoutHeader from "@/components/commerce-ui/checkout-page/checkout-header";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
};

interface CheckoutPageProps {
  prefix?: string;
}

function CheckoutPage({ prefix = "$" }: CheckoutPage = {}) {
  const [cartItems, setCartItems] = useState<cartItems>([
    {
      id: 1,
      name: "Item 1",
      price: 100,
      quantity: 1,
      description: "This is a description",
      image:
        "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
      quantity: 5,
    },
    {
      id: 2,
      name: "Item 2",
      price: 1000,
      quantity: 24,
      description: "This is a description",
      image:
        "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
      quantity: 5,
    },
  ]);

  const [total, setTotal] = useState<number>(0);
  const [giftPackage, setGiftPackage] = useState<boolean>(false);

  React.useEffect(() => {
    setTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const handlePlaceOrder = () => {
    alert("Order Placed!");
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleGiftPackage = () => {
    if (giftPackage) {
      setTotal((prevTotal) => prevTotal - 5);
      setGiftPackage(false);
      alert("Gift Package Removed!");
      return;
    }
    setTotal((prevTotal) => prevTotal + 5);
    setGiftPackage(true);
    alert("Gift Package Added!");
  };

  return (
    <div className="mx-auto p-0 md:p-20">
      <CheckoutHeader step="cart" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="border-gray col-span-1 md:col-span-2 md:p-2">
          <div className="mt-4 rounded md:p-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger>Available Offers</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">
                    10% Instant Discount on Kotak Bank Credit and Debit Cards
                    and Credit Card EMI on a min spend of ₹3,500.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-4 rounded md:border md:p-2">
            {cartItems.map((item) => (
              <span
                key={item.id}
                className="flex gap-2 border-b border-gray-200 p-0 py-2 md:p-4"
              >
                <img
                  src={item.image}
                  alt="Preview"
                  className="h-24 w-24 rounded object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm font-semibold">{item.description}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="text-md">{prefix + item.price}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center rounded border px-2">
                      <button
                        className="text-gray-500"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="text-gray-500"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="top-0 right-0 text-gray-500"
                  onClick={() => removeItem(item.id)}
                >
                  <X size={18} />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="mt-2 rounded border p-2">
            <h3 className="flex items-center gap-2 font-semibold">
              <Tag size={12} /> Coupons
            </h3>
            <div className="mt-2 flex w-full flex-col gap-2">
              <input
                type="text"
                placeholder="Apply Coupons"
                className="flex-1 rounded border p-2"
              />
              <Button onClick={() => alert("Invalid Coupon")}>Apply</Button>
            </div>
          </div>

          <div className="bg-rose mt-4 flex-col items-center justify-between rounded border p-4">
            <div className="flex gap-2">
              <img
                src="/placeholders/gift-big.png"
                className="text-black-600 h-16 w-16"
              />
              <div>
                <p className="text-sm font-semibold">Buying for a loved one?</p>
                <p className="text-xs text-gray-600">
                  Gift packaging and personalised message on card, only for{" "}
                  {prefix}5
                </p>
              </div>
            </div>
            <button
              className="mt-2 cursor-pointer text-sm font-semibold text-rose-600 hover:text-rose-400"
              onClick={() => handleGiftPackage()}
            >
              {giftPackage ? "Remove" : "Add Gift Package"}
            </button>
          </div>

          <div className="mt-4 rounded border p-4">
            <h3 className="font-semibold">Price Details</h3>
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span> <span>{prefix + total}</span>
            </div>
          </div>

          <Button className="my-2 w-full" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
