import React from "react";
import { Grid } from "@material-ui/core";
import ImageContainer from "../container/ImageContainer";
require("../../style/BodyStyle.scss");

const Body = props => {
  return (
    <Grid xs={12} justify="center" className="body-container">
      <ImageContainer />
    </Grid>
  );
};
export default Body;
