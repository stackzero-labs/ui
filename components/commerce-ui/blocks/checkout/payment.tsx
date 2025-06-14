"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  discountPercent?: number;
}

const Payment: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [originalTotal, setOriginalTotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountedTotal, setDiscountedTotal] = useState(0);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    // Fake cart items for demo
    const demoCart: CartItem[] = [
      { name: "T-shirt", price: 500, quantity: 2, discountPercent: 10 },
      { name: "Shoes", price: 1500, quantity: 1 },
    ];

    setCartItems(demoCart);

    // Calculate totals
    const original = demoCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discount = demoCart.reduce((acc, item) => {
      const discount = item.discountPercent
        ? (item.price * item.quantity * item.discountPercent) / 100
        : 0;
      return acc + discount;
    }, 0);
    const discounted = original - discount;

    setOriginalTotal(original);
    setDiscountAmount(discount);
    setDiscountedTotal(discounted);

    // Generate a fake Order ID
    const fakeId = `ORD-${Math.floor(Math.random() * 900000 + 100000)}`;
    setOrderId(fakeId);
  }, []);

  return (
    <Card className="max-w-md mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-center text-xl">Pay via UPI</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-4">
        <img
          src="/images/payment-qr-code.jpeg"
          alt="Scan to pay via UPI"
          className="w-64 h-64 border rounded"
        />

        <div className="text-sm text-center">
          Please scan the QR code using any UPI app (Google Pay, PhonePe, etc.).
          <br />
          <strong>Include your Order ID in the Payment NOTE:</strong>
          <div className="text-base font-semibold mt-1 bg-gray-100 p-2 rounded">
            {orderId}
          </div>
          <p className="mt-2">
            We won’t be able to process your order without this information.
          </p>

          <div className="mt-4 text-left w-full">
            <p>Original Total: ₹{originalTotal}</p>
            <p>Discount: -₹{discountAmount}</p>
            <p className="font-semibold text-green-600">
              Payable Amount: ₹{discountedTotal}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payment;

