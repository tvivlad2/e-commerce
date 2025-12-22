import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <Sidebar />
        <Banner />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home




