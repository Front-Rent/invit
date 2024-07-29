import Ekexeci from "./ekexeci/Ekexeci";
import Restoran from "./restoran/Restoran";

import "./Manramasner.scss";

const Manramasner = () => {
  return (
    <section id="manramasner" className="manramasner">
      <p>Մանրամասներ</p>
      <div className="manramasner-txt">
        <p>Պսակադրությունը տեղի կունենա Սուրբ Սարգիս Եկեղեցում , 14։30</p>
      </div>
      <Ekexeci />

      <hr />
      <div className="manramasner-txt">
        <p>
          Հարսանյանց Հանդիսությունը տեղի կունենա Աստաֆյան Հոլ Ռեստորանում ,
          16։00
        </p>
      </div>
      <Restoran />
    </section>
  );
};

export default Manramasner;
