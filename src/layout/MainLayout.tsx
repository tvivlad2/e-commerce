import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;