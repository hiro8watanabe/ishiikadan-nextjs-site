import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CtaBtn } from "../Button/CtaBtn";
import { MarginLeft } from "../Utils/MarginLeft";
import { Spacer } from "../Utils/Spacer";

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

        <nav>
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
          </ul>
        </nav>
        {/* <Spacer axis="horizontal" size={1} style={20}/> */}
        {/* <MarginLeft spacer={"MarginLeftAuto"} /> */}
        {/* <CtaBtn spacer={styles.marginLeftAuto} /> */}
        <span className={styles.mlAuto}>
          <CtaBtn />
        </span>
      </div>
    </header>
  );
};
