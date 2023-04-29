import s from "./about.module.css";
import img from "../../assets/profilePic.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import reactIcon from "../../assets/react.png";
import aws from "../../assets/aws.png";
import css from "../../assets/css.png";
import django from "../../assets/django.png";
import docker from "../../assets/docker.png";
import git from "../../assets/git.png";
import html from "../../assets/html.png";
import node from "../../assets/node.png";
import postgres from "../../assets/postgres.png";
import py from "../../assets/py.png";
import ts from "../../assets/ts.png";
import github from "../../assets/gith.png";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div id="about" className={s.main}>
      <div className={s.containerPic}>
        <img src={img} className={s.profile} alt="Profile" />
        <h3 className={s.p}>
          I'm a Full-stack with a remarkable ability to learn and adapt to new
          technologies with ease. My passion for software development drives me
          to continuously seek new challenges and opportunities to grow my skill
          set. With a keen attention to detail and a strong work ethic, I am
          committed to delivering high-quality solutions that meet the needs of
          clients and end-users alike.
        </h3>
      </div>
      <h1 className={s.mainTitle}>Skills</h1>
      <div data-aos="zoom-in" className={s.submain}>
        {skills.map(({ skill, alt }) => {
          return (
            <div className={s.containerSkills}>
              <img src={skill} alt={alt} />
              <span>{alt}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const skills = [
  {
    skill: reactIcon,
    alt: "React",
  },
  {
    skill: node,
    alt: "Node",
  },
  {
    skill: postgres,
    alt: "PostgreSQL",
  },
  {
    skill: ts,
    alt: "Typescript",
  },
  {
    skill: py,
    alt: "Python",
  },
  {
    skill: django,
    alt: "Django",
  },
  {
    skill: docker,
    alt: "Docker",
  },
  {
    skill: aws,
    alt: "AWS",
  },
  {
    skill: html,
    alt: "HTML5",
  },
  {
    skill: css,
    alt: "CSS",
  },
  {
    skill: git,
    alt: "Git",
  },
  {
    skill: github,
    alt: "Github",
  },
];
