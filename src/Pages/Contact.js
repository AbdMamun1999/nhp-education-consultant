import React from "react";
import Address from "../Layouts/Contact/Address";
import ContactForm from "../Layouts/Contact/ContactForm";
import GoogleMap from "../Layouts/Contact/GoogleMap";

const Contact = () => {
  return (
    <div>
      <GoogleMap/>
      <Address/>
      <ContactForm/>
    </div>
  );
};

export default Contact;
