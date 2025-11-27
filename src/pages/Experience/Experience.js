import React from 'react';
import styles from './Experience.module.css';

// 1. Import các icon cần thiết
import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

// 2. TẠO DỮ LIỆU KINH NGHIỆM
// Cập nhật kinh nghiệm làm việc của bạn ở đây
const experienceData = [
  {
    title: "",
    company: "",
    location: "",
    date: "",
    responsibilities: [
      "",
      "",
      ""
    ],
    technologies: ["", "", "", ""]
  },
  {
    title: "",
    company: "",
    location: "",
    date: "",
    responsibilities: [
      "",
      "",
      ""
    ],
    technologies: ["", "", "", ""]
  },
  {
    title: "",
    company: "",
    location: "",
    date: "",
    responsibilities: [
      "",
      "",
      ""
    ],
    technologies: ["", "", "", ""]
  }
];

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>Professional Experience</h2>
      <p className={styles.subtitle}>
        My journey through various roles and projects in the engineering field.
      </p>

      {/* 3. Dùng .map() để render các thẻ kinh nghiệm */}
      <div className={styles.container}>
        {experienceData.map((job, index) => (
          <div key={index} className={styles.card}>
            
            {/* Tiêu đề công việc và công ty */}
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <p className={styles.company}>{job.company}</p>

            {/* Thông tin (Vị trí & Ngày tháng) */}
            <div className={styles.info}>
              <span><FaMapMarkerAlt /> {job.location}</span>
              <span><FaCalendarAlt /> {job.date}</span>
            </div>

            {/* Nhiệm vụ chính */}
            <h4 className={styles.subHeading}>Key Responsibilities</h4>
            <ul className={styles.responsibilities}>
              {job.responsibilities.map((task, i) => (
                <li key={i}>
                  <FaCheckCircle className={styles.checkIcon} /> {task}
                </li>
              ))}
            </ul>

            {/* Công nghệ & Công cụ */}
            <h4 className={styles.subHeading}>Technologies & Tools</h4>
            <div className={styles.technologies}>
              {job.technologies.map((tech, i) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;