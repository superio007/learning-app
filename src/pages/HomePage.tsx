import { lazy, Suspense } from "react";
const NewsLetter = lazy(() => import("../components/Home/NewsLetter"));
// const HeroSection = lazy(() => import("../components/Home/HeroSection"));
const TeamSection = lazy(() => import("../components/Home/TeamSection"));

import FallbackLoader from "../components/UI/FallbackLoader";
const HomePage = () => {
  return (
    <>
      <Suspense fallback={<FallbackLoader />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<FallbackLoader />}>
        <NewsLetter />
      </Suspense>
    </>
  );
};
export default HomePage;
