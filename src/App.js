import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/homepage/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
