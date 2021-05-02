import React from "react";
import { useLocation } from "react-router";
import resumeData from "../utils/resumedata";
import CustomButton from "./CustomButton";
import "./Header.css";

import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import { HomeRounded, Telegram } from "@material-ui/icons";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    marginBottom: "30px !important",
    backgroundColor: "white !important",
    padding: "0 22px 0 0 !important",
    borderRadius: "6px !important",
    boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.07) !important",
  },
  navBar_collapse: {
    margin: 7,
  },

  home_icon: {
    color: "#2f4f4f",
  },

  header_home: {
    backgroundColor: "var(--main-color)",
    padding: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "inherit",
    borderBottomLeftRadius: "inherit",
  },

  header_left: {
    marginRight: "auto",
  },
});
function Header(props) {
  const classes = useStyles();
  // const pathName = props?.location?.pathName;

  const location = useLocation();

  return (
    <Navbar expand="lg" sticky="top" className={classes.header}>
      <Navbar.Brand
        as={NavLink}
        to="/"
        className={
          location.pathname === "/" ? "header_home_active" : "header_home"
        }
      >
        <HomeRounded className={classes.home_icon} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className={classes.navBar_collapse}>
        <Nav className={classes.header_left}>
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={
              location.pathname === "/resume"
                ? "header_link_active"
                : "header_link"
            }
          >
            <Typography>Resume</Typography>
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              location.pathname === "/portfolio"
                ? "header_link_active"
                : "header_link"
            }
          >
            <Typography>Portfolio</Typography>
          </Nav.Link>
        </Nav>

        {/* <div className={classes.header_right}> */}
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
