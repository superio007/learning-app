import Navbar from "../components/General/Navbar";
import Footer from "../components/General/Footer";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
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
