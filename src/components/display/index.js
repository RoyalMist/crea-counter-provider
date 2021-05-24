import * as React from "react";
import { useCount } from "../../context/counter";

export default function Display() {
  const {
    state: { count },
  } = useCount();
  return <div>{`${count} clicks`}</div>;
}
