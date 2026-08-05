import { Outlet } from "react-router-dom";
import Loader from "../components/layout/Loader";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/layout/BackToTop";
import FloatingButtons from "../components/layout/FloatingButtons";

export default function Layout() {
  return (
    <>
      <Loader />

      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <FloatingButtons />
    </>
  );
}
