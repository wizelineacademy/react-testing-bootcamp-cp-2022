import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const headerText = "Astronomy Picture of the Day";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{headerText}</h2>
    </div>
  );
};

export default Header;
