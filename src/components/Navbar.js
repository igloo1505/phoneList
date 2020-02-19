import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav style={{ marginBottom: "80px" }}>
        <div className="nav-wrapper teal lighten-1">
          <a href="#!" className="brand-logo center">
            PhoneList
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
