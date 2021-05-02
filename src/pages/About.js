import React from "react";
import resumeData from "../utils/resumedata";

import { Grid, Typography, makeStyles, Icon } from "@material-ui/core";

const useStyles = makeStyles({
  section: {
    // paddingLeft: "20px !important",
    // paddingRight: " 20px !important",
    padding: 40,

    // marginBottom: 60,
    // marginTop: 40,
  },
  section_skill: {
    // marginTop: 30,
    padding: 40,
    // paddingTop: 10,
    // paddingBottom: 20,
    backgroundColor: "#fafafa",
  },
  skill_box: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.07) !important",
  },
  section_last: {
    // marginTop: 30,
    padding: 40,
    // paddingTop: 10,
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
  timeline_description: {
    color: "#777",
  },
  list_skill: {
    color: "#777",
  },
});

function About() {
  const classes = useStyles();
  return (
    <div>
      {/* About me */}
      <Grid container className={classes.section}>
        <Grid item className={classes.section_title}>
          <span className={classes.span} />
          <Typography variant="h6" gutterBottom>
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="justify" paragraph>
            {resumeData.about_p1}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" align="justify">
            {resumeData.about_p2}
          </Typography>
        </Grid>
      </Grid>

      {/* skills */}
      <Grid container className={classes.section_skill}>
        <Grid item className={classes.section_title}>
          <span className={classes.span} />
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            justify="space-around"
            style={{ textAlign: "center" }}
            spacing={4}
          >
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={3} md={3} className={classes.skill_box}>
                <Icon>{skill.icon}</Icon>
                <Typography paragraph>{skill.title}</Typography>

                {skill.description.map((skill) => (
                  <Typography
                    className={classes.list_skill}
                    variant="body2"
                  >{`${skill}`}</Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* hoby and interest */}
      <Grid container className={classes.section_last}>
        <Grid item className={classes.section_title}>
          <span className={classes.span} />
          <Typography variant="h6" gutterBottom>
            Interests
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="justify" paragraph>
            {resumeData.interest_p1}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="justify" paragraph>
            {resumeData.interest_p2}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
