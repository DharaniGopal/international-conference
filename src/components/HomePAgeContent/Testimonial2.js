import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonilContent = [
  {
    titleTwo: "Options Available for Publication of Presented Work",
    desc: `The International Conference on Social Sciences, Teaching & Education, Engineering and Technology (ICSTEET) provides several publication opportunities for presented work`,
    titletopicOne: "Conference Proceedings",
    titlePointOne:
      "All accepted and registered abstracts will be published in the Conference Proceedings with an ISBN Number.",
    titleTopicTwo: "Journal Publication",
    titlePointTwo:
      "There is an opportunity to publish your paper in various Web of Science, Scopus and other internationally indexed journals, increasing the visibility and impact of your research.",
  },
  {
    titleTwo: "Plagiarism Policy & Publication Ethics",
    desc: `The International Conference on Social Sciences, Teaching & Education, Engineering and Technology (ICSTEET) adheres to stringent anti-plagiarism policies. Here are the key points about their process`,
    titletopicOne: "Plagiarism Check",
    titlePointOne:
      "Every submission undergoes a plagiarism check using Crossref Similarity Check, which is powered by iThenticate. This ensures that all articles submitted to the conference are original and free from plagiarism.",
    titleTopicTwo: "Review Process",
    titlePointTwo:
      "Submissions that pass the plagiarism check are sent to the scientific committee for review.Any submission found to be plagiarized at any stage will be automatically rejected.",
  },
];

const settings = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  margin: 30,
};

export default class Testimonial2 extends Component {
  render() {
    return (
      <div
        className="client-feedback-slider-one pt-50 pb-5 md-pb-80"
        style={{ overflow: "hidden" }}
      >
        <div className="shapes-holder">
          <div className="title-style-two">
            <h2>Publication</h2>
            <br />
            <p>Paper Publication Opportunity.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto">
              <div className="feedback-meta">
                <div className="clientSliderOne">
                  <Slider {...settings}>
                    {TestimonilContent.map((val, i) => (
                      <div
                        className="item"
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <h5
                          style={{
                            marginTop: "15px",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          {val.titleTwo}
                        </h5>
                        <p
                          style={{
                            marginTop: "-26px",
                            fontSize: "16px",
                            color: "#000",
                          }}
                        >
                          {val.desc}
                        </p>
                        <h5 style={{ marginTop: "-20px", color: "white" }}>
                          {val.titletopicOne}
                        </h5>
                        <p
                          style={{
                            marginTop: "-26px",
                            fontSize: "16px",
                            color: "#000",
                          }}
                        >
                          {val.titlePointOne}
                        </p>
                        <h5 style={{ marginTop: "-26px", color: "white" }}>
                          {val.titleTopicTwo}
                        </h5>
                        <p
                          style={{
                            marginTop: "-26px",
                            fontSize: "16px",
                            color: "#000",
                          }}
                        >
                          {val.titlePointTwo}
                        </p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              {/* /.feedback-meta */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      // </div>
    );
  }
}
