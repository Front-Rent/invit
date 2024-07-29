import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

const HomePage = lazy(() => import("./pages/HomePage"));
const WeddingPage = lazy(() => import("./pages/WeddingPage"));
const BirthdayPage = lazy(() => import("./pages/BirthdayPage"));
const FirstWeddingExample = lazy(() =>
  import("./components/Weeding/FirstWeedengExampel/FirstWeedengExample")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/wedding/barev" element={<FirstWeddingExample />} />
        <Route path="/birthday" element={<BirthdayPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
