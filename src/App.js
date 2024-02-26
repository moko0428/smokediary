import "./styles/App.css";
import Nav from "./components/Nav";
import Settings from "./routes/Settings";
import Report from "./routes/Report";
import Home from "./routes/Home";
import Diary from "./routes/Diary";
import Place from "./routes/Place";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useReducer, useRef } from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "ACC": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("smoke", JSON.stringify(newState));
  return newState;
};

export const SmokeStateContext = React.createContext();
export const SmokeDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
  const countStore = useRef(1);

  useEffect(() => {
    const localData = localStorage.getItem("smoke");
    if (localData) {
      const localSmoke = JSON.parse(localData);
      if (localSmoke.length >= 1) {
        dataId.current = parseInt(localSmoke[0].id) + 1;
        countStore.current = parseInt(localSmoke[0].count) + 1;
        dispatch({ type: "INIT", data: localSmoke });
      }
    }
  }, []);
  const onCreate = (date) => {
    dispatch({
      type: "ACC",
      data: {
        id: dataId.current,
        count: countStore.current,
        date: new Date(date).getTime(),
      },
    });
    dataId.current += 1;
    countStore.current += 1;
  };
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  return (
    <SmokeStateContext.Provider value={data}>
      <SmokeDispatchContext.Provider value={{ onCreate, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/report" element={<Report />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/place" element={<Place />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
            <Nav />
          </div>
        </BrowserRouter>
      </SmokeDispatchContext.Provider>
    </SmokeStateContext.Provider>
  );
}

export default App;
