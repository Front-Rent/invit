// import Header from "./components/header/Header";

// import Main from "./components/main/Main";

import Home from "./components/Home/Home";

import "./media/media.scss";

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import FirstWeedengExample from "./components/FirstWeedengExampel/FirstWeedengExample";
// {
//   /* <Header />
//       <Main /> */
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weedeng" element={<FirstWeedengExample />} />
    </Routes>
  );
}

export default App;
