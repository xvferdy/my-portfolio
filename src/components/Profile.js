import React from "react";
import resumeData from "../utils/resumedata";

import { makeStyles, Typography } from "@material-ui/core";
import CustomTimeline, { CustomTimelineSeparator } from "./CustomTimeline";
import PersonIcon from "@material-ui/icons/Person";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import { green } from "@material-ui/core/colors";
import CustomButton from "./CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles({
  profile: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    width: "100%",
    display: "inline-block ",
    boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.1)",
    webkitBoxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.1)",
    mozBoxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.1)",
  },
  profile_image: {
    // marginTop: "-18px",
    // webkitClipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
    // clipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
  },
  img: {
    width: "100%",
  },
  profile_name: {
    lineHeight: 18,
    padding: 20,
  },
  name: {
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: "bold",
  },
  title: {
    fontSize: 13.5,
    color: "#777",
  },

  profile_information: {
    top: 0,
    left: 0,
    margin: "-45px 7px 20px",
    marginRight: "-7px",
  },

  timeline_content: {
    minHeight: 40,
    paddingTop: "0px !important",
    // marginTop: 2,
    // marginBottom: 12,
    // backgroundColor: green[400],
  },
  timelineItem_text: {
    fontSize: 13.5,
    // fontWeight: 400,
    color: "#777",
  },
  timelineItem_link: {
    // color: "#0000EE ",
    textDecoration: "none",
  },
  timelineItem_span: {
    color: "#000",
  },
  button_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
});

const CustomTimelineItem = ({ title, text, link }) => {
  const classes = useStyles();
  return (
    <TimelineItem className={classes.timeline_content}>
      <CustomTimelineSeparator />
      <TimelineContent>
        {link ? (
          <Typography className={classes.timelineItem_text}>
            <span className={classes.timelineItem_span}>{title}:</span>{" "}
            <a className={classes.timelineItem_link} href={link} target="blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className={classes.timelineItem_text}>
            <span className={classes.timelineItem_span}>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

function Profile() {
  const classes = useStyles();

  const {
    name,
    title,
    displayImage,
    birthday,
    email,
    address,
    phone,
  } = resumeData;

  return (
    <div className={classes.profile}>
      <div className={classes.profile_name}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.title}>{title}</Typography>
      </div>
      <figure className={classes.profile_image}>
        <img
          className={classes.img}
          src={require(`../assets/images/${displayImage}`).default}
          alt="myPhoto"
        />
      </figure>
      <div className={classes.profile_information}>
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={name} />
          <CustomTimelineItem title="Birthday" text={birthday} />
          <CustomTimelineItem title="Address" text={address} />
          <CustomTimelineItem title="Email" text={email} />
          <CustomTimelineItem
            title="Github"
            text={resumeData.socials.Github.text}
            link={resumeData.socials.Github.link}
          />

          {/* social with link*/}
          {/* {Object.keys(resumeData.socials).map((social, idx) => (
            <CustomTimelineItem
              key={idx}
              title={social}
              text={resumeData.socials[social].text}
              link={resumeData.socials[social].link}
            />
          ))} */}
        </CustomTimeline>
      </div>
      <div className={classes.button_container}>
        <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
      </div>
    </div>
  );
}

export default Profile;
