"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import PriceFormat from "@/components/commerce-ui/components/price-format/basic/price-format-basic";
import AddressList from "./address_list"; // Assume this takes proper props
import AddAddressDialog from "./add_address_dialog";
import { useRouter } from "next/navigation";

const mockAddressList = [
  {
    id: "addr1",
    name: "John Doe",
    address: "123 Street",
    locality: "Downtown",
    city: "Metropolis",
    state: "State",
    pincode: "123456",
    mobile: "1234567890",
    address_type: "HOME",
  },
  {
    id: "addr2",
    name: "Jane Smith",
    address: "456 Avenue",
    locality: "Downtown",
    city: "Metropolis",
    state: "State",
    pincode: "123456",
    mobile: "1234567890",
    address_type: "OFFICE",
  },
];

const mockCartItems = [{ id: "prod1", name: "Product 1", quantity: 1 }];

const Address: React.FC = ({ handleNext, handleBack }) => {
  const router = useRouter();

  const [nextDisabled, setNextDisabled] = useState(true);
  const [addNewAddress, setAddNewAddress] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const originalTotal = localStorage.getItem("originalTotal")
    ? parseFloat(localStorage.getItem("originalTotal")!)
    : 0;
  const discountedTotal = localStorage.getItem("discountedTotal")
    ? parseFloat(localStorage.getItem("discountedTotal")!)
    : 0;
  const discountAmount = originalTotal - discountedTotal;

  useEffect(() => {
    if (mockAddressList.length > 0) {
      setAddNewAddress(false);
      setSelectedAddress(mockAddressList[0].id);
    } else {
      setAddNewAddress(true);
    }
  }, []);

  useEffect(() => {
    if (selectedAddress && mockCartItems.length > 0) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [selectedAddress]);

  return (
    <>
      <Button onClick={handleBack}>
        <span className="mr-2">←</span>
        Back
      </Button>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          {!addNewAddress && (
            <AddressList
              addressList={mockAddressList}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
          )}
          <AddAddressDialog type="add" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Price Details ({mockCartItems.length} Item)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total MRP</span>
              <PriceFormat
                prefix="₹"
                value={originalTotal}
                className="text-md font-semibold"
                thousandSeparator=","
                decimalSeparator="."
              />
            </div>
            {discountAmount !== 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Discount on MRP</span>
                <PriceFormat
                  prefix="₹"
                  value={discountAmount}
                  className="text-md font-semibold"
                  thousandSeparator=","
                  decimalSeparator="."
                />
              </div>
            )}
            <div className="flex justify-between">
              <span className="flex items-center space-x-1">
                <span className="text-gray-600">Platform Fee</span>
                <Info className="text-green h-4 w-4 cursor-pointer" />
              </span>
              <span className="font-medium text-green-600">FREE</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center space-x-1">
                <span className="text-gray-600">Shipping Fee</span>
                <Info className="text-green h-4 w-4 cursor-pointer" />
              </span>
              <span className="font-medium text-green-600">FREE</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="w-full flex-col pt-2">
              <div className="flex w-full justify-between border-t pt-2">
                <span>Total Amount</span>
                <PriceFormat
                  prefix="₹"
                  value={discountedTotal}
                  className="text-md font-semibold"
                  thousandSeparator=","
                  decimalSeparator="."
                />
              </div>
              <Button
                className="hover:bg-accent mt-4 w-full px-4 text-white"
                disabled={nextDisabled}
                onClick={handleNext}
              >
                Place Order
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Address;
