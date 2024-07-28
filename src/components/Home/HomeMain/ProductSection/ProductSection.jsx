import Products from "./Products/Products";
import "./ProductSection.scss";

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-section-text">
        <h2>Բացահայտեք մեր արտադրանքի ուժը</h2>
        <p>
          Մենք հասկանում ենք, թե որքան կարևոր է ձեր տոնի յուրաքանչյուր պահը: Մեր
          հրավերները կօգնեն ձեր միջոցառումը դարձնել յուրահատուկ և հիշարժան: Մենք
          հոգում ենք յուրաքանչյուր մանրուքի մասին, որպեսզի ձեր հրավերը եզակի
          լինի և արտացոլի ձեր անհատականությունը:
        </p>
      </div>
      <Products />
    </section>
  );
};

export default ProductSection;
