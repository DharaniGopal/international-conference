import React from "react";
import FirstPannel from "../HomePAgeContent/FirstPannel";
import SecondPannel from "../HomePAgeContent/SecondPannel";
import ForthPannel from "../HomePAgeContent/ForthPannel";
import FifthPannel from "../HomePAgeContent/FifthPannel";
import SeventhPannel from "../HomePAgeContent/SeventhPannel";
import EighthPannel from "../HomePAgeContent/EighthPannel";
import first_pannel_image from "../../assets/images/FirstPannel.jpg";
import Testimonial2 from "../HomePAgeContent/Testimonial2";
import NinthPannel from "../HomePAgeContent/NinthPannel";
// import Footer from "../Footer/Footer";

class HomePageContent extends React.Component {
  render() {
    const meta = {
      title: "Bridging the Gap:Education Software",
      description:
        "Innovations and Challenges in Social Sciences, Teaching and Education, Engineering and Technology.",
      meta: {
        charset: "utf-8",
      },
    };
    return (
      <>
        <FirstPannel firstimg={first_pannel_image} />
        <SecondPannel />
        <SeventhPannel />
        <NinthPannel />
        <EighthPannel />
        <ForthPannel />
        <FifthPannel />
        <Testimonial2 />
        {/* <Footer /> */}
      </>
    );
  }
}

export default HomePageContent;
