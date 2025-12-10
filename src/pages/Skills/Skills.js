import React from 'react';
import styles from './Skills.module.css';

// Import các Icon cần thiết (Bạn có thể thêm bớt tùy ý)
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava 
} from "react-icons/fa6";
import { SiTensorflow, SiFlask, SiTailwindcss, SiMongodb, SiFirebase, SiCplusplus } from "react-icons/si";

// Dữ liệu Skills chia theo nhóm
const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ]
  },
  {
    category: "Backend & AI",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
    ]
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Git / GitHub", icon: <FaGitAlt /> },
    ]
  }
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        <p className={styles.subtitle}>The technologies and tools I use to build my projects.</p>

        {/* Lặp qua từng nhóm Category */}
        {skillsData.map((grp, grpIndex) => (
          <div key={grpIndex} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{grp.category}</h3>
            
            <div className={styles.grid}>
              {grp.items.map((skill, index) => (
                <div 
                  key={index} 
                  className={styles.skillCard}
                  // Tính toán delay: Mỗi thẻ hiện chậm hơn thẻ trước 0.1s
                  // Cộng dồn với grpIndex để các nhóm sau xuất hiện sau nhóm trước
                  style={{ animationDelay: `${(grpIndex * 2 + index) * 0.1}s` }}
                >
                  <div className={styles.iconWrapper}>
                    {skill.icon}
                  </div>
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