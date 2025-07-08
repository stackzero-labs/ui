"use client";

import InputIcon from "@/components/commerce-ui/components/inputs/icon/input-icon";
import PhoneInput from "@/components/commerce-ui/components/phone-number-input/basic/phone-number-input-basic";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building, Building2, Globe, House, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const addressFormSchema = z.object({
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  email: z.string().email("Invalid email").optional(),
  fullName: z.string().min(5, "Full name is required"),
  phone: z.string().optional(),
  postalCode: z.string().min(1, "Postal code is required"),
  state: z.string().min(1, "State is required"),
});

export type AddressFormValues = z.infer<typeof addressFormSchema>;

export type AddressFormProps = {
  value?: AddressFormValues;
  onSubmit?: (value: AddressFormValues) => void;
  submitLabel?: string;
  disabled?: boolean;
  className?: string;
};

function Address_03({
  className = "",
  disabled = false,
  onSubmit,
  submitLabel = "Save Address",
  value,
}: AddressFormProps) {
  const form = useForm<AddressFormValues>({
    defaultValues: value || {
      address1: "",
      address2: "",
      city: "",
      country: "",
      email: "",
      fullName: "",
      phone: "",
      postalCode: "",
      state: "",
    },
    mode: "onChange",
    resolver: zodResolver(addressFormSchema),
  });

  return (
    <div className="mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Shipping Address
      </h1>
      <Form {...form}>
        <form
          className={className}
          onSubmit={form.handleSubmit(onSubmit ?? (() => {}))}
        >
          <div className="grid gap-6">
            {/* Full Name */}
            <div>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <>
                        <InputIcon
                          {...field}
                          disabled={disabled}
                          autoComplete="full-name"
                          required
                          startIcon={User}
                          placeholder="John Doe"
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <hr className="my-2 border-gray-100 dark:border-gray-800" />

            {/* Address 1 & 2 */}
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="address1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <InputIcon
                        {...field}
                        disabled={disabled}
                        autoComplete="address-line1"
                        required
                        startIcon={House}
                        placeholder="123 Main St"
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
                      <InputIcon
                        {...field}
                        disabled={disabled}
                        autoComplete="address-line2"
                        placeholder="Apt, suite, etc."
                        startIcon={Building}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <hr className="my-2 border-gray-100 dark:border-gray-800" />

            {/* City, State, Postal Code */}
            <div className="grid gap-4 md:grid-cols-3">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <InputIcon
                        {...field}
                        disabled={disabled}
                        autoComplete="address-level2"
                        required
                        startIcon={Building2}
                        placeholder="New York"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <InputIcon
                        {...field}
                        disabled={disabled}
                        autoComplete="address-level1"
                        required
                        startIcon={Building2}
                        placeholder="NY"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <InputIcon
                        {...field}
                        disabled={disabled}
                        autoComplete="postal-code"
                        required
                        startIcon={Mail}
                        placeholder="10001"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <hr className="my-2 border-gray-100 dark:border-gray-800" />

            {/* Country, Phone, Email */}
            <div className="grid gap-4 md:grid-cols-3">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <InputIcon
                        {...field}
                        disabled={disabled}
                        autoComplete="country"
                        required
                        startIcon={Globe}
                        placeholder="United States"
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
                      <InputIcon
                        {...field}
                        disabled={disabled}
                        autoComplete="email"
                        type="email"
                        startIcon={Mail}
                        placeholder="you@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-2">
              <Button type="submit" disabled={disabled} className="w-full">
                {submitLabel}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Address_03;
