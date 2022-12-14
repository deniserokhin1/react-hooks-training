import React, { useLayoutEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import { COMPLETE, initialState, reducer, UNCOMPLETE } from "./reducer";
import { Dispatch } from "redux";
import Page from "./Page";
import { AuthContext } from "./authContext";
import { ThemeContext, themes } from "./themeContext";
import Page2 from "./Page2";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useOutSide } from "./hooks/useOutside";
import MyInput from "./MyInput";
import UseCookie from "./UseCookie";
import UseFetch from "./UseFetch";

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

  // useLayoutEffect(() => {
  //   console.log(data.phone);
  //   console.log(inputRef.current?.value);
  // });

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAuth, setIsAuth] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }
    setCurrentTheme(themes.dark);
  };

  const value = {
    isAuth,
    setIsAuth,
  };

  const [todos, setTodos] = useLocalStorage("todos", initialState);
  const [auth, setAuth] = useLocalStorage("auth", false);

  const { isShow, ref, setIsShow } = useOutSide(false);

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
      <AuthContext.Provider value={value}>
        <Page />
      </AuthContext.Provider>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <Page2 />
      </ThemeContext.Provider>
      <button
        ref={ref}
        onClick={() =>
          setTodos(
            todos.map((t: any, i: number) => {
              if (i === 1) t.isCompleted = !t.isCompleted;
              return t;
            })
          )
        }
      >
        ?????????????????? ???????????? ????????????
      </button>
      <button onClick={() => setAuth(!auth)}>???????????????? ??????????????????</button>
      {auth && <div>?????? ??????????!</div>}
      <button ref={ref} onClick={() => setIsShow(!isShow)}>
        ???????????????? ??????????????
      </button>
      {isShow && (
        <div
          style={{ width: "300px", height: "300px", background: "blue" }}
        ></div>
      )}
      <MyInput />
      <UseCookie />
      <UseFetch />
    </div>
  );
}

export default App;
