"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../lib/utiles";

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "peer relative border-2 border-on-surface-variant rounded-xs size-4.5 bg-surface shrink-0 cursor-pointer",
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:fill-on-primary",
        "before:content-[''] before:absolute before:rounded-full before:bg-primary/20 before:size-10",
        "before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
        "before:opacity-0 before:scale-0 before:transition-all before:duration-225 before:ease-in-out",
        "hover:before:opacity-100 hover:before:scale-100",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <svg
        width="14px"
        height="10px"
        viewBox="0 0 12 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9.40006L0 5.40006L1.4 4.00006L4 6.60006L10.6 6.10352e-05L12 1.40006L4 9.40006Z"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>

  );
}

export { Checkbox };
