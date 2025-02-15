import ScrollToTop from "./components/ScrollToTop";
import CaseStudy from "./pages/CaseStudy";
import GraphicDesigns from "./pages/GraphicDesigns";
import Home from "./pages/Home";
import UiDesigns from "./pages/UiDesigns";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/Jithendra-Portfolio/" element={<Home />} />
          <Route path="/Jithendra-Portfolio/uiux-designs" element={<UiDesigns />} />
          <Route path="/Jithendra-Portfolio/graphic-designs" element={<GraphicDesigns />} />
          <Route path="/Jithendra-Portfolio/casestudy" element={<CaseStudy />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
