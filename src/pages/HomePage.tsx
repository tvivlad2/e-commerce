import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/Banner/Banner";
import FlashSales from "../components/flashsales/flashsales";
import Categories from "../components/Category/Categories";
import BestSellingProducts from "../components/BestSelling/BestSellingProducts";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import ExploreProducts from "../components/ExploreProducts/ExploreProducts";
import NewArrival from "../components/NewArrival/NewArrival";
import ServicesRow from "../components/ServicesRow/ServicesRow";

const HomePage = () => {
  return (
    <>
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
      </section>

      <section style={{ marginTop: "32px" }}>
        <PromoBanner />
      </section>

      <section style={{ marginTop: "32px" }}>
        <ExploreProducts />
      </section>

      <section style={{ marginTop: "32px" }}>
        <NewArrival />
      </section>

      <section style={{ marginTop: "10px", marginBottom: "50px" }}>
        <ServicesRow />
      </section>
    </>
  );
};

export default HomePage;