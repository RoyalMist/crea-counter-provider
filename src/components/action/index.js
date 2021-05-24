import * as React from "react";
import { useCount } from "../../context/counter";

export default function Action({ action, children, className }) {
  const { dispatch } = useCount();
  return (
    <button className={className} onClick={() => dispatch({ type: action })}>
      {children}
    </button>
  );
}
