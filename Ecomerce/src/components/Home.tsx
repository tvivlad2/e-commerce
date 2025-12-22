import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/Banner/Banner";
import FlashSales from "./flashsales/flashsales";

const Home = () => {
  return (
    <>
    <div style={{ display: "flex", gap: "24px" }}>
      <Sidebar />
      <Banner />
      

    </div>
    <div>
      <FlashSales/>
    </div>
    </>
  )
}

export default Home




