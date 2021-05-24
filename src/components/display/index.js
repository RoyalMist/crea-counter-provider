import * as React from "react";
import { useCount } from "../../context/counter";

export default function Display() {
  const {
    state: { count },
  } = useCount();
  return (
    <span className="inline-flex items-center justify-center h-60 w-60 rounded-full bg-white">
      <span className="text-9xl font-medium leading-none text-green-800">
        {count}
      </span>
    </span>
  );
}
