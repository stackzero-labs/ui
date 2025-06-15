"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DeleteAddress from "./delete_address_dialog.tsx";
import AddAddressDialog from "./add_address_dialog.tsx";

const AddressCard = ({ address }) => {
  return (
    <Card className="my-2 w-full">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <RadioGroupItem value={address.id} />
          <CardTitle>{address.name}</CardTitle>
          <Badge variant="success">{address.address_type}</Badge>
        </div>
        <div>
          <AddAddressDialog address={address} type="edit" />
          <DeleteAddress address={address} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="inline-block text-sm">
          {address.address +
            ", " +
            address.locality +
            ", " +
            address.city +
            ", " +
            address.state +
            "- " +
            address.pincode}
        </p>
        <p>{address.mobile}</p>
      </CardContent>
    </Card>
  );
};

const AddressList = ({
  addressList,
  selectedAddress,
  setSelectedAddress,
  handleEditAddress,
}) => {
  if (!addressList || addressList.length === 0) {
    return <p className="p-4">No address found</p>;
  }

  return (
    <div className="">
      <RadioGroup
        defaultValue="1"
        value={selectedAddress}
        onValueChange={(value) => setSelectedAddress(value)}
      >
        {addressList.map((address) => (
          <div key={address.id}>
            <AddressCard
              address={address}
              handleEditAddress={handleEditAddress}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default AddressList;
