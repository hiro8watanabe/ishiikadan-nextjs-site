import React from "react";
import styles from "./PrimaryBtn.module.scss";

export const PrimaryBtn: React.FC<{ text: string; slug: string }> = ({
  text,
  slug,
}) => {
  return (
    <a href={slug} className={`${styles.primaryBtn} ${styles.primaryBtnAnime}`}>
      <span>{text}</span>
    </a>
  );
};
