import { Link } from "react-scroll";
import "./SecondWeddingExampleHeader.scss";

const SecondWeddingExampleHeader = () => {
  return (
    <nav className="second-wedding-example-header">
      <ul>
        <li>
          <Link
            to="glxavor"
            smooth={true}
            duration={1000}
            onClick={() => {
              document
                .querySelector("#mainGlxavor")
                .scrollIntoView({ behavior: "smooth", block: "end" });
            }}
          >
            Գլխավոր
          </Link>
        </li>
        <li>
          <Link
            to="hethashvark"
            smooth={true}
            duration={1000}
            onClick={() => {
              document
                .querySelector("#mainGlxavor")
                .scrollIntoView({ behavior: "smooth", block: "end" });
            }}
          >
            Հետհաշվարկ
          </Link>
        </li>
        <li>Երբ և որտեղ</li>
        <li>Պատվիրել</li>
      </ul>
    </nav>
  );
};

export default SecondWeddingExampleHeader;
