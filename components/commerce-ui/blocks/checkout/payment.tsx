"use client";

import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PaymentPage: React.FC = ({ handleBack }) => {
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "debit">(
    "credit"
  );
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      cardNumber.length < 12 ||
      !/^\d{2}\/\d{2}$/.test(expiry) ||
      !/^\d{3}$/.test(cvv)
    ) {
      alert("Please fill valid card details.");
      return;
    }

    alert("Order placed successfully!");
  };

  return (
    <>
      <Button onClick={handleBack}>
        <span className="mr-2">←</span>
        Back
      </Button>
      <div className="mx-auto mt-10 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Choose Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="mb-2 block">Payment Type</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(val: "credit" | "debit") =>
                    setPaymentMethod(val)
                  }
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit">Debit Card</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="cardNumber" className="mb-1 block">
                  Card Number
                </Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <Label htmlFor="cardName" className="mb-1 block">
                Name on card
              </Label>
              <Input
                id="cardName"
                name="name"
                type="text"
                inputMode="alphabetic"
                placeholder="John Doe"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="mb-1 block">
                    Expiry (MM/YY)
                  </Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="cvv" className="mb-1 block">
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    type="password"
                    inputMode="numeric"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>

              <Button className="hover:bg-accent mt-4 w-full px-4 text-white">
                Next
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PaymentPage;
