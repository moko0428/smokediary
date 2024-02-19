import "./styles/App.css";
import Nav from "./components/Nav";
import Settings from "./routes/Settings";
import Report from "./routes/Report";
import Home from "./routes/Home";
import Diary from "./routes/Diary";
import Place from "./routes/Place";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((item) =>
        item.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      console.log("state", state);
      return state;
  }
  console.log("new", newState);
  return newState;
};

export const SmokeStateContext = React.createContext();
export const SmokeDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const onCreate = (date, count) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        count,
        date: new Date(date).getTime(),
      },
    });
    dataId.current += 1;
    count += 1;
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
