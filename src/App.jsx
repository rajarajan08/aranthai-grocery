import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
