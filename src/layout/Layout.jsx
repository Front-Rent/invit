import React from "react";
import Header from "../components/Home/HomeHeader/Header";
import ConsactSection from "../components/Home/HomeMain/ContactSection/ConsactSection";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ConsactSection />
    </>
  );
};

export default Layout;
