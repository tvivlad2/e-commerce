import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <Sidebar />
      <Banner />
    </div>
  )
}

export default Home




