"use client";

import React, { useState } from "react";
import { z } from "zod";
import Address_02 from "@/components/commerce-ui/blocks/address/address-02";

export const addressFormSchema = z.object({
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  email: z.string().email("Invalid email").optional(),
  firstName: z.string().min(1, "First name is required"),
  isBillingAddress: z.boolean(),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().optional(),
  postalCode: z.string().min(1, "Postal code is required"),
  state: z.string().min(1, "State is required"),
});

export type AddressFormValues = z.infer<typeof addressFormSchema>;

export type AddressCardProps = {
  value?: AddressFormValues;
  onChange?: (value: AddressFormValues) => void;
  onSubmit?: (value: AddressFormValues) => void;
  title?: string;
  editButtonLabel?: string;
  saveButtonLabel?: string;
  cancelButtonLabel?: string;
  disabled?: boolean;
  className?: string;
  showBillingBadge?: boolean;
};

export default function Address_02_Ex_01() {
  const [address, setAddress] = useState<AddressFormValues>({
    address1: "12 Main Street",
    address2: "Apt 4B",
    city: "New York",
    country: "USA",
    email: "john.doe@example.com",
    firstName: "John",
    isBillingAddress: true,
    lastName: "Doe",
    phone: "+441234567890",
    postalCode: "10001",
    state: "NY",
  });

  const handleAddressSubmit = (value: AddressFormValues) => {
    console.log("Address submitted:", value);
    setAddress(value); // Update the state to reflect changes in the card
  };

  return (
    <div>
      <Address_02
        className=""
        value={address}
        onChange={(value) => console.log("Address changed:", value)}
        onSubmit={handleAddressSubmit}
      />
    </div>
  );
}
