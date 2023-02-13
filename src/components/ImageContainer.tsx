import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import styles from "../shopApp.module.css";

export const ImageContainer = () => {
  return (
    <div
      className={["container", styles.main].join(" ")}
      style={{
        margin: "50px auto",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <img src={img1} style={{ maxHeight: "15em" }} />
      <img src={img2} style={{ maxHeight: "15em" }} />
    </div>
  );
};
