import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
