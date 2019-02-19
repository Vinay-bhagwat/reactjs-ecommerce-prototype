import React from "react";

import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const renderList = list => {
  return list.map(item => (
    <ListItem className="list-item">
      <Typography variant="h6" component="h6" className="list-link">
        {item.link}
      </Typography>
    </ListItem>
  ));
};

const FooterList = props => {
  return (
    <div item xs={4} md={2} className="list-container">
      <Typography variant="h6" component="h4" className="footer-list-title">
        {props.title}
      </Typography>
      <List>{renderList(props.list)}</List>
    </div>
  );
};

export default FooterList;
