import React from 'react';
import styles from './Skills.module.css';

// 1. Import các icon cần thiết
import { FaTools, FaCode, FaBrain, FaLanguage } from 'react-icons/fa';

// 2. ĐỊNH NGHĨA DỮ LIỆU KỸ NĂNG
// Cập nhật các kỹ năng và điểm số của bạn ở đây
const skillCategories = [
  {
    title: "Technical Skills",
    icon: <FaTools />,
    skills: [
      { name: "", level: 0 },
      { name: "", level: 8 },
      { name: "", level: 7 },
      { name: "", level: 8 },
      { name: "", level: 6 },
    ]
  },
  {
    title: "Software Proficiency",
    icon: <FaCode />,
    skills: [
      { name: "", level: 9 },
      { name: "", level: 8 },
      { name: "", level: 9 },
      { name: "", level: 7 },
      { name: "", level: 6 },
      { name: "", level: 8 },
    ]
  },
  {
    title: "Soft Skills",
    icon: <FaBrain />,
    skills: [
      { name: "", level: 9 },
      { name: "", level: 8 },
      { name: "", level: 7 },
      { name: "", level: 8 },
      { name: "", level: 7 },
    ]
  },
  {
    title: "Languages",
    icon: <FaLanguage />,
    skills: [
      { name: "English", level: 5.5 },
      { name: "China", level: 1 },
    ]
  }
];

// Component cho thanh tiến trình (Progress Bar)
const SkillBar = ({ skill }) => {
  const progressPercentage = (skill.level / 10) * 100;
  return (
    <div className={styles.skillItem}>
      <span className={styles.skillName}>{skill.name}</span>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${progressPercentage}%` }} // Style động
        ></div>
      </div>
      <span className={styles.skillScore}>{skill.level}/10</span>
    </div>
  );
};


function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills & Expertise</h2>
      <p className={styles.subtitle}>
        A comprehensive overview of my technical abilities, software proficiency, soft skills, and language capabilities.
      </p>

      {/* 3. Dùng CSS Grid để tạo bố cục 2x2 */}
      <div className={styles.gridContainer}>
        {skillCategories.map((category, index) => (
          
          <div key={index} className={styles.skillCard}>
            {/* Tiêu đề thẻ (Icon + Title) */}
            <h3 className={styles.cardTitle}>
              <span className={styles.icon}>{category.icon}</span>
              {category.title}
            </h3>

            {/* Danh sách kỹ năng */}
            <div className={styles.skillsList}>
              {category.skills.map((skill, i) => (
                <SkillBar key={i} skill={skill} />
              ))}
            </div>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Skills;