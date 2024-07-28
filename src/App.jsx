import { Route, Routes } from "react-router-dom";

import Weeding from "./components/Weeding/Weeding";
import Home from "./components/Home/Home";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weedeng" element={<Weeding />} />
    </Routes>
  );
}

export default App;
