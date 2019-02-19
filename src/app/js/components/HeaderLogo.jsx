import React from "react";
import Typography from "@material-ui/core/Typography";

const HeaderLogo = (props) => {
  return (
    <Typography
      sm={6}
      lg={6}
      className="title"
      variant="h6"
      component="h2"
      color="inherit"
      noWrap
    >
      {props.title}
    </Typography>
  );
};
export default HeaderLogo;
