import Image from "next/image";
import React from "react";
import styles from "./News.module.scss";

export const News = () => {
  return (
    <section className={styles.plans}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <Image
            src="/images/logo02@2x.png"
            alt="ロゴ"
            width={40}
            height={40}
            placeholder="blur"
            blurDataURL={"/images/logo02@2x.png"}
            className={styles.sectionLogo}
          />
          <h2 className={styles.sectionTitle}>お知らせ</h2>
          <div className={styles.tab}>
            <ul className={styles.tab}>
              <li className={styles.tab}>営業情報</li>
              <li className={styles.tab}>その他</li>
            </ul>
          </div>
        </div>

        <div className={styles.cardRow}></div>
      </div>
    </section>
  );
};
