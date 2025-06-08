import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CampersPage = lazy(() => import("./pages/CampersPage/CampersPage"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
