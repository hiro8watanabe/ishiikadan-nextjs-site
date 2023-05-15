import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CtaBtn } from "../Button/CtaBtn";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/top-header-logo@2x.png"
            alt="ロゴ"
            width={200}
            height={40}
            priority={true}
            placeholder="blur"
            blurDataURL={"/images/top-header-logo@2x.png"}
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.lists}>
            <li className={styles.list}>
              <Link href="/room">お部屋</Link>
            </li>
            <li className={styles.list}>
              <Link href="/food">お料理</Link>
            </li>
            <li className={styles.list}>
              <Link href="/onsen">温泉</Link>
            </li>
            <li className={styles.list}>
              <CtaBtn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
