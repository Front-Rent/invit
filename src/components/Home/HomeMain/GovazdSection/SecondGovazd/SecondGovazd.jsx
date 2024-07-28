const SecondGovazd = ({ isActive, onClick }) => {
  return (
    <div
      className="govazd-section-txt-nkaragir"
      style={isActive ? { borderLeft: "solid" } : { borderLeft: "none" }}
      onClick={onClick}
    >
      <div className="govazd-section-txt-nkaragir-menu">
        <h2>Պրոֆեսիոնալ ձևավորման ծառայություններ</h2>
        <p>Բարձրորակ ձևավորում</p>
      </div>
    </div>
  );
};

export default SecondGovazd;
