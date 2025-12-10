import React from "react";
import styles from "./Skills.module.css";

// 1. IMPORT CÁC ICON MỚI
// Note: FaGlobeAsia has been renamed to FaEarthAsia in FA6
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJava,
  FaFlagUsa,
  FaEarthAsia, // UPDATED HERE
} from "react-icons/fa6";

import {
  SiTensorflow,
  SiFlask,
  // SiTailwindcss,
  SiMongodb,
  // SiFirebase,
  SiCplusplus,
  SiBootstrap,
  SiSass,
  // SiTypescript,
  SiRedux,
  SiPytorch,
  SiOpencv,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiPostman,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { AiOutlineDotNet } from "react-icons/ai";

// 2. CẬP NHẬT DỮ LIỆU SKILLS
const skillsData = [
  // --- NHÓM 1: FRONTEND ---
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      // { name: "TypeScript", icon: <SiTypescript /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      // { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "SASS/SCSS", icon: <SiSass /> },
    ],
  },

  // --- NHÓM 2: BACKEND & AI ---
  {
    category: "Backend & AI",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: ".NET", icon: <AiOutlineDotNet /> },
    ],
  },

  // --- NHÓM 3: DATABASE & TOOLS ---
  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      // { name: "Firebase", icon: <SiFirebase /> },
      { name: "Git / GitHub", icon: <FaGitAlt /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Visua Studio Code", icon: <BiLogoVisualStudio /> }, 
      { name: "Visual Studio", icon: <DiVisualstudio /> },
    ],
  },

  // --- NHÓM 4: NGÔN NGỮ (LANGUAGES) ---
  {
    category: "Languages",
    items: [
      {
        name: "English (TOEIC 550)",
        icon: <FaFlagUsa style={{ color: "#d63031" }} />,
      },
      {
        name: "Chinese (HSK 1)",
        // UPDATED HERE: Used FaEarthAsia
        icon: <FaEarthAsia style={{ color: "#0984e3" }} />,
      },
      {
        name: "Vietnamese (Native)",
        icon: (
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>VN</span>
        ),
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        <p className={styles.subtitle}>
          The technologies, tools, and languages I am proficient in.
        </p>

        {skillsData.map((grp, grpIndex) => (
          <div key={grpIndex} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{grp.category}</h3>

            <div className={styles.grid}>
              {grp.items.map((skill, index) => (
                <div
                  key={index}
                  className={styles.skillCard}
                  style={{ animationDelay: `${(grpIndex * 2 + index) * 0.1}s` }}
                >
                  <div className={styles.iconWrapper}>{skill.icon}</div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
