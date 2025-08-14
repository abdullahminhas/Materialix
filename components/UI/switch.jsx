"use client";

import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../lib/utiles";

export function Switch({ className = "", ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer relative flex items-center px-2 py-[2px] w-[52px] h-8 rounded-full border-2 data-[state=unchecked]:border-secondary data-[state=checked]:border-primary transition-colors duration-300 data-[state=unchecked]:bg-surface-highest data-[state=checked]:bg-primary cursor-pointer",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "relative flex items-center justify-center w-4 h-4 data-[state=unchecked]:bg-secondary data-[state=checked]:bg-on-primary data-[state=checked]:scale-125 rounded-full transition-all duration-300 data-[state=checked]:translate-x-[16px] data-[state=unchecked]:translate-x-0",
          "before:content-[''] before:absolute before:rounded-full before:bg-primary/20 before:size-10 before:opacity-0 before:scale-0 before:transition-all before:duration-225 before:ease-in-out hover:before:opacity-100 hover:before:scale-100",
          className
        )}
      />
    </SwitchPrimitive.Root>
  );
}
