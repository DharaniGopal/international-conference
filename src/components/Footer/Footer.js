import React from "react";
import FooterContent from "../HomePAgeContent/FooterContent";

export default function Footer() {
  return (
    <footer
      className="theme-footer-seven mt-120 md-mt-100"
      style={{ background: "#BDD1C8", paddingTop: "20px" }}
    >
      <div className="lg-container">
        <div className="container">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}
