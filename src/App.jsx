import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import HomePage from "./pages/HomePage/HomePage";
import CampersPage from "./pages/CampersPage/CampersPage";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
