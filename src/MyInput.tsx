import React from "react";
import { useInput } from "./hooks/useInput";

const MyInput = () => {
  const { bind, reset, value } = useInput("");
  return (
    <div>
      <input {...bind} type="text" />
    </div>
  );
};

export default MyInput;
