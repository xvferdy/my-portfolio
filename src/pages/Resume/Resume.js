import React from "react";
import resumeData from "../../utils/resumedata";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/CustomTimeline";

import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

const useStyles = makeStyles({
  section: {
    // paddingLeft: "20px !important",
    // paddingRight: " 20px !important",
    padding: 40,
  },
  section_title: {
    position: "relative",
    display: "inline-block",
    padding: "0 3px",
    marginBottom: 14,
  },
  span: {
    position: "absolute",
    height: "7px",
    width: "120%",
    bottom: 0,
    opacity: 0.3,
    left: 0,
    backgroundColor: "var(--main-color) !important",
    marginBottom: "12px",
  },

  // timeline
  timeline_content: {
    minHeight: 150,
  },

  timeline_title: {
    marginTop: "-6px",
  },
  timeline_date: {},
  timeline_description: {
    color: "#777",
  },
});

const CustomTimelineItem = ({ title, date, description }) => {
  const classes = useStyles();
  return (
    <TimelineItem className={classes.timeline_content}>
      <CustomTimelineSeparator />
      <TimelineContent>
        <Typography
          className={classes.timeline_title}
          variant="subtitle1"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          className={classes.timeline_date}
          variant="caption"
          gutterBottom
        >
          {date}
        </Typography>
        <Typography
          className={classes.timeline_description}
          variant="body2"
          paragraph
          // align="justify"
        >
          {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

function Resume() {
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
    <div>
      {/* edication, work exp */}
      <Grid container className={classes.section}>
        <Grid item className={classes.section_title}>
          <span className={classes.span} />
          <Typography variant="h6" gutterBottom>
            Resume
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* working exp */}
            <Grid item xs={12} lg={6}>
              <CustomTimeline title="Working History" icon={<HomeWorkIcon />}>
                {resumeData.experiences.map((work) => (
                  <CustomTimelineItem
                    title={work.title}
                    date={work.date}
                    description={work.description}
                  />
                ))}
              </CustomTimeline>
            </Grid>
            {/* education */}
            <Grid item xs={12} lg={6}>
              <CustomTimeline title="Education History" icon={<SchoolIcon />}>
                {resumeData.education.map((education) => (
                  <CustomTimelineItem
                    title={education.title}
                    date={education.date}
                    description={education.description}
                  />
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
