import React from "react";
import logo from "../images/droppe-logo.png";
import styles from "../shopApp.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={["container", styles.headerImageWrapper].join(" ")}>
        <img src={logo} className={styles.headerImage} />
      </div>
    </header>
  );
};
