import React from "react";
import resumeData from "../../utils/resumedata";

import { Grid, Typography, makeStyles, Icon } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  section: {
    padding: 40,
    // backgroundColor: "#fafafa",
  },
  section_project: {
    // marginTop: 30,
    paddingTop: 20,
    // paddingTop: 10,
    // paddingBottom: 20,
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
  card: {
    maxWidth: 426,
    // boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.07) !important",
    margin: "auto",
  },
  media: {
    maxHeight: 240,
  },
  skill_box: {
    // textAlign: "center",
    // margin: "auto",
  },
});

function Portfolio() {
  const classes = useStyles();

  return (
    <div>
      {/* projects */}

      <Grid container className={classes.section}>
        <Grid item className={classes.section_title}>
          <span className={classes.span} />
          <Typography variant="h6" gutterBottom>
            Personal Projects
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" align="justify" paragraph>
            Some of my project example, Need to learn more about design.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            className={classes.section_project}
            spacing={4}
            justify="space-around"
          >
            {resumeData.projects.map((project) => (
              <Grid
                item
                xs={12}
                sm={11}
                md={10}
                lg={5}
                xl={6}
                className={classes.skill_box}
              >
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={
                        require(`../../assets/images/project-thumbnail/${project.image}`)
                          .default
                      }
                      // ../assets/images/${displayImage}
                      title={project.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href={project.link}
                      target="blank"
                    >
                      Github Repo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Portfolio;
