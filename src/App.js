import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);
const HatPage = () => (
  <div>
    <h1>Hat Page </h1>
  </div>
);
const Jackets = () => (
  <div>
    <h1>Jackets Page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="hats" element={<HatsPage />} />
        <Route path=":hatsId" element={<HatPage />} />
        <Route path="jackets" element={<Jackets />} />
      </Routes>
    </div>
  );
}

export default App;
