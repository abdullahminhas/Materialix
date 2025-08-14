import React from "react";
import { Card, CardContent } from "@/components/UI/card";
import { Button } from "@/components/UI/button";
import Link from "next/link";

const buttonPage = () => {
  return (
    <React.Fragment>
      <div className="flex gap-x-2 mt-4 px-2">
        <div className="w-1/2">
          <Card className="flex justify-center border-0 min-h-[544px]">
            <CardContent>
              <h1 className="text-8xl font-medium">Buttons</h1>
              <p className="text-2xl">Buttons prompt most actions in a UI</p>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/2">
          <div
            className="flex justify-center w-full min-h-full bg-cover! rounded-xl"
            style={{
              background:
                "url(https://lh3.googleusercontent.com/9yLBSbW9VLn2npEEQxB7Gsr83LyNLRMTeX7WziRyoN4hg_I1yo1WCOmKGqWWdZGeKJokpt-rbkn1QLBqyIZQMjSZU-lqn_I6Jjul7G2jcUlT4gFxLFo=w1800-rj)",
            }}
          >
            <img
              className="w-auto min-h-full object-cover"
              src="https://lh3.googleusercontent.com/s92gKHDPwsrvDz8RHwCqmTIn8UeMltrd-n75PV9f-t61bExJzU5aO9d8njRs6onP72YuBnNA3BpQK-PlTqxOabioC74nmxFbu7AG0Q1b-ot8SK_053M=w2400"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2
          id="types"
          className="font-heading mt-10 mb-4 scroll-m-28 text-3xl font-medium tracking-tight"
        >
          Types
        </h2>
        <Card className="mt-0 mb-3">
          <CardContent className="flex flex-row justify-between gap-x-8">
            <div className="flex flex-col items-center gap-y-4">
              <Button variant="elevated">Elevated</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                1
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Button>Filled</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                2
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Button variant="tonal">Tonal</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                3
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Button variant="outline">Outline</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                4
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-y-3.5">
          <div className="flex items-center gap-x-3">
            <div className="bg-black text-white rounded-full p-2">1</div>
            Elevated Button
          </div>
          <div className="flex items-center gap-x-3">
            <div className="bg-black text-white rounded-full p-2">2</div> Filled
            Button
          </div>
          <div className="flex items-center gap-x-3">
            <div className="bg-black text-white rounded-full p-2">3</div> tonal
            Button
          </div>
          <div className="flex items-center gap-x-3">
            <div className="bg-black text-white rounded-full p-2">4</div>
            Outline Button
          </div>
        </div>
        <h2
          id="installation"
          className="font-heading mt-8 mb-4 scroll-m-28 text-3xl font-medium tracking-tight"
        >
          Installation
        </h2>
        <Card variant="filled">
          <CardContent className="flex justify-between items-center">
            <span>npx materialix@latest add button</span>
            <Button variant="filled" size="icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 1H4.5C3.4 1 2.5 1.9 2.5 3V17H4.5V3H16.5V1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM19.5 21H8.5V7H19.5V21Z" />
              </svg>
            </Button>
          </CardContent>
        </Card>
        <h2
          id="usage"
          className="font-heading mt-8 mb-4 scroll-m-28 text-3xl font-medium tracking-tight"
        >
          Usage
        </h2>
        <Card className="mt-10 mb-3">
          <CardContent className="flex flex-row justify-between items-center gap-x-4">
            <div className="flex flex-col items-center gap-y-4">
              <Button size="xs">Extra Small</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                1
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Button size="sm">Small</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                2
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Button size="md">Medium</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                3
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Button size="lg">Large</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                4
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <Button size="xl">Extra Large</Button>
              <div className="flex justify-center items-center bg-black text-white rounded-full size-8">
                5
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-row gap-8">
          <Link
            href="#"
            className="flex flex-col gap-3 bg-surface w-1/2 px-12 py-8 rounded-2xl mt-3 mb-4 hover:bg-secondary-container"
          >
            <span className="flex items-center gap-1.5 text-[16px] font-semibold leading-1">
              <svg
                width="18"
                height="12"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 14L8.41 12.59L3.83 8H20V6H3.83L8.42 1.41L7 0L0 7L7 14Z"
                  fill="black"
                />
              </svg>
              Previous
            </span>
            <span className="text-[24px] font-bold">Badges: Overview</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-end gap-3 bg-surface w-1/2 px-12 py-8 rounded-2xl mt-3 mb-4 hover:bg-secondary-container"
          >
            <span className="flex items-center gap-1.5 text-[16px] font-semibold leading-1">
              Next
              <svg
                width="18"
                height="12"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0L11.59 1.41L16.17 6H0V8H16.17L11.58 12.59L13 14L20 7L13 0Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="text-[24px] font-bold">Badges: Overview</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default buttonPage;
