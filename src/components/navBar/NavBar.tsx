import React, { useState } from "react";
import classes from "./NavBar.module.scss";
import Title from "../title/Title";
import { useNavigate } from "react-router-dom";
import Content from "../content/Content";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

interface NavBarProps {
  selected: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const navigate = useNavigate();
  const { selected } = props;
  const [menuToggle, setMenuToggle] = useState(false);

  const handleOnClick = (path: string) => navigate(`${path}`);

  const handleMenuToggle = () => setMenuToggle(!menuToggle);

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
      <div className={classes.contact_container}>
        <div className={classes.email_icon_container}>
          <EmailOutlinedIcon className={classes.email_icon} />
        </div>
        <Content
          text="Email: liquidwatercontent@gmail.com"
          fontSize="small"
          fontWeight="regular"
          color="white"
          textAlign="start"
        />
      </div>

      {/* phone size */}
      <div
        className={classes.sandwitch_container}
        onClick={() => handleMenuToggle()}
      >
        {menuToggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
              fill="#EEEFE9"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
              fill="#EEEFE9"
            />
          </svg>
        )}
        {menuToggle && (
          <div className={classes.toggleMenu}>
            <div
              className={`${classes.menu_item} ${
                selected === "/" && classes.menu_item_selected
              }`}
              onClick={() => handleOnClick("/")}
            >
              <Title
                text="Info"
                fontSize="small"
                fontWeight="regular"
                color="white"
              />
            </div>
            <div
              className={`${classes.menu_item} ${
                selected === "/cv" && classes.menu_item_selected
              }`}
              onClick={() => handleOnClick("/cv")}
            >
              <Title
                text="CV"
                fontSize="small"
                fontWeight="regular"
                color="white"
              />
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
                fontWeight="regular"
                color="white"
              />
            </div>
            <div className={classes.contact_container}>
              <div className={classes.email_icon_container}>
                <EmailOutlinedIcon className={classes.email_icon} />
              </div>
              <Content
                text="Email: liquidwatercontent@gmail.com"
                fontSize="small"
                fontWeight="regular"
                color="white"
                textAlign="start"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
