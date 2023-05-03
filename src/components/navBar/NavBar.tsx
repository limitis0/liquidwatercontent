import React from "react";
import classes from "./NavBar.module.scss";
import Title from "../title/Title";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div className={classes.navbar_container}>
      <div className={classes.menu_container}>
        <div className={classes.name_container}>
          <Title text="Lee, Wen-Chien" fontSize="small" fontWeight="bold" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
