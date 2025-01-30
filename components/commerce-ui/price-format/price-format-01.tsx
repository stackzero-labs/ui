"use client";

import { cn } from "@/lib/utils";
import { NumericFormat } from "react-number-format";

interface PriceFormat01Props extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  prefix?: string;
  thousandSeparator?: string;
  decimalSeparator?: string;
  decimalScale?: number;
}

const PriceFormat01: React.FC<PriceFormat01Props> = ({
  value = 1499.99,
  prefix = "$",
  className,
  thousandSeparator = ".",
  decimalSeparator = ",",
  decimalScale = 2,
}) => {
  return (
    <NumericFormat
      value={value}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      decimalScale={decimalScale}
      prefix={prefix}
      displayType="text"
      className={cn("text-lg font-medium", className)}
    />
  );
};

export default PriceFormat01;
