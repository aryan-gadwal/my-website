import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from './components/Navbar';
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
} 