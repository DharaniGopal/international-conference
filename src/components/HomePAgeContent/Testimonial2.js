import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shape from '../../assets/images/shape/42.svg'
import shape39 from '../../assets/images/shape/39.svg'
import icon from '../../assets/images/icon/30.svg'
import MClogo from '../../assets/images/icon/MCS_Logo.svg'
import GAlogo from '../../assets/images/icon/GoAirlines.png'

const TestimonilContent = [
    {
      desc: ` The Conventional process of handling tenders and negotiations consumed most of our valuable time. 
      One RFQ takes 2 days to share it to the vendors. With Effybuy, We share RFQ’s in minutes eliminating 
      time in comparing the quotations manually. The Negotiations consume more than a week to select a 
      particular vendor but now, With Reverse Auctions, We complete our Negotiations within an hour 
      and get complete comparison Analytics without any human intervention.`,
      reviewerImg: GAlogo,
      reviewerName: "Craig",
      designation: "Contact Manager, Go Air",
    },
    {
      desc: `The RFQ process , when generated manually, created a lot of confusion with our Emails all over the inbox. 
      Manual errors played a major role in missing a few vendors and analysing the pending lists were another 
      tedious and laborious task to do. The efficiency of our Purchases have increased with the elimination 
      of multiple follow ups and less manual intervention.`,
      reviewerImg: MClogo,
      reviewerName: "Manager",
      designation: "Messer Cutting",
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
        // <div >

        <div className="client-feedback-slider-one pt-50 pb-170 md-pb-80" style={{"overflow":"hidden"}}>
        <div className="shapes-holder">
          <img src={shape39} alt="shape" />
          <img
            src={shape}
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src={MClogo}
            alt="shape"
            className="cp-img-one"
          />
          {/* <img
            src={GAlogo}
            alt="shape"
            className="cp-img-two"
          /> */}
          {/* <img
            src={MClogo}
            alt="shape"
            className="cp-img-three"
          /> */}
          <img
            src={GAlogo}
            alt="shape"
            className="cp-img-four"
            style={{"borderRadius":"0px"}}
          />
          <div className="title-style-two">
            <h2>
              What’s <br />
              Our Client Say <br />
              About Us.
            </h2>
          </div>
        </div>
        {/* /.shapes-holder */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto">
              <div className="feedback-meta">
                {/* <div className="watermark font-gilroy-bold">Feedback</div> */}
                <img src={icon} alt="shape" className="icon" />
                <div className="clientSliderOne">
                <Slider {...settings}>
                    {TestimonilContent.map((val, i) => (
                        <div
                        className="item"
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        >
                        <p className="font-rubik">{val.desc}</p>
                        <div className="d-lg-flex align-items-center">
                            <img
                            src={`${val.reviewerImg}`}
                            alt=""
                            className="c_img"
                            />
                            <div className="info">
                            <strong>{val.reviewerName}</strong> <span>{val.designation}</span>
                            </div>
                        </div>
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
    )
  }
}
