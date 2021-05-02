import React from "react";

import "./CustomTimeline.css";

import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles({
  timeline: {},
  timeline_firstItem: {},
  timeline_dot_header: {},
  header: {},
  separator_padding: {},
  timeline_dot: {},
});

function CustomTimeline({ title, icon, children }) {
  const classes = useStyles();
  return (
    <Timeline className={"timeline"}>
      {/* CustomTimeline header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* CustomTimeline list */}
      {children}
    </Timeline>
  );
}

export const CustomTimelineSeparator = () => {
  const classes = useStyles();
  return (
    <TimelineSeparator className={"separator_padding"}>
      <TimelineDot className={"timeline_dot"} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeline;
