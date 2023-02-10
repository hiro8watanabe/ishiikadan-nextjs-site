import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <ul className={styles.lists}>
            <li
              className={styles.list}
              data-aos="fade"
              data-aos-duration="2000"
            >
              <Link href="/room">お部屋</Link>
            </li>
            <li
              className={styles.list}
              data-aos="fade"
              data-aos-duration="2300"
            >
              <Link href="/food">お料理</Link>
            </li>
            <li
              className={styles.list}
              data-aos="fade"
              data-aos-duration="2600"
            >
              <Link href="/onsen">温泉</Link>
            </li>
          </ul>
        </nav>
        <figure
          className={styles.logoWrap}
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-offset="300"
        >
          <Link href="/">
            <Image
              src="/images/footer-logo@2x.png"
              alt="ロゴ"
              width={146}
              height={92}
              priority={true}
              placeholder="blur"
              blurDataURL={"/images/footer-logo@2x.png"}
              className={styles.logoImg}
            />
          </Link>
        </figure>
        <address className={styles.addressWrap}>
          <p className={styles.addressText} data-aos="fade" data-aos-duration="3000">
            <span className={styles.postNum} >〒000-0000</span>
            <span className={styles.address} >山形県鶴岡市xxxxxxxxxxx</span>
          </p>
          <p className={styles.addressText} data-aos="fade" data-aos-duration="3000">
            <span className={styles.tel} >TEL.000-0000-0000</span>
            <span>FAX.00-0000-0000</span>
          </p>
        </address>
      </div>
      <div className={styles.copyWrap} >
        <p className={styles.copy} >Copyright © 石井花壇 All Rights Reserved.</p>
      </div>
    </footer>
  );
};
