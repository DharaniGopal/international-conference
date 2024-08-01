import React from "react";
import DocumentMeta from "react-document-meta";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icon/93.svg";

const FirstPannel = (props) => {
  const meta = {
    title: "Bridging the Gap:Education Software",
    description:
      "Innovations and Challenges in Social Sciences, Teaching and Education, Engineering and Technology.",
    meta: {
      charset: "utf-8",
    },
  };
  return (
    <DocumentMeta {...meta}>
      <div className="main-page-wrapper font-gordita">
        <div className="hero-banner-seven lg-container">
          <div className="container" style={{ overflow: "hidden" }}>
            <div className="illustration-container">
              <img src={props.firstimg} alt="First Panel" />
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h2 className="hero-heading">
                  <span>International </span>
                  Conference (ICSTEET).
                </h2>
                <p className="hero-sub-heading">
                  On Social Sciences, Teaching &amp; Education, Engineering and
                  Technology
                </p>
                <Link
                  to="/ICSTEET/submission"
                  className="d-flex align-items-center learn-more"
                >
                  <span>Submission Guidelines</span>
                  <img src={arrow} alt="screen" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

export default FirstPannel;
