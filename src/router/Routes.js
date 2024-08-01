import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import Header from "../components/header/Header";
import HomePageContent from "../components/HomePage/HomePageContent";
import PapperSubmission from "../components/Submission/Submission";
import Footer from "../components/Footer/Footer";

const Routes = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let location = useLocation();
  return (
    <>
      {/* <Router> */}
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
      <Switch>
        <Route exact path="/" component={HomePageContent} />
      </Switch>
      <Switch>
        <Route exact path="/ICSTEET" component={HomePageContent} />
      </Switch>
      <Switch>
        <Route exact path="/ICSTEET/submission" component={PapperSubmission} />
      </Switch>
      <Switch>
        <Route path="/ICSTEET/" component={Footer} />
      </Switch>
    </>
  );
};

export default Routes;
