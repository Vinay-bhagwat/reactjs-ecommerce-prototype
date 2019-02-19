import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const HeaderHamburgerMenu = () => {
  return (
    <IconButton
     
      color="red"
      aria-label="Open drawer"
    >
      <MenuIcon  className="menuButton"/>
    </IconButton>
  );
};
export default HeaderHamburgerMenu;
