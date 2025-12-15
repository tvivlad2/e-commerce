import "./Banner.css"
import iphoneImg from "../../assets/dc40ba897215f42e5883a64157f0aa3a4d1a866a (1).jpg";
import appleLogo from "../../assets/applelogo.png";



const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-brand">
        <img src={appleLogo} alt="Apple" />
        <span>iPhone 14 Series</span>
        </div>

        <h1>
          Up to <span>10%</span> <br /> off Voucher
        </h1>
        <button className="cta">
          Shop Now →
        </button>
      </div>

      <div className="banner-image">
        <img src={iphoneImg} alt="iPhone 14"  />
      </div>

      <div className="banner-dots">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

    </section>
  )
}

export default Banner
