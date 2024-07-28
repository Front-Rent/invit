const FirstGovazd = ({ isActive, onClick }) => {
  return (
    <div
      className="govazd-section-txt-nkaragir"
      style={isActive ? { borderLeft: "solid" } : { borderLeft: "none" }}
      onClick={onClick}
    >
      <div className="govazd-section-txt-nkaragir-menu">
        <h2>Առիթների լայն տեսականի</h2>
        <p>Ընտրեք հրավիրատոմսերի տարբեր ձևավորումներ տարբեր առիթների համար:</p>
      </div>
    </div>
  );
};

export default FirstGovazd;
