import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

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

const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="mega-menu-wrapper">
      <div className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <ProSidebar
        className={click ? "mega-mobile-menu menu-open" : "mega-mobile-menu"}
      >
        <SidebarContent>
          <Menu>
            <SubMenu title="Products">
              <MenuItem>
                {" "}
                <i
                  className="far fa-sticky-note"
                  style={{ marginRight: "10px" }}
                ></i>
                <Link to="/ICSTEET/" onClick={handleClick}>
                  Welcome
                </Link>
                <div
                  style={{
                    fontSize: "12px",
                    margin: "0px 0 0px 25px",
                    paddingBottom: "10px",
                    lineHeight: "normal",
                  }}
                ></div>
              </MenuItem>
              <MenuItem>
                {" "}
                <i className="fas fa-undo" style={{ marginRight: "10px" }}></i>
                <Link to="/ICSTEET/" onClick={handleClick}>
                  Key Highlights
                </Link>
                <div
                  style={{
                    fontSize: "12px",
                    margin: "0px 0 0px 25px",
                    paddingBottom: "10px",
                    lineHeight: "normal",
                  }}
                ></div>
              </MenuItem>
              <MenuItem>
                {" "}
                <i
                  className="fas fa-shipping-fast"
                  style={{ marginRight: "10px" }}
                ></i>
                <Link to="/ICSTEET/" onClick={handleClick}>
                  About
                </Link>
                <div
                  style={{
                    fontSize: "12px",
                    margin: "0px 0 0px 25px",
                    paddingBottom: "10px",
                    lineHeight: "normal",
                  }}
                ></div>
              </MenuItem>
            </SubMenu>

            <SubMenu title="Sessions">
              {Resources.map((val, i) => (
                <MenuItem key={i}>
                  <Link to={val.routerPath} onClick={handleClick}>
                    {val.name}
                  </Link>
                </MenuItem>
              ))}
            </SubMenu>
            <MenuItem>
              <ul className="right-button-group d-flex align-items-center justify-content-center">
                <li>
                  <a
                    href=""
                    className="signUp-action"
                    onClick={() => {
                      window.lintrk("track", { conversion_id: 7514468 });
                    }}
                  >
                    Register
                  </a>
                </li>
              </ul>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default MegaMenuMobile;
