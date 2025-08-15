"use client";
import { Checkbox } from "@/components/UI/checkbox";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import { Switch } from "@/components/UI/switch";
import { Card, CardContent, CardHeader } from "@/components/UI/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen w-full my-8">
      {/* <button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium shadow-md transition-all duration-200 hover:shadow-lg active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-outline] focus-visible:ring-offset-2 bg-primary text-on-primary cursor-pointer">
        Click Me
      </button>

      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-on-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer">
        Click Me
      </button> */}
      <Button>Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="elevated">Elevated</Button>

      {/* <button className="relative flex items-center justify-center px-6 h-14 w-30 rounded-full bg-[#6750A4] text-white font-medium text-base leading-6 tracking-[0.009375em] shadow-md hover:bg-[#5a429e] transition">
        Filled
      </button>

      <button className="relative flex items-center justify-center px-6 h-14 w-30 rounded-full bg-secondary-container text-on-secondary-container font-medium text-base leading-6 tracking-[0.009375em] overflow-hidden transition duration-200 hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-on-secondary-container hover:after:opacity-8 hover:after:rounded-full">
        Tonal
      </button>

      <button className="relative flex items-center justify-center px-6 h-14 w-30 rounded-full border border-outline-variant text-on-surface-variant font-medium text-base leading-6 tracking-[0.009375em] overflow-hidden transition duration-200 hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-on-surface-variant hover:after:opacity-8 hover:after:rounded-full">
        Outlined
      </button>

      <button className="relative flex items-center justify-center px-6 h-14 w-30 rounded-full bg-surface-container-low text-primary font-medium text-base leading-6 tracking-[0.009375em] shadow-elevated overflow-hidden transition duration-200 hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-primary hover:after:opacity-8 hover:after:rounded-full">
        Elevated
      </button> */}

      <Checkbox />
      <Switch defaultChecked />
      <div className="flex justify-center w-1/4">
        <Card variant="elevated">
          <CardHeader className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-x-4">
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-container">
                <span className="font-medium text-base leading-6 tracking-[0.1px] text-on-primary-container">
                  A
                </span>
              </div>
              <div className="flex flex-col justify-between gap-y-1">
                <h2 className="font-semibold text-base leading-6 tracking-[0.15px] text-on-surface">
                  Header
                </h2>
                <p className="font-normal text-sm leading-5 tracking-[0.25px] text-on-surface">
                  Subhead
                </p>
              </div>
            </div>
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z"
                fill="#49454F"
              />
            </svg>
          </CardHeader>
          <img src="./Media.png" />
          <CardContent className="flex flex-col gap-y-8">
            {/* <!-- Headline --> */}
            <div className="flex flex-col items-start">
              {/* <!-- Title (body/large) --> */}
              <h3 className="font-normal text-base leading-6 tracking-[0.5px] text-on-surface">
                Headline Title
              </h3>

              {/* <!-- Subhead (body/medium) --> */}
              <p className="font-normal text-sm leading-5 tracking-[0.25px] text-on-surface-variant">
                Headline Subhead
              </p>
            </div>
            <p className="font-normal text-sm leading-5 tracking-[0.25px] text-on-surface-variant">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>

            <div className="flex justify-end gap-x-2">
              <Button variant="outline" size="sm">
                Label
              </Button>
              <Button size="sm">Label</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
