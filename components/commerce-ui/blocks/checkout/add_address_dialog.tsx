"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
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
import { CirclePlus, Pencil } from "lucide-react";

interface Address {
  id: number;
  name: string;
  mobile: string;
  pincode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  address_type: "HOME" | "WORK";
  default?: boolean;
}

interface AddAddressDialogProps {
  address?: Address;
  type: "edit" | "add";
  onSave?: (data: Address[]) => void;
}

const STORAGE_KEY = "demo_addresses";

const AddAddressDialog: React.FC<AddAddressDialogProps> = ({
  address,
  onSave,
  type,
}) => {
  const [formData, setFormData] = useState<Address>({
    address: "",
    address_type: "HOME",
    city: "",
    default: false,
    id: Date.now(),
    locality: "",
    mobile: "",
    name: "",
    pincode: "",
    state: "",
  });

  const [open, setOpen] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setAddresses(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (address) {
      setFormData(address);
    }
  }, [address]);

  useEffect(() => {
    const isValid = true;
    setSubmitDisabled(!isValid);
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveToStorage = (data: Address[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setAddresses(data);
    if (onSave) onSave(data);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updated =
      type === "edit" && address
        ? addresses.map((addr) => (addr.id === address.id ? formData : addr))
        : [...addresses, { ...formData, id: Date.now() }];
    saveToStorage(updated);
    console.log(
      `${type === "edit" ? "Updated" : "Added"} address in localStorage`,
      formData
    );
    setOpen(false);
  };

  return (
    <>
      {type === "edit" ? (
        <Button variant="ghost" onClick={() => setOpen(true)}>
          <Pencil className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setOpen(true)}
        >
          <CirclePlus className="mr-2 h-4 w-4" />
          Add Address
        </Button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {type === "edit" ? "Edit" : "Add"} Address
            </DialogTitle>
            <DialogDescription>
              Enter your contact and address details below.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              label="Mobile No"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <InputField
              label="Pin Code"
              name="pincode"
              type="number"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
            <InputField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <InputField
              label="Locality / Town"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="City / District"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <InputField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label className="mb-1 block text-sm">Address Type</Label>
              <RadioGroup
                value={formData.address_type}
                onValueChange={(val: "HOME" | "WORK") =>
                  setFormData((prev) => ({ ...prev, address_type: val }))
                }
                className="mt-2 flex space-x-6"
              >
                <RadioGroupItem value="HOME" id="home" />
                <Label htmlFor="home">Home</Label>
                <RadioGroupItem value="WORK" id="work" />
                <Label htmlFor="work">Work</Label>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="defaultAddress"
                checked={formData.default}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, default: !!checked }))
                }
              />
              <Label htmlFor="defaultAddress" className="text-sm">
                Make this my default address
              </Label>
            </div>

            <DialogFooter className="mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-green text-white"
                disabled={submitDisabled}
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

const InputField: React.FC<{
  label: string;
  name: keyof Address;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}> = ({ label, name, onChange, required, type = "text", value }) => (
  <div>
    <Label className="mb-1 block text-sm">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Input
      type={type}
      name={name}
      value={value || ""}
      onChange={onChange}
      className="w-full"
    />
  </div>
);

export default AddAddressDialog;
