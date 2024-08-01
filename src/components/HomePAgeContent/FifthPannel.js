import React from "react";
import End_to_End from "../../assets/images/icon/dataSecurity/End_to_End_Encryption.webp";
import Multi_level from "../../assets/images/icon/dataSecurity/Multi_level_Authentication.webp";
import Type_II from "../../assets/images/icon/dataSecurity/hosted_Tier_IV_SSAE_16_Type_II.webp";

const FeaturesContent = [
  {
    img: Type_II,
    title: "Keynote Speakers",
    desc: ` Our conference will feature renowned speakers who are leaders in their respective fields. Stay tuned for announcements about our distinguished keynote speakers.`,
  },
  {
    img: End_to_End,
    title: "Session Speakers",
    desc: ` Session Chair`,
  },
  {
    img: Multi_level,
    title: "Conference Scientific Committee",
  },
];
const FifthPannel = () => {
  return (
    <>
      <div className="fancy-feature-seventeen mt-150 md-mt-90" id="product">
        <div className="bg-wrapper">
          <div className="container" style={{ overflow: "hidden" }}>
            <div>
              <h3 style={{ textAlign: "center", marginBottom: "100px" }}>
                SPEAKERS
              </h3>
            </div>
            <div className="row">
              {FeaturesContent.map((val, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  key={i}
                >
                  <div className="block-meta">
                    <h4>{val.title}</h4>
                    <h5>{val.desc}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthPannel;
