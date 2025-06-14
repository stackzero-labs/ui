"use client"
import React from "react";
import Cart from "./cart";
import Address from "./address";
import Payment from "./payment";
import { useRouter } from 'next/navigation';


function Checkout_01() {
  const isAuthenticated = true;
    const router = useRouter();

  const [step, setStep] = React.useState("address");

  const handlePlaceOrder = () => {
    if (isAuthenticated) {
      setStep("address");
    } else {
      router.push("/login?redirect=/checkout?step=address");
    }
  };

  return (
    <div className="container mx-auto py-4 min-h-screen">
      <div className="w-full max-w-md mx-auto pb-8 flex items-center justify-between hidden md:flex">
        <p
          className={`font-semibold text-green uppercase ${step === "cart" ? "text-secondary" : ""}`}
        >
          Cart
        </p>
        <div className="flex items-center justify-center space-x-1 mx-2">
          <div className="w-1 h-1 bg-[#8EDDCB] rounded-full" />
          <div className="w-2 h-2 bg-[#8EDDCB] rounded-full" />
          <div className="w-2 h-2 bg-[#8EDDCB] rounded-full" />
          <div className="w-3 h-3 bg-[#8EDDCB] rounded-full" />
          <div className="w-2 h-2 bg-[#8EDDCB] rounded-full" />
          <div className="w-2 h-2 bg-[#8EDDCB] rounded-full" />
          <div className="w-1 h-1 bg-[#8EDDCB] rounded-full" />
        </div>
        <p
          className={`font-semibold text-green uppercase ${step === "address" ? "text-accent" : ""}`}
        >
          Address
        </p>
        <div className="flex items-center justify-center space-x-1 mx-2">
          <div className="w-1 h-1 bg-[#8EDDCB] rounded-full" />
          <div className="w-2 h-2 bg-[#8EDDCB] rounded-full" />
          <div className="w-2 h-2 bg-[#8EDDCB] rounded-full" />
          <div className="w-3 h-3 bg-[#8EDDCB] rounded-full" />
          <div className="w-2 h-2 bg-[#8EDDCB] rounded-full" />
          <div className="w-2 h-2 bg-[#8EDDCB] rounded-full" />
          <div className="w-1 h-1 bg-[#8EDDCB] rounded-full" />
        </div>
        <p
          className={`font-semibold text-green uppercase ${step === "payment" ? "text-accent" : ""}`}
        >
          Payment
        </p>
      </div>
      {step === "cart" ? (
        <Cart
          isAuthenticated={isAuthenticated}
          handlePlaceOrder={handlePlaceOrder}

        />
      ) : step === "address" ? (
        <Address />
      ) : (
        <Payment />
      )}
    </div>
  );
};

export default Checkout_01;
