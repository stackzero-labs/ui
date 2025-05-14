"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Pencil } from "lucide-react";
import AddressDeleteDialog from "@/components/commerce-ui/checkout-page/address-delete-dialog";

interface Address {
  id: string;
  name: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  mobile: string;
  addressType: string;
}

interface AddressCardProps {
  address: Address;
}

const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
  return (
    <Card className="my-2 w-full">
      <CardHeader className="flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <RadioGroupItem value={address.id} />
          <CardTitle>{address.name}</CardTitle>
          <Badge variant="success">{address.addressType}</Badge>
        </div>
        <div>
          <Button variant="ghost">
            <Pencil className="h-4 w-4" />
          </Button>
          <AddressDeleteDialog />
        </div>
      </CardHeader>
      <CardContent>
        <p className="inline-block text-sm">
          {`${address.address}, ${address.locality}, ${address.city}, ${address.state} - ${address.pincode}`}
        </p>
        <p>{address.mobile}</p>
      </CardContent>
    </Card>
  );
};

interface AddressListProps {
  addressList: Address[];
  selectedAddress: string;
  setSelectedAddress: (value: string) => void;
}

const AddressList: React.FC<AddressListProps> = ({
  addressList,
  selectedAddress,
  setSelectedAddress,
}) => {
  if (!addressList || addressList.length === 0) {
    return <p className="p-4">No address found</p>;
  }

  return (
    <div>
            <p> addressList </p>
      <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
        {addressList.map((address) => (
          <div key={address.id}>
            <AddressCard address={address} />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default AddressList;
