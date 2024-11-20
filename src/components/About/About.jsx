
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me wearing a graduation hat"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              As a Front-End Developer, I bring designs to life with clean, efficient, and user-focused code. My expertise spans <b>HTML, CSS, JavaScript, and TypeScript</b>, and I’ve built dynamic, responsive interfaces using modern frameworks like <b>React and Angular</b>. With a passion for seamless user experiences, I aim to craft websites and applications that are not only visually stunning but also highly functional.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data-Science </h3>
              <p>
              I hold a certificate in <b>Python</b> from the University of Patras, showcasing my foundational knowledge of the language. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UX/UI Designer</h3>
              <p>
              Certified by Google in UX Design, I understand the importance of putting users at the center of every project. My design process involves empathizing with users, crafting intuitive workflows, and ensuring every interaction feels natural and effortless. I believe that great design is more than just aesthetics—it’s about solving real problems and delivering value.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};