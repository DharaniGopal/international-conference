import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";

class PricingThree extends React.Component {
  state = {
    PricingContent: [
      {
        title: "Interdisciplinary Sessions",
        desc: "Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.",
        animatinDelay: "200",
      },
      {
        title: "Expert Keynote Speakers",
        desc: "Learn from renowned experts who will share their insights and experiences.",
        animatinDelay: "300",
      },
      {
        title: "Paper Presentations",
        desc: "Present your research findings and contribute to discussions on a wide range of topics.",
        animatinDelay: "400",
      },
      {
        title: "Networking Opportunities",
        desc: "Connect with peers, researchers and industry professionals to build collaborations and partnerships.",
        animatinDelay: "400",
      },
      {
        title: "Publication Opportunities",
        desc: "Selected papers will have the opportunity to be published in a Scopus indexed journals.",
        animatinDelay: "400",
      },
    ],
  };
  render() {
    return (
      <div className="pricing-section-six pt-100 md-pt-100" id="pricing">
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="title-style-seven text-center">
                <h2>
                  <span>Key Highlights</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Tabs>
          <div className="pricing-table-area-six">
            <TabPanel>
              <div
                className="row justify-content-center"
                style={{
                  marginRight: "-100px",
                  marginLeft: "-100px",
                }}
              >
                {this.state.PricingContent.map((val, i) => (
                  <div
                    className="col-lg-2 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={val.animatinDelay}
                    key={i}
                  >
                    <div className={`pr-table-wrapper ${val.activeItem}`}>
                      <div className="pack-name">{val.title}</div>
                      <div
                        style={{
                          fontSize: "20px",
                          color: "black",
                          marginTop: "20px",
                          height: "130px",
                        }}
                      >
                        {val.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default PricingThree;
