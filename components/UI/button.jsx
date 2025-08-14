import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utiles";

const buttonVariants = cva(
  "relative flex items-center justify-center rounded-full cursor-pointer transition",
  {
    variants: {
      variant: {
        filled: "bg-primary text-on-primary fill-on-primary shadow-md hover:bg-primary/80",
        tonal:
          "bg-secondary-container text-on-secondary-container fill-on-secondary-container hover:bg-primary-fixed-dim",
        outline:
          "bg-on-surface-container border border-outline-variant text-on-surface-variant fill-on-surface-variant hover:bg-surface",
        elevated: "text-primary fill-primary bg-surface-container-low shadow-[0px_1px_2px_rgba(0,0,0,0.3),_0px_2px_6px_2px_rgba(0,0,0,0.15)] hover:bg-primary hover:text-on-primary",
      },
      size: {
        // default: "px-6 h-14 w-30 font-medium text-base leading-6 tracking-[0.009375em] gap-x-2",
          xs: "h-8 min-w-[83px] px-3 gap-1 text-[14px] leading-5 font-medium tracking-[0.00625em]",
          sm: "h-10 min-w-[95px] px-4 gap-2 text-[14px] leading-5 font-medium tracking-[0.00625em]",
          md: "h-14 min-w-[120px] px-6 gap-2 text-[16px] leading-6 font-medium tracking-[0.009375em]",
          lg: "h-24 min-w-[199px] px-12 gap-3 text-[24px] leading-8 font-normal",
          xl: "h-[136px] min-w-[262px] px-16 gap-4 text-[32px] leading-[40px] font-normal",
          icon: "p-3 [&>svg]:w-5 [&>svg]:h-5"
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
