"use client";

import React from "react";
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

export const addressFormSchema = z.object({
  firstName: z.string().min(5, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email").optional(),
  isBillingAddress: z.boolean(),
});

export type AddressFormValues = z.infer<typeof addressFormSchema>;

export type AddressFormProps = {
  value?: AddressFormValues;
  onChange?: (value: AddressFormValues) => void;
  onSubmit?: (value: AddressFormValues) => void;
  submitLabel?: string;
  disabled?: boolean;
  className?: string;
};

function Address_01({
  value,
  onChange,
  onSubmit,
  submitLabel = "Save Address",
  disabled = false,
  className = "",
}: AddressFormProps) {
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: value || {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phone: "",
      email: "",
      isBillingAddress: true,
    },
    mode: "onChange",
  });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Shipping Address</h1>
      <Form {...form}>
        <form
          className={className}
          onSubmit={form.handleSubmit(onSubmit ?? (() => {}))}
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
                          disabled={disabled}
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
                          disabled={disabled}
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
                      disabled={disabled}
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
                      disabled={disabled}
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
                          disabled={disabled}
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
                          disabled={disabled}
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
                          disabled={disabled}
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
                      disabled={disabled}
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
                    <Input
                      {...field}
                      disabled={disabled}
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
                      disabled={disabled}
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
                <FormItem>
                  <FormLabel>Same for Billing Address</FormLabel>
                  <FormControl>
                    <Checkbox
                      name={field.name}
                      checked={field.value ?? false}
                      onCheckedChange={(value) => {
                        field.onChange(value);
                      }}
                      onBlur={field.onBlur}
                      ref={field.ref}
                      disabled={disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={disabled} className="mt-2 w-full">
              {submitLabel}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Address_01;
