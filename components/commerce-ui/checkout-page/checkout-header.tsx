"use client";
import { useState } from "react";

interface CheckoutHeaderProps {
  step?: "cart" | "address" | "payment";
}

function CheckoutHeader({ step = "cart" }: CheckoutHeaderProps) {
  const [currentStep, setStep] = useState<"cart" | "address" | "payment">(step);

  return (
    <div className="container mx-auto py-4">
      <div className="mx-auto flex w-full max-w-md items-center justify-between pb-8">
        <p
          className={`text-green font-semibold uppercase ${currentStep === "cart" ? "text-primary" : ""}`}
          onClick={() => setStep("cart")}
        >
          Cart
        </p>
        <div className="mx-2 flex items-center justify-center space-x-1">
          {[1, 2, 2, 3, 2, 2, 1].map((size, index) => (
            <div
              key={index}
              className={`w-${size} h-${size} rounded-full bg-[#8EDDCB]`}
            />
          ))}
        </div>
        <p
          className={`text-green font-semibold uppercase ${currentStep === "address" ? "text-primary" : ""}`}
          onClick={() => setStep("address")}
        >
          Address
        </p>
        <div className="mx-2 flex items-center justify-center space-x-1">
          {[1, 2, 2, 3, 2, 2, 1].map((size, index) => (
            <div
              key={index}
              className={`w-${size} h-${size} rounded-full bg-[#8EDDCB]`}
            />
          ))}
        </div>
        <p
          className={`text-green font-semibold uppercase ${currentStep === "payment" ? "text-primary" : ""}`}
          onClick={() => setStep("payment")}
        >
          Payment
        </p>
      </div>
    </div>
  );
}

export default CheckoutHeader;
