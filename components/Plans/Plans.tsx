import React from "react";
import styles from "./Plans.module.scss";
import Image from "next/image";

export const Plans = () => {
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
          <h2 className={styles.sectionTitle}>おすすめご宿泊プラン</h2>
        </div>

        <div className={styles.cardRow}>
          <a href="#" className={styles.cardLink}>
            <div className={styles.card}>
              <Image
                src="/images/recommended01@2x.png"
                alt=""
                className={styles.cardImg}
                width={660}
                height={416}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>
                  朝食付きプラン、日本近海で取れた のどぐろを朝食として…
                </h2>
                <p className={styles.cardText}>
                  最高級と称されるのどぐろ、正式には「アカ
                  ムツ」と呼ばれる魚、味は独特の上品な味わ
                  いで、焼いても煮ても美味
                </p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.cardLink}>
            <div className={styles.card}>
              <Image
                src="/images/recommended02@2x.png"
                alt=""
                className={styles.cardImg}
                width={660}
                height={416}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>
                  【期間限定】温海蟹をたっぷりと 愉しむプラン。
                </h2>
                <p className={styles.cardText}>
                  温海で水揚げされた蟹は「温海蟹」
                  として知られ、嗜好品として愛されて
                  きました。この宿泊プランでは存分に
                </p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.cardLink}>
            <div className={styles.card}>
              <Image
                src="/images/recommended03@2x.png"
                alt=""
                className={styles.cardImg}
                width={660}
                height={416}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>
                  【平日限定】贅沢美味懐石プラン。 海辺の四季旬彩プラン。
                </h2>
                <p className={styles.cardText}>
                  温海近海で取れた魚を鮮度そのままに舟盛りに
                  してご提供。生きた味をお楽しみください。
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
