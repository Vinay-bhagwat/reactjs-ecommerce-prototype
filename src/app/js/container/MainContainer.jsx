import React from "react";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggleDialog = this.toggleDialog.bind(this);
  }
  toggleDialog() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <Grid xs={12}>
        <Header />
        <Body />
        <Footer />
      </Grid>
    );
  }
}


export default MainContainer;
