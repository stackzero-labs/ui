import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
}

const InputIcon = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, endIcon, startIcon, type, ...props }, ref) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;

    return (
      <div className="relative w-full">
        {StartIcon && (
          <div className="absolute top-1/2 left-2 -translate-y-1/2 transform">
            <StartIcon size={18} className="text-muted-foreground" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            startIcon ? "pl-8" : "",
            endIcon ? "pr-8" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2 transform">
            <EndIcon className="text-muted-foreground" size={18} />
          </div>
        )}
      </div>
    );
  }
);

InputIcon.displayName = "InputIcon";

export default InputIcon;
