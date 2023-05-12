import React from "react";
import classes from "./NavBar.module.scss";
import Title from "../title/Title";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  selected: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const navigate = useNavigate();
  const { selected } = props;

  const handleOnClick = (path: string) => navigate(`${path}`);

  return (
    <div className={classes.navbar_container}>
      <div className={classes.menu_container}>
        <div className={classes.name_container}>
          <Title
            text="Lee, Wen-Chien"
            fontSize="small"
            fontWeight="bold"
            color="white"
          />
        </div>
        <div className={classes.menu_item_container}>
          <div
            className={`${classes.menu_item} ${
              selected === "/" && classes.menu_item_selected
            }`}
            onClick={() => handleOnClick("/")}
          >
            <Title
              text="Info"
              fontSize="small"
              fontWeight="bold"
              color="white"
            />
          </div>
          <div
            className={`${classes.menu_item} ${
              selected === "/cv" && classes.menu_item_selected
            }`}
            onClick={() => handleOnClick("/cv")}
          >
            <Title text="CV" fontSize="small" fontWeight="bold" color="white" />
          </div>
          <div
            className={`${classes.menu_item} ${
              selected === "/publications" && classes.menu_item_selected
            }`}
            onClick={() => handleOnClick("/publications")}
          >
            <Title
              text="Publication"
              fontSize="small"
              fontWeight="bold"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
