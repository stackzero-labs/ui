"use client";

import PhoneNumberInput_Basic from "@/components/commerce-ui/components/phone-number-input/basic/phone-number-input-basic";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneNumberSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
});
export default function PhoneNumberInput_Basic_Ex_01() {
  const form = useForm<z.infer<typeof phoneNumberSchema>>({
    defaultValues: {
      phoneNumber: "+4407782700357",
    },
    resolver: zodResolver(phoneNumberSchema),
  });

  function onSubmit(data: z.infer<typeof phoneNumberSchema>) {
    console.log("Submitted phone number:", data.phoneNumber);
    window.alert(`Submitted phone number: ${data.phoneNumber}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-g flex max-w-md flex-col items-center gap-4"
      >
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <PhoneNumberInput_Basic
                  defaultCountry="GB"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                Enter your phone number with country code. For example,
                +4407782700357 for UK.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="secondary" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
