"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";

interface FormData {
  name: string;
  mobile: string;
  pincode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  addressType: "home" | "office";
  default: boolean;
}

interface AddAddressDialogProps {
  isOpen: boolean;
  SetIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitDisabled: boolean;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleSubmit: () => void;
}

const AddAddressDialog: React.FC<AddAddressDialogProps> = ({
  isOpen,
  setIsOpen,
  formData,
  handleChange,
  submitDisabled,
  setFormData,
  handleSubmit,
}) => {
  return (
    <>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => setIsOpen(true)}
      >
        <CirclePlus className="h-4 w-4" />
        Add Address
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen} className="max-w-xs">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Address</DialogTitle>
            <DialogDescription>
              Please enter your contact and address details below.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            <div>
              <Label className="block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Enter your name"
                value={formData.name}
                name="name"
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label className="block text-sm font-medium">
                Mobile No <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Enter your mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label className="block text-sm font-medium">Pin Code</Label>
              <Input
                placeholder="Pin Code"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label className="block text-sm font-medium">
                Address (House No, Building, Street, Area)
              </Label>
              <Input
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label className="block text-sm font-medium">
                Locality / Town
              </Label>
              <Input
                placeholder="Locality or Town"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                className="mt-1 w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="block text-sm font-medium">
                  City / District
                </Label>
                <Input
                  placeholder="City or District"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium">State</Label>
                <Input
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 w-full"
                />
              </div>
            </div>
            <div>
              <Label className="mb-1 block text-sm font-medium">
                Address Type
              </Label>
              <RadioGroup
                defaultValue={formData.addressType}
                className="mt-2 flex space-x-6"
                name="addressType"
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    addressType: value as "home" | "office",
                  }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="home" id="home" />
                  <Label htmlFor="home" className="text-sm">
                    Home
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="office" id="office" />
                  <Label htmlFor="office" className="text-sm">
                    Office
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="defaultAddress"
                name="default"
                checked={formData.default}
                onCheckedChange={() =>
                  setFormData((prev) => ({ ...prev, default: !prev.default }))
                }
              />
              <Label htmlFor="defaultAddress" className="text-sm">
                Make this my default address
              </Label>
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-green hover:bg-accent text-white"
              disabled={submitDisabled}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddAddressDialog;
