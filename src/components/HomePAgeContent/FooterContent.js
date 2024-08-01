import React from "react";
import { Link } from "react-router-dom";
import clogo from "../../assets/images/icon/CERADALOGO.png";
const socialContent = [
  {
    icon: "fa-linkedin",
    link: "",
  },
  {
    icon: "fa-twitter",
    link: "",
  },
  {
    icon: "fa-youtube",
    link: "",
  },
  {
    icon: "fa-facebook",
    link: "",
  },
  {
    icon: "fa-instagram",
    link: "",
  },
];

export default function FooterContent() {
  return (
    <div className="row ">
      {/* <Chatbot /> */}
      <div
        className="col-xl-3 col-lg-2 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="logo">
          <a href="index.html">
            <img src={clogo} style={{ width: "180px" }} alt="logo" />
          </a>
        </div>
      </div>

      <div
        className="col-lg-3 col-md-6 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
        style={{
          color: "black",
        }}
      >
        <h5 className="title">Conference Details</h5>
        <ul className="footer-list">
          <li>
            <strong>Date: </strong>22-23 January, 2025
          </li>
          <li>
            <strong>City, Country: </strong>Manila, Philippines
          </li>
          <li>
            <strong>Organized by:</strong> Confworld Educational Research and
            Development Association
          </li>
        </ul>
      </div>
      <div
        className="col-lg-2 col-md-6 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="title">Links</h5>
        <ul className="footer-list">
          <li>
            <Link to="/ICSTEET">Home</Link>
          </li>
          <li>
            <Link to="/ICSTEET">Home</Link>
          </li>
          <li>
            <Link to="/ICSTEET">Home</Link>
          </li>
        </ul>
        <ul className="social-icon d-flex pt-15">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a
                href={val.link}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "22px", marginRight: "10px" }}
              >
                <i className={`fab ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="col-xl-4 col-lg-5 mb-40"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="newsletter">
          <h5 className="title">Contact us</h5>
          <p>
            <span>dharanigl1008@gmail.com</span>
            <br />
            <i
              className="fas fa-phone-alt fa-sm"
              style={{ marginRight: "10px" }}
            ></i>
            <i className="fab fa-whatsapp" style={{ marginRight: "10px" }}></i>
            +91 9524 815 273
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
