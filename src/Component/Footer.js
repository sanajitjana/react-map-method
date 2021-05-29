import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <React.Fragment>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand
          style={{
            margin: "auto",
            top: "100vh",
          }}
        >
          <h6>Copyright © 2021 MyBlogList</h6>
        </Navbar.Brand>
      </Navbar>
    </React.Fragment>
  );
}

export default Footer;
