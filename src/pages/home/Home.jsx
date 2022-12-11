import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProject from "../../components/featuredProjects/FeaturedProject";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Maillist from "../../components/maillist/Maillist";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProject />
          <Maillist />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
