import HomeHeader from "./HomeHeader/Header";
import HomeMain from "./HomeMain/HomeMain";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeMain />
    </div>
  );
};

export default Home;
