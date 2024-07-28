const ThierdGovazd = ({ isActive, onClick }) => {
  return (
    <div
      className="govazd-section-txt-nkaragir"
      style={isActive ? { borderLeft: "solid" } : { borderLeft: "none" }}
      onClick={onClick}
    >
      <div className="govazd-section-txt-nkaragir-menu">
        <h2>Անհատական մոտեցում յուրաքանչյուր աշխատանքին</h2>
        <p>Յուրաքանչյուր մանրուքի վրա ուշադրություն դարձնել</p>
      </div>
    </div>
  );
};

export default ThierdGovazd;
