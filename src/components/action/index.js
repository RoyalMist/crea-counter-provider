import * as React from "react";
import { useCount } from "../../context/counter";

export default function Action({ action, children }) {
  const { dispatch } = useCount();
  return <button onClick={() => dispatch({ type: action })}>{children}</button>;
}
