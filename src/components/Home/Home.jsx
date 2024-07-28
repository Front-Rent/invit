import HomeHeader from "./HomeHeader/HomeHeader";
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
