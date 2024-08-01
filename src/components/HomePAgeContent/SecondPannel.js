import React from "react";
import bridgingGap from "../../assets/images/assets/bridging_the_gap.png";

export default class SecondPannel extends React.Component {
  render() {
    return (
      <div className="fancy-text-block-seven mt-5 md-mt-100">
        <div className="bg-wrapper">
          <div className="container" style={{ overflow: "hidden" }}>
            <div className="row">
              <div
                className="col-lg-7 col-md-6 col-sm-9 m-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
                id="custom_gif_div"
              >
                <div className="img-holder">
                  <img src={bridgingGap} alt="Second Panel" />
                </div>
              </div>

              <div
                className="col-xl -4 col-lg-7 ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="quote-wrapper pt-50">
                  <h3 style={{ color: "#005c8e" }}>Welcome to ICSTEET 2025</h3>
                  <p className="font-rubik">
                    Join us at the International Conference on Social Sciences,
                    Teaching & Education, Engineering and Technology (ICSTEET),
                    a premier forum for researchers, practitioners and
                    professionals from around the world to present and discuss
                    the latest innovations, trends and challenges in these
                    dynamic fields.
                  </p>
                  <br />
                  <strong className="font-rubik">
                    HYBRID EVENT:  You can participate in person at Philippines
                    or Virtually from your home or work.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
