import { Routes, Route } from "react-router";
import Home from "./Home.jsx";
import ChatPage from "./ChatPage";
import Navbar from "./Navbar.jsx";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}