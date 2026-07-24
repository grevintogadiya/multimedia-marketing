import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/layout/BackToTop";
import FloatingButtons from "../components/layout/FloatingButtons";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <FloatingButtons />
    </>
  );
}
