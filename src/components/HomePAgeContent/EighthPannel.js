import React from "react";

export default class EighthPannel extends React.Component {
  gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        // window.location = url;
      }
    };
    window.lintrk("track", { conversion_id: 7514444 });
    window.gtag("event", "conversion", {
      send_to: "AW-304854293/KcwlCLPJ4akDEJXqrpEB",
      event_callback: callback,
    });
    return false;
  }
  render() {
    return (
      <div className="fancy-short-banner-eight mt-50 md-mt-80">
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row">
            <div
              className="col-xl-8 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-seven text-center">
                <h2>
                  <span>Bridging the Gap</span>{" "}
                </h2>
                <h3>
                  Innovations and Challenges in Social Sciences, Teaching &
                  Education, Engineering and Technology
                </h3>
                <br />
                <h5>
                  We aim to explore the latest advancements, challenges and
                  future directions in these diverse fields, emphasizing the
                  role of interdisciplinary approaches in addressing global
                  challenges.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
