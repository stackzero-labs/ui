"use client";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, useState, useEffect } from "react";

interface QuantityInputBasicProps {
  quantity: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange: (quantity: number) => void;
  className?: string;
}

const QuantityInputBasic = ({
  className,
  disabled = false,
  max = 99,
  min = 1,
  onChange,
  quantity,
  step = 1,
}: QuantityInputBasicProps) => {
  // Internal state to handle input field text during editing
  const [inputValue, setInputValue] = useState(quantity.toString());

  // Update internal input value when external quantity prop changes
  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const handleDecrease = () => {
    if (quantity - step >= min) {
      onChange(quantity - step);
    }
  };

  const handleIncrease = () => {
    if (quantity + step <= max) {
      onChange(quantity + step);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Allow any input including empty string during editing
    setInputValue(e.target.value);

    // If the input is a valid number, update the parent component
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onChange(value);
    }
  };

  const handleBlur = () => {
    // When the field loses focus, ensure we have a valid value
    const value = parseInt(inputValue);
    if (isNaN(value) || value < min) {
      // If invalid or below min, reset to min
      setInputValue(min.toString());
      onChange(min);
    } else if (value > max) {
      // If above max, reset to max
      setInputValue(max.toString());
      onChange(max);
    } else {
      // Ensure the displayed value matches the actual value
      setInputValue(value.toString());
      onChange(value);
    }
  };

  return (
    <div
      className={cn(
        "inline-flex cursor-pointer rounded-lg shadow-xs shadow-black/5",
        className
      )}
    >
      <button
        className={cn(
          "hover:bg-muted-foreground/10 flex cursor-pointer items-center justify-center rounded-s-lg border px-3 py-1 focus-visible:z-10 disabled:cursor-not-allowed disabled:opacity-50",
          disabled && "pointer-events-none"
        )}
        onClick={handleDecrease}
        disabled={disabled || quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={16} strokeWidth={2} aria-hidden="true" />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="w-12 border-y px-2 py-1 text-center font-mono outline-none"
        min={min}
        max={max}
        disabled={disabled}
        aria-label="Quantity"
      />
      <button
        className={cn(
          "hover:bg-muted-foreground/10 flex cursor-pointer items-center justify-center rounded-e-lg border px-3 py-1 focus-visible:z-10 disabled:cursor-not-allowed disabled:opacity-50",
          disabled && "pointer-events-none"
        )}
        onClick={handleIncrease}
        disabled={disabled || quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus size={16} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
};

export default QuantityInputBasic;
