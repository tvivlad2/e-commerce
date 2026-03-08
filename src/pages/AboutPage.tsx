import React from "react";
import styles from "../components/about/AboutPage.module.css";
import StatsCard from "../components/about/StatsCard";
import TeamCard from "../components/about/TeamCard";
import ServiceItem from "../components/about/ServiceItem";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png";
import About4 from "../assets/About4.png";


const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>Home / About</div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with active presence in Bangladesh. Supported by wide
            range of tailored marketing, data, and service solutions.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace.
          </p>
        </div>
        <img src={About1} alt="Shopping" />
      </div>

      {/* Stats Section */}
      <div className={styles.stats}>
        <StatsCard
          icon="🏬"
          value="10.5k"
          label="Sellers active on site"
          onClick={() => alert("Sellers clicked")}
        />
        <StatsCard
          icon="💰"
          value="33k"
          label="Monthly Product Sale"
          highlight
          onClick={() => alert("Sales clicked")}
        />
        <StatsCard
          icon="🛍"
          value="45.5k"
          label="Customer active on site"
          onClick={() => alert("Customers clicked")}
        />
        <StatsCard
          icon="📈"
          value="25k"
          label="Annual gross sale on site"
          onClick={() => alert("Gross sale clicked")}
        />
      </div>

      {/* Team Section */}
      <div className={styles.team}>
        <TeamCard
          image={About2}
          name="Tom Cruise"
          role="Founder & Chairman"
          onProfileClick={() => alert("Profile clicked")}
        />
        <TeamCard
          image={About3}
          name="Emma Watson"
          role="Managing Director"
          onProfileClick={() => alert("Profile clicked")}
        />
        <TeamCard
          image={About4}
          name="Will Smith"
          role="Product Designer"
          onProfileClick={() => alert("Profile clicked")}
        />
      </div>

      {/* Services Section */}
      <div className={styles.services}>
        <ServiceItem
          icon="🚚"
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
          onClick={() => alert("Delivery clicked")}
        />
        <ServiceItem
          icon="🎧"
          title="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
          onClick={() => alert("Support clicked")}
        />
        <ServiceItem
          icon="💵"
          title="MONEY BACK GUARANTEE"
          description="We return money within 30 days"
          onClick={() => alert("Guarantee clicked")}
        />
      </div>
    </div>
  );
};

export default AboutPage;
