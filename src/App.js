import "./styles/App.css";
import Nav from "./components/Nav";
import Settings from "./routes/Settings";
import Report from "./routes/Report";
import Home from "./routes/Home";
import Diary from "./routes/Diary";
import Place from "./routes/Place";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
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
  );
}

export default App;
