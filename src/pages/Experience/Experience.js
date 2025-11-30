import React from 'react';
import styles from './Experience.module.css';
import { FaBriefcase,FaCalendarAlt } from 'react-icons/fa';

const experienceData = [
  {
    role: "",
    company: "",
    date: "",
    description: "",
    skills: ["React", "Redux", "Tailwind"]
  },
  {
    role: "",
    company: "",
    date: "",
    description: "",
    skills: ["HTML/CSS", "JavaScript", "Git"]
  },
  // Thêm các mục khác ở đây
];

// ... (các phần import giữ nguyên)

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.title}>Work Experience</h2>
      <p className={styles.sectionIntro}>
        My experience in building responsive, scalable, and user-focused web applications using modern web technologies.
      </p>
      <div className={styles.timeline}>
        {experienceData.map((item, index) => (
          <div 
            key={index} 
            className={styles.timelineItem}
            style={{ animationDelay: `${index * 0.2}s` }} 
          >
            <div className={styles.dot}></div>

            <div className={styles.content}>
              <div className={styles.header}>
                {/* --- SỬA Ở ĐÂY: Thêm FaBriefcase vào trước item.role --- */}
                <h3 className={styles.role}>
                  <FaBriefcase style={{ marginRight: '8px', fontSize: '0.9em' }} /> 
                  {item.role}
                </h3>
                {/* -------------------------------------------------------- */}
                
                <span className={styles.company}>{item.company}</span>
              </div>
              
              <div className={styles.date}>
                <FaCalendarAlt /> {item.date}
              </div>
              
              <p className={styles.description}>{item.description}</p>
              
              <div className={styles.tags}>
                {item.skills.map((skill, i) => (
                  <span key={i} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;