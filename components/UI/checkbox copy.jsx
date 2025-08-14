"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "../lib/utiles";

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
    className={cn(
        "peer relative h-4.5 w-4.5 shrink-0 rounded-xs border-2 border-[#49454F] bg-surface text-on-surface cursor-pointer",
        "flex flex-row justify-center items-start",
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-on-primary",
        "hover:bg-surface-hover",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-colors",
        "before:content-[''] before:absolute before:rounded-full before:bg-primary/20 before:-inset-3",
        "before:opacity-0 before:scale-0 before:transition-all before:duration-200 before:ease-in-out",
        "hover:before:opacity-100 hover:before:scale-100",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator className="flex items-center justify-center h-4 w-4">
        <svg
          className="fill-white w-full h-3.5"
        >
          <path
            d="M5.79496 10.8749L1.62496 6.70492L0.204956 8.11492L5.79496 13.7049L17.795 1.70492L16.385 0.294922L5.79496 10.8749Z"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
