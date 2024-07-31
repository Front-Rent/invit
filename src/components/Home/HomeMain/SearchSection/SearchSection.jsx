import GravitationButton from "./GravitationButton/GravitationButton";
import "./SearchSection.scss";

const SearchSection = () => {
  return (
    <section className="search-section">
      <h2>
        Մենք Պատրաստում ենք գեղեցիկ հրավիրատոմսեր յուրաքանչյուր առիթի համար
      </h2>
      <p>
        Անհատականացրեք ձեր հատուկ միջոցառումները մեր հատուկ հրավիրատոմսերի
        միջոցով: Անկախ նրանից, թե դա ծննդյան, հարսանիքի, մկրտության կամ ցանկացած
        այլ տոնակատարության, մենք ունենք կատարյալ տարբերակներ ձեզ համար:
      </p>
      <GravitationButton text="Փնտրել Տարբերակներ" />
    </section>
  );
};

export default SearchSection;
