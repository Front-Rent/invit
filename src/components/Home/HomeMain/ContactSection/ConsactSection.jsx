import "./ConsactSection.scss";
import Email from "./Email/Email";
import Location from "./Location/Location";
import Phone from "./Phone/Phone";

const ConsactSection = () => {
  return (
    <div className="constact-section">
      <p>
        Մեր թիմն այստեղ է, որպեսզի օգնի ձեզ ցանկացած հարցում, որը կարող եք
        ունենալ:
      </p>
      <h2>Կապ մեզ հետ</h2>
      <p>Հարց ունեք կամ օգնության կարիք ունեք: Ազատորեն դիմեք մեզ:</p>

      <div className="constact-section-variants">
        <Email />
        <Phone />
        <Location />
      </div>
    </div>
  );
};

export default ConsactSection;
