import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/contact-us">
      <button className="bg-primary text-white px-6 py-2 rounded-full">
        Contact Us
      </button>
    </Link>
  );
};

export default Button;
