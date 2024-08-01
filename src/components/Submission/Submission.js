import React, { Component } from "react";
import imggg2 from "../../assets/images/assets/Guidline.PNG";
import _3_min_setup from "../../assets/images/icon/3mins_setup.svg";
import _10mins_setup from "../../assets/images/icon/10mins_setup.svg";

import "react-phone-input-2/lib/style.css";
import DocumentMeta from "react-document-meta";

export default class Submission extends Component {
  render() {
    const meta = {
      title: "Submission Guideline Software",
      meta: {
        charset: "utf-8",
      },
    };

    return (
      <DocumentMeta {...meta}>
        <>
          <div className="main-page-wrapper">
            <div className="fancy-feature-two">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-7 col-md-9 m-auto">
                    <div className="title-style-one text-center mb-150 md-mb-100">
                      <h2>Know everything about Submission.</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row align-items-center block-style-two pb-150 md-pb-90">
                  <div className="col-lg-6">
                    <div data-aos="fade-left" data-aos-duration="1200">
                      <div className="img-holder img-holder-one">
                        <img src={imggg2} alt="Guidline img" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto">
                    <div
                      className="text-wrapper"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                    >
                      <ul>
                        <li>
                          Early bird registration deadline: 20 August 2024
                        </li>
                        <br />
                        <li>Abstract submission deadline: 1 September 2024</li>
                        <li>
                          <br />
                          Full paper submission deadline: 20 September 2024
                        </li>
                        <br />
                        <li>Notification of acceptance: 30 September 2024</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </DocumentMeta>
    );
  }
}
