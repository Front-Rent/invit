const RestoranMap = () => {
  return (
    <section className="manramasner-map-form">
      <h2>Ինչպես հասնել Աստաֆյան Հոլլ</h2>
      <br />
      <br />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.9793460451174!2d44.59927455994611!3d40.187273090587816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa4a0e909bd89%3A0x82b95444dba6e79c!2sAstafyan%20Hall!5e0!3m2!1shy!2sam!4v1721930298476!5m2!1shy!2sam"
          width="500"
          height="350"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          className="manramasner-map-form-map"
        ></iframe>
      </div>
    </section>
  );
};

export default RestoranMap;
