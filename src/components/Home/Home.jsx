import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  return (
    <nav className="home-nav">
      <ul className="home-nav-ul">
        <li>
          <Link>Birthday</Link>
        </li>
        <li>
          <Link to="/weedeng">Weedeng</Link>
        </li>
        <li>
          <Link>Knunq</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
