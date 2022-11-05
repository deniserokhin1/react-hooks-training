import React, { useLayoutEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import { COMPLETE, initialState, reducer, UNCOMPLETE } from "./reducer";
import { Dispatch } from "redux";

interface IData {
  name: string;
  phone: number;
}

interface ITodo {
  name: string;
  isCompleted: boolean;
}

function App() {
  const [data, setData] = useState<IData>({
    name: "",
    phone: 0,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value });
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    console.log(data.phone);
    console.log(inputRef.current?.value);
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <input
        type="text"
        value={data.name}
        onChange={handleInput}
        ref={inputRef}
      />
      <h2>{data.name}</h2>
      {state.map((i: ITodo, id: number) => (
        <div
          key={id}
          style={{ color: i.isCompleted ? "grey" : "black" }}
          onClick={() =>
            dispatch({
              type: i.isCompleted ? UNCOMPLETE : COMPLETE,
              payload: i.name,
            })
          }
        >
          {i.name}
        </div>
      ))}
    </div>
  );
}

export default App;
