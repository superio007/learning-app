import { lazy, Suspense } from "react";
import { useEffect } from "react";
const NewsLetter = lazy(() => import("../components/Home/NewsLetter"));
const HeroSection = lazy(() => import("../components/Home/HeroSection"));
const PackagesSection = lazy(
  () => import("../components/Home/PackagesSection"),
);
const TeamSection = lazy(() => import("../components/Home/TeamSection"));

import FallbackLoader from "../components/UI/FallbackLoader";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Suspense fallback={<FallbackLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<FallbackLoader />}>
        <PackagesSection />
      </Suspense>
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
