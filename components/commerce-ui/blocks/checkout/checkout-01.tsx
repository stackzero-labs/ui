"use client";
import React from "react";
import Cart from "./cart";
import Address from "./address";
import Payment from "./payment";

function Checkout_01() {
  const isAuthenticated = true;

  const [step, setStep] = React.useState("cart");

  const handleNext = () => {
    if (step === "cart") {
      setStep("address");
    } else if (step === "address") {
      setStep("payment");
    }
  };

  const handleBack = () => {
    if (step === "payment") {
      setStep("address");
    } else if (step === "address") {
      setStep("cart");
    }
  };

  return (
    <div className="container mx-auto min-h-screen py-4">
      <div className="mx-auto flex hidden w-full max-w-md items-center justify-between pb-8 md:flex">
        <p
          className={`text-green font-semibold uppercase ${step === "cart" ? "text-primary" : ""}`}
        >
          Cart
        </p>
        <div className="mx-2 flex items-center justify-center space-x-1">
          <div className="h-1 w-1 rounded-full bg-[#8EDDCB]" />
          <div className="h-2 w-2 rounded-full bg-[#8EDDCB]" />
          <div className="h-2 w-2 rounded-full bg-[#8EDDCB]" />
          <div className="h-3 w-3 rounded-full bg-[#8EDDCB]" />
          <div className="h-2 w-2 rounded-full bg-[#8EDDCB]" />
          <div className="h-2 w-2 rounded-full bg-[#8EDDCB]" />
          <div className="h-1 w-1 rounded-full bg-[#8EDDCB]" />
        </div>
        <p
          className={`text-green font-semibold uppercase ${step === "address" ? "text-primary" : ""}`}
        >
          Address
        </p>
        <div className="mx-2 flex items-center justify-center space-x-1">
          <div className="h-1 w-1 rounded-full bg-[#8EDDCB]" />
          <div className="h-2 w-2 rounded-full bg-[#8EDDCB]" />
          <div className="h-2 w-2 rounded-full bg-[#8EDDCB]" />
          <div className="h-3 w-3 rounded-full bg-[#8EDDCB]" />
          <div className="h-2 w-2 rounded-full bg-[#8EDDCB]" />
          <div className="h-2 w-2 rounded-full bg-[#8EDDCB]" />
          <div className="h-1 w-1 rounded-full bg-[#8EDDCB]" />
        </div>
        <p
          className={`text-green font-semibold uppercase ${step === "payment" ? "text-primary" : ""}`}
        >
          Payment
        </p>
      </div>
      {step === "cart" ? (
        <Cart isAuthenticated={isAuthenticated} handleNext={handleNext} />
      ) : step === "address" ? (
        <Address handleNext={handleNext} handleBack={handleBack} />
      ) : (
        <Payment handleBack={handleBack} />
      )}
    </div>
  );
}

export default Checkout_01;
