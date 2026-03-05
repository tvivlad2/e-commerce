 import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Banner from "./Banner/Banner";
import FlashSales from "./flashsales/flashsales";
import Categories from "./Category/Categories";
import Footer from "./Footer/Footer";
import BestSellingProducts from "./BestSelling/BestSellingProducts";
import PromoBanner from "./PromoBanner/PromoBanner";
import ExploreProducts from "./ExploreProducts/ExploreProducts";
import NewArrival from "./NewArrival/NewArrival";
import ServicesRow from "./ServicesRow/ServicesRow";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        

      <section style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
        <Sidebar />
        <Banner />
      </section>
    

        
        <section style={{ marginTop: "32px" }}>
          <FlashSales />
        </section>

       
        <section style={{ marginTop: "32px" }}>
          <Categories />
        </section>


        <section style={{ marginTop: "32px" }}>
          <BestSellingProducts />
          <PromoBanner />
        </section>

        <section style={{ marginTop: "32px" }}>
          <ExploreProducts />
        </section>

        <section style={{ marginTop: "32px" }}>
          <NewArrival />
        </section>

        <section style={{ marginTop: "10px" }}>
          <ServicesRow />
        </section>

        <ScrollToTop />
        
      </main>

      <Footer />
    </>
  );
};

export default Home;