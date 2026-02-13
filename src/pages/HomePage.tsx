import { lazy, Suspense } from "react";
const NewsLetter = lazy(() => import("../components/Home/NewsLetter"));
const HeroSection = lazy(() => import("../components/Home/HeroSection"));
import FallbackLoader from "../components/UI/FallbackLoader";
const HomePage = () => {
  return (
    <>
      <Suspense fallback={<FallbackLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<FallbackLoader />}>
        <NewsLetter />
      </Suspense>
    </>
  );
};
export default HomePage;
