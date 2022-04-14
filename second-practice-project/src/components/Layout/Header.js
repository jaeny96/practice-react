import { Fragment } from "react";

import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals.jpeg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
