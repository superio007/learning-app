import Navbar from "../components/General/Navbar";
import Footer from "../components/General/Footer";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function MainLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Navbar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
