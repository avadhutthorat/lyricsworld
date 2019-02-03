import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer font-small special-color-dark pt-4">
        <div className="container" />

        <div className="footer-copyright text-center py-3">
          © 2019 Copyright <br /> Made in{" "}
          <i className="fa fa-heart text-danger" /> with ReactJs
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
