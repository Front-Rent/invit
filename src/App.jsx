import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

const HomePage = lazy(() => import("./pages/HomePage"));
const WeddingPage = lazy(() => import("./pages/WeddingPage"));
const BirthdayPage = lazy(() => import("./pages/BirthdayPage"));
const FirstWeddingExample = lazy(() =>
  import("./components/Weeding/FirstWeedengExampel/FirstWeedengExample")
);
const EkexeciMap = lazy(() =>
  import(
    "./components/Weeding/FirstWeedengExampel/FirstWeddingExampleMain/manramasner/ekexeci/ekexeciMap/EkexeciMap"
  )
);

const RestoranMap = lazy(() =>
  import(
    "./components/Weeding/FirstWeedengExampel/FirstWeddingExampleMain/manramasner/restoran/restoranMap/RestoranMap"
  )
);
const SecondWeddingExample = lazy(() =>
  import("./components/Weeding/SecondWeddingExample/SecondWeddingExample")
);

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/wedding/example1" element={<FirstWeddingExample />} />
        <Route path="/wedding/example1/ekexecimap" element={<EkexeciMap />} />
        <Route path="/wedding/example1/restoranmap" element={<RestoranMap />} />

        <Route path="/wedding/example2" element={<SecondWeddingExample />} />

        <Route path="/birthday" element={<BirthdayPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
