import React from "react";
import resumeData from "../utils/resumedata";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#1e1e1e",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 70,
    borderRadius: 8,
    padding: "20px 25px",
  },
  footer_left: {},
  footer_right: {
    color: "#777",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footer_left}>
        <Typography>{resumeData.name}</Typography>
      </div>
      <div className={classes.footer_right}>
        <Typography variant="body2">© 2021 All rights reserved</Typography>
      </div>
    </div>
  );
}

export default Footer;
