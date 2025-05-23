"use client";
import { useState } from "react";
import AddressPage from "@/components/commerce-ui/checkout-page/address-page";
import { Address } from "@/components/commerce-ui/checkout-page/address-page";

const AddressPageExample: React.FC = ({
}) => {

    const [addressList, setAddressList] = useState<Address[]>([
        {
            name: "John Doe",
            mobile: "+1 1234567890",
            pincode: "123456",
            address: "123, 4th Cross",
            locality: "Burquitlam",
            city: "Burnaby",
            state: "BC",
        },
    ]);

  return (
    <>
            <AddressPage 
  total="1000"
  discount="200"
  shippingFee="10"
  finalAmount="810"
                addressList={addressList} 
                setAddressList={setAddressList}
            />

    </>
  );
};

export default AddressPage;
