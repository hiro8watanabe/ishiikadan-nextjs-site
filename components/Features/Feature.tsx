import Image from "next/image";
import React from "react";
import { PrimaryBtn } from "../Button/PrimaryBtn";
import styles from "./Feature.module.scss";

const Feature = () => {
  return (
    <section className={styles.service}>
      <div className={styles.container}>
        <figure
          className={styles.imgWrap}
          data-aos="fade"
          data-aos-duration="2000"
        >
          <Image
            src="/images/oheya-top.png"
            alt="お部屋の画像"
            width={862}
            height={448}
            priority={true}
            placeholder="blur"
            blurDataURL={"/images/oheya-top.png"}
            className={styles.img}
          />
        </figure>
        <div
          className={styles.textWrap}
          data-aos="fade"
          data-aos-duration="2000"
        >
          <div className={styles.title}>
            喧騒から離れた空間
            <br />
            心落ち着く至極のひととき
          </div>
          <p className={styles.text}>
            まるで時が止まったかのような、圧倒的な静寂のなかで、
            <br />
            ひたすらにゆったりと…。
            <br />
            最高級の「何もしない時間」をお過ごしください。
          </p>
          {/* <a href="">
            <span>お部屋について</span>
          </a> */}
          <PrimaryBtn text={"お部屋について"} slug={"/room"} />
        </div>
      </div>
      <div className={`${styles.service} ${styles.containerRev}`}>
        <figure
          className={`${styles.imgWrap} ${styles.imgWrapRev}`}
          data-aos="fade"
          data-aos-duration="2000"
        >
          <Image
            src="/images/menu-top.png"
            alt="料理の画像"
            width={862}
            height={448}
            priority={true}
            placeholder="blur"
            blurDataURL={"/images/menu-top.png"}
            className={styles.img}
          />
        </figure>
        <div
          className={styles.textWrap}
          data-aos="fade"
          data-aos-duration="2000"
        >
          <div className={styles.title}>
            出迎えるのは
            <br />
            極上の温海料理
          </div>
          <p className={styles.text}>
            最も旬の食材を愉しむ、最高の贅沢を
            <br />
            最高級A5ランクの米沢牛と共に頂く。
            <br />
            あなたの人生史に残る「極上の感動」を
            <br />
            お約束します。
          </p>
          <PrimaryBtn text={"料理について"} slug={"/food"} />
        </div>
      </div>
      <div className={styles.container}>
        <figure
          className={styles.imgWrap}
          data-aos="fade"
          data-aos-duration="2000"
        >
          <Image
            src="/images/onsen-top.png"
            alt="温泉の画像"
            width={862}
            height={448}
            priority={true}
            placeholder="blur"
            blurDataURL={"/images/onsen-top.png"}
            className={styles.img}
          />
        </figure>
        <div
          className={styles.textWrap}
          data-aos="fade"
          data-aos-duration="2000"
        >
          <div className={styles.title}>
            疲れ切った身体にやすらぎを
            <br />
            温海の源泉に癒やされて
          </div>
          <p className={styles.text}>
            古くは弘法大師の病をも治療したと言われる熱海の泉質。
            <br />
            現代人の疲弊しきった身体を修復する最高級の湯治場として
            <br />
            ご活用ください。
          </p>
          <PrimaryBtn text={"温泉について"} slug={"/onsen"} />
        </div>
      </div>
    </section>
  );
};

export default Feature;
