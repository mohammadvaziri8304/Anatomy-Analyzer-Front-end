import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload/a" element={<PageA />} />
      <Route path="/upload/b" element={<PageB />} />
    </Routes>
  );
}

export default App;