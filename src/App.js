import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/homepage/shop/shop.component";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
