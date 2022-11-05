import React, { useState } from "react";
import "./App.css";

interface IData {
  name: string;
  phone: number;
}

function App() {
  const [data, setData] = useState<IData>({
    name: "",
    phone: 0,
  } as IData);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value });
  };
  return (
    <div className="App">
      <input type="text" value={data.name} onChange={handleInput} />
      <h2>{data.name}</h2>
    </div>
  );
}

export default App;
