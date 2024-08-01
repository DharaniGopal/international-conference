import React from "react";
import { Link } from "react-router-dom";

const Resources = [
  {
    name: "Session 1",
    routerPath: "/ICSTEET/",
  },
  {
    name: "Session 2",
    routerPath: "/ICSTEET/",
  },
  {
    name: "Session 3",
    routerPath: "/ICSTEET/",
  },
  {
    name: "Session 4",
    routerPath: "/ICSTEET/",
  },
  {
    name: "Session 5",
    routerPath: "/ICSTEET/",
  },
  {
    name: "Session 6",
    routerPath: "/ICSTEET/",
  },
  {
    name: "Session 7",
    routerPath: "/ICSTEET/",
  },
  {
    name: "Session 8",
    routerPath: "/ICSTEET/",
  },
];

const MegaMenu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/#"
          data-toggle="dropdown"
        >
          ICSTEET
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/ICSTEET/">
              {" "}
              Welcome
              <div
                style={{
                  fontSize: "10px",
                  margin: "-10px 0 0px 30px",
                  paddingBottom: "10px",
                  lineHeight: "normal",
                }}
              ></div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/ICSTEET/">
              {" "}
              Key Highlights
              <div
                style={{
                  fontSize: "10px",
                  margin: "-10px 0 0px 30px",
                  paddingBottom: "10px",
                  lineHeight: "normal",
                }}
              ></div>
            </Link>
          </li>
          <li></li>
          <li>
            <Link className="dropdown-item" to="/ICSTEET/">
              {" "}
              About
              <div
                style={{
                  fontSize: "10px",
                  margin: "-10px 0 0px 30px",
                  paddingBottom: "10px",
                  lineHeight: "normal",
                }}
              ></div>
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/ICSTEET/"
          data-toggle="dropdown"
        >
          Sessions
        </a>
        <ul className="dropdown-menu">
          {Resources.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default MegaMenu;
