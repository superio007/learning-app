import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("../pages/HomePage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const MainLayout = lazy(() => import("../layout/MainLayout"));
import FallbackLoader from "../components/UI/FallbackLoader";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <MainLayout />
          </Suspense>
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={<FallbackLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<FallbackLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
