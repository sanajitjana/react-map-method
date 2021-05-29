import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

function Navbars() {
  return (
    <React.Fragment>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand
          style={{
            textTransform: "capitalize",
            margin: "auto",
          }}
        >
          <h2>The Blog List</h2>
        </Navbar.Brand>
      </Navbar>
    </React.Fragment>
  );
}

export default Navbars;
