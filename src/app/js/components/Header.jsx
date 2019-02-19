import React from "react";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HeaderLogo from "./HeaderLogo";
import SearchBar from "./SearchBar";
import HeaderHamburgerMenu from "./HeaderHamburgerMenu";
require("../../style/HeaderStyle.scss");

const Header = () => {
  return (
    <Grid lg={12} className="header-container">
      <AppBar color="default" position="static">
        <Toolbar>
          <HeaderLogo title="Logo" />
          <div className='flex-grow'></div>
            <SearchBar />
            <HeaderHamburgerMenu />
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Header;
