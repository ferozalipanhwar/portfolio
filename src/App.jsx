import { Route, Routes } from "react-router-dom";
import "./app.css";

import GalleryPage from "./Pages/GalleryPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
    
   

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/portfolio/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default App;