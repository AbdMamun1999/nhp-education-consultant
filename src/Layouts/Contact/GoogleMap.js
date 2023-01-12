import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8974193006106!2d90.38429791481532!3d23.751037184589045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a52bb2e7df%3A0x2db066ca098cb0d6!2sNHP%20Education%20Consultants!5e0!3m2!1sen!2sbd!4v1673424187818!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: "0px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
