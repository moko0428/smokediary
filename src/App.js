import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Settings from "./screens/Settings";
import Report from "./screens/Report";
import Home from "./screens/Home";
import Diary from "./screens/Diary";
import Place from "./screens/Place";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(title) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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
  );
}

export default App;
