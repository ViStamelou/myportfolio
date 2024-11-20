import React from "react";

import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vasiliki</h1>
                <p className={styles.description}>Code meets creativity: I'm a Web Developer and UX Designer crafting experiences that spark joy and innovation. Every pixel, every line of code is a step in building the digital future. Let’s make something amazing together!</p>
                <a href="mailto:vasilikist.97@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img 
              src={getImageUrl("hero/heroImage.png")} 
              alt="My Avatar" 
              className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};