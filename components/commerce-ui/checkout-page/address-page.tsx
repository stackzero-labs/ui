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
import AddressDialog from "@/components/commerce-ui/checkout-page/address-dialog";
import AddressList from "@/components/commerce-ui/checkout-page/address-list";
import CheckoutHeader from "@/components/commerce-ui/checkout-page/checkout-header";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface Address {
  name: string;
  mobile: string;
  pincode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
}

interface AddressProps {
  total?: number;
  discount?: number;
  shippingFee?: number;
  finalAmount?: number;
  addressList?: Address[];
  setAddressList?: React.Dispatch<React.SetStateAction<Address[]>>;
}


const MIN_SHIPPING_PRICE = 1200;

const AddressPage: React.FC<AddressProps> = ({
  total = 1000,
  discount = 200,
  shippingFee = 10,
  finalAmount = 810,
  addressList = [],
  setAddressList = () => {},
}) => {
    console.log(addressList);
  const [nextDisabled, setNextDisabled] = useState<boolean>(true);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<Address>({
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    locality: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    if (
      formData.name.length > 3 &&
      formData.mobile.length === 10 &&
      formData.pincode.length === 6 &&
      formData.address.length > 3 &&
      formData.locality.length > 3 &&
      formData.city.length > 3 &&
      formData.state.length > 3
    ) {
      setSubmitDisabled(false);
      setNextDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [formData]);

  useEffect(() => {
    if (addressList.length > 0) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [addressList]);

  const handleNext = () => {
    alert("Proceeding to payment step");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Address submitted!");
    setAddressList([...addressList, formData]);
    setFormData({
      name: "",
      mobile: "",
      pincode: "",
      address: "",
      locality: "",
      city: "",
      state: "",
    });
    setIsOpen(false);
  };

  return (
    <div className="mx-auto p-20">
      <CheckoutHeader step="address" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        <div className="max-width-xs md:col-span-2">
          {addressList.length > 0 ? (
            <AddressList
              addressList={addressList}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
          ) : (
            <p className="p-4">No address associated with this account</p>
          )}

          <AddressDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            formData={formData}
            setFormData={setFormData}
            submitDisabled={submitDisabled}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Price Details (1 Item)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total</span>
              <span className="font-medium">${total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium text-green-600">-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center space-x-2">
                <span className="text-gray-600">Shipping Fee</span>
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Info className="text-green h-4 w-4 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Shipping is free for all orders above $
                        {MIN_SHIPPING_PRICE}.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </span>
              <span className="font-medium text-green-600">
                {shippingFee == 0 ? "FREE" : shippingFee}
              </span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="w-full flex-col pt-2">
              <div className="flex w-full justify-between border-t">
                <span className="font-semibold">To Pay</span>
                <span className="font-semibold">${finalAmount}</span>
              </div>
              <Button
                className="bg-green hover:bg-accent mt-4 w-full px-4 text-white"
                disabled={nextDisabled}
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AddressPage;
