import React from "react";

export default class NinthPannel extends React.Component {
  render() {
    return (
      <div className="fancy-text-block-ninth-panel mt-5 md-mt-100">
        <div className="bg-wrapper">
          <div className="container" style={{ overflow: "hidden" }}>
            <div className="row">
              <div
                className="col-xl -4 col-lg-7 ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="quote-wrapper pt-50">
                  <h3 style={{ color: "white" }}>About ICSTEET</h3>
                  <p className="font-rubik">
                    ICSTEET aims to bring together leading academic scientists,
                    researchers and scholars to exchange and share their
                    experiences and research results. The conference offers an
                    interdisciplinary platform for the presentation of new
                    advances and research in the fields of Education,
                    Engineering & Technology, Social Sciences and Humanities.
                  </p>
                  <p className="font-rubik">
                    This conference serves as a platform for sharing
                    cutting-edge research and innovations across multiple
                    disciplines, fostering interdisciplinary collaborations and
                    networking with peers from around the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
