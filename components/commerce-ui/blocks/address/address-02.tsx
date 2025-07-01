"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, MapPin, Phone, Mail, User } from "lucide-react";
import PhoneInput from "@/components/commerce-ui/components/phone-number-input/basic/phone-number-input-basic";
import { cn } from "@/lib/utils";

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

function Address_02({
  className = "",
  disabled = false,
  onChange,
  onSubmit,
  title = "Address",
  editButtonLabel = "Edit",
  saveButtonLabel = "Save Changes",
  cancelButtonLabel = "Cancel",
  value,
  showBillingBadge = true,
}: AddressCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AddressFormValues>({
    defaultValues: value || {
      address1: "",
      address2: "",
      city: "",
      country: "",
      email: "",
      firstName: "",
      isBillingAddress: false,
      lastName: "",
      phone: "",
      postalCode: "",
      state: "",
    },
    mode: "onChange",
    resolver: zodResolver(addressFormSchema),
  });

  // Update form when value prop changes
  useEffect(() => {
    if (value) {
      form.reset(value);
    }
  }, [value, form]);

  // Watch form values for onChange callback
  const watchedValues = form.watch();
  useEffect(() => {
    if (onChange && isModalOpen) {
      onChange(watchedValues);
    }
  }, [watchedValues, onChange, isModalOpen]);

  const handleSubmit = async (formData: AddressFormValues) => {
    setIsLoading(true);
    try {
      await onSubmit?.(formData);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving address:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (value) {
      form.reset(value);
    }
    setIsModalOpen(false);
  };

  // Check if address has data
  const hasAddressData =
    value && (value.firstName || value.lastName || value.address1);

  // Format address for display
  const formatAddress = () => {
    if (!value) return null;

    const fullName = [value.firstName, value.lastName]
      .filter(Boolean)
      .join(" ");
    const address1 = value.address1;
    const address2 = value.address2;
    const cityStateZip = [value.city, value.state, value.postalCode]
      .filter(Boolean)
      .join(", ");
    const country = value.country;

    return {
      fullName,
      address1,
      address2,
      cityStateZip,
      country,
      phone: value.phone,
      email: value.email,
    };
  };

  const addressDisplay = formatAddress();

  return (
    <Card className={cn("md:min-w-[400px]", className)}>
      <CardHeader className="flex flex-row flex-wrap items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          {showBillingBadge && value?.isBillingAddress && (
            <Badge variant="secondary" className="text-xs">
              Billing Address
            </Badge>
          )}
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              disabled={disabled}
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              {editButtonLabel}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit {title}</DialogTitle>
              <DialogDescription>
                Update your address information below.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <div className="grid gap-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="min-w-[180px] flex-1">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isLoading}
                                autoComplete="given-name"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="min-w-[180px] flex-1">
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isLoading}
                                autoComplete="family-name"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="address1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            autoComplete="address-line1"
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            autoComplete="address-line2"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-wrap gap-4">
                    <div className="min-w-[120px] flex-1">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isLoading}
                                autoComplete="address-level2"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="min-w-[120px] flex-1">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isLoading}
                                autoComplete="address-level1"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="min-w-[120px] flex-1">
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isLoading}
                                autoComplete="postal-code"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            autoComplete="country"
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (optional)</FormLabel>
                        <FormControl>
                          <PhoneInput
                            {...field}
                            disabled={isLoading}
                            autoComplete="tel"
                            type="tel"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email (optional)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            autoComplete="email"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isBillingAddress"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value ?? false}
                            onCheckedChange={field.onChange}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Use as billing address</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <DialogFooter className="gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    disabled={isLoading}
                  >
                    {cancelButtonLabel}
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Saving..." : saveButtonLabel}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardHeader>

      <CardContent>
        {hasAddressData && addressDisplay ? (
          <div className="space-y-3">
            {addressDisplay.fullName && (
              <div className="flex items-center gap-2">
                <User className="text-muted-foreground h-4 w-4" />
                <span className="font-medium">{addressDisplay.fullName}</span>
              </div>
            )}

            <div className="flex items-start gap-2">
              <MapPin className="text-muted-foreground mt-0.5 h-4 w-4" />
              <div className="space-y-1 text-sm">
                {addressDisplay.address1 && (
                  <div>{addressDisplay.address1}</div>
                )}
                {addressDisplay.address2 && (
                  <div>{addressDisplay.address2}</div>
                )}
                {addressDisplay.cityStateZip && (
                  <div>{addressDisplay.cityStateZip}</div>
                )}
                {addressDisplay.country && <div>{addressDisplay.country}</div>}
              </div>
            </div>

            {addressDisplay.phone && (
              <div className="flex items-center gap-2">
                <Phone className="text-muted-foreground h-4 w-4" />
                <span className="text-sm">{addressDisplay.phone}</span>
              </div>
            )}

            {addressDisplay.email && (
              <div className="flex items-center gap-2">
                <Mail className="text-muted-foreground h-4 w-4" />
                <span className="text-sm">{addressDisplay.email}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="text-muted-foreground py-8 text-center">
            <MapPin className="mx-auto mb-2 h-8 w-8 opacity-50" />
            <p className="text-sm">No address information available</p>
            <p className="text-xs">
              Click &quot;{editButtonLabel}&quot; to add an address
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Address_02;
