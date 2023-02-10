import React from "react";
import styles from "./CtaBtn.module.scss";

export const CtaBtn: React.FC<{
  // style?: React.CSSProperties;
  // spacer: string | number;
}> = () => {
  return (
    <button
      id="modal__open"
      className={styles.ctaBtn}
      data-micromodal-trigger="modal-1"
    >
      宿泊予約
    </button>
  );
};
