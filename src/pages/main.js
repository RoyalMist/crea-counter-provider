import * as React from "react";
import Action from "../components/action";
import Display from "../components/display";
import { CountProvider, DECREMENT, INCREMENT } from "../context/counter";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

export default function Main() {
  return (
    <CountProvider>
      <div className="flex items-center justify-center w-screen h-screen bg-green-900 flex-col gap-10">
        <Display />
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <Action
            action={INCREMENT}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          >
            <PlusIcon className="h-20 w-20 text-green-800" aria-hidden="true" />
          </Action>
          <Action
            action={DECREMENT}
            className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          >
            <MinusIcon
              className="h-20 w-20 text-green-800"
              aria-hidden="true"
            />
          </Action>
        </span>
      </div>
    </CountProvider>
  );
}
