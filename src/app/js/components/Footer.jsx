import React from "react";

import { Grid } from "@material-ui/core";
import FooterList from "./FooterList";
require('../../style/FooterStyle.scss')

const itemList = [
  {
    title: "Policy Information",
    list: [{ link: "Privacy Policy" }, { link: "Terms & Conditions" }]
  },
  {
    title: "Get To Know Us",
    list: [{ link: "About Us" }, { link: "Contact Us" }]
  },
  {
    title: "Stay Connected",
    list: [{ link: "info@chapter247.com" }, { link: "follow on instagram" }]
  }
];

const Footer = () => {
  return (
    <Grid
      className="footer-container"
      container
    >
      {itemList.map(item => (
        <FooterList title={item.title} list={item.list} />
      ))}
    </Grid>
  );
};

export default Footer;
