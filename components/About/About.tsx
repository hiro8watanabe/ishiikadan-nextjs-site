import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.inner}>
        <h2
          className={styles.title}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span className={styles.titleHead}>温海温泉の</span>
          <br />
          美しさに癒やされて
        </h2>
        <div className={styles.textWrap}>
          <p
            className={styles.text}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="300"
          >
            東北の奥座敷である温海温泉郷
            <br />
            開湯は1300年前とされ、役小角が
            <br  />
            発見したと伝えられます
          </p>
          <p
            className={styles.text}
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-offset="350"
          >
            石井花壇は江戸より続く由緒ある旅館で
            <br className={styles.isPc} />
            クラシックな作りの中に大正ロマンあふれる
            <br className={styles.isPc} />
            内装を残しております
          </p>
          <p
            className={styles.text}
            data-aos="fade-up"
            data-aos-duration="2400"
            data-aos-offset="400"
          >
            圧倒的癒やしの空間で
            <br className={styles.isPc} />
            頑張る現代人に
            <br className={styles.isPc} />
            頑張らない圧倒的な非日常をご提供します
          </p>
        </div>
        <p
          className={styles.sign}
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="400"
        >
          石井花壇
        </p>
      </div>
    </section>
  );
};

export default About;
