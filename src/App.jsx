import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import CartPage from "./pages/cart/cartPage.jsx";
import CartSnackbar from "./components/CartSnackbar/CartSnackBar.jsx";
import CategoryTabsView from "./components/CategoriesView/CategoriesView.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/view" element={<CategoryTabsView />} />
      </Routes>

      {/* Snackbar should be outside Routes */}
      <CartSnackbar />
    </>
  );
}

export default App;
