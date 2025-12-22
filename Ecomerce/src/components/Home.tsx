import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Category/Categories";
import BestSellingProducts from "./Banner2/BestSellingProducts";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <Navbar />
      </div>

      <div style={{ display: "flex", gap: "24px" }}>
        <Sidebar />
        <Banner />
      </div>

      <div>
        <Categories />
      </div>

      <div>
        <BestSellingProducts />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
