import React from "react";
import { useFetch } from "./hooks/useFetch";

const UseFetch = () => {
  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/userss"
  );
  console.log(data);
  console.log(isLoading);
  console.log(error);
  return <div></div>;
};

export default UseFetch;
