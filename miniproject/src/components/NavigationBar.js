import React from "react";

export default function NavigationBar({ setNama }) {
  const handleChange = (e) => {
    setNama(e.target.value);
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light px-5"
      style={{ backgroundColor: "#1B332D" }}
    >
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="/" style={{ color: "white" }}>
          The Yard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <a
              className="nav-link active"
              aria-current="page"
              href="/"
              style={{ color: "#ffffff" }}
            >
              Home
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="/Menu"
              style={{ color: "#ffffff" }}
            >
              Menu
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="/About"
              style={{ color: "#ffffff" }}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
