import React from "react";

import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  custom_btn: {
    // backgroundColor: "var(--main-color) !important",
    // color: "#000",
    // fontSize: "14px !important",
    // fontWeight: "500 !important",
    // border: "0 !important",
    // borderRadius: "50px !important",
    // padding: "1px 12px !important",
    // lineHeight: "35px !important",
    // minSidth: "100px !important",
  },
  custom_btn_icon_container: {
    // color: " #000 !important",
    // background: "#fff !important",
    // borderRadius: "50px !important",
    // height: "27px !important",
    // width: "27px !important",
    // linerHeight: "29px !important",
    // textAlign: "center !important",
    // display: "flex !important",
    // alignItems: "center !important",
    // justifyContent: "center !important",
  },
  custom_btn_text: {
    // fontSize: "14px !important",
    textTransform: "none !important",
    // textAlign: "center",
    // width: "100%",
    // marginRight: "5px",
    // marginLeft: "5px",
  },
});

function CustomButton({ text, icon, cv, hire }) {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.custom_btn}
        variant="outlined"
        color="primary"
        endIcon={icon ? icon : null}
        // href={require("../assets/cv.pdf").default}
        // href="https://www.google.com/"
        target="blank"
      >
        <span className={classes.custom_btn_text}>{text}</span>
      </Button>
    </div>
  );
}

export default CustomButton;
