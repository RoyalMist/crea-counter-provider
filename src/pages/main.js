import * as React from "react";
import Action from "../components/action";
import Display from "../components/display";
import { CountProvider, DECREMENT, INCREMENT } from "../context/counter";

export default function Main() {
  return (
    <CountProvider>
      <Display />
      <Action action={INCREMENT}>+</Action>
      <Action action={DECREMENT}>-</Action>
    </CountProvider>
  );
}
