import React from 'react';
import styles from './Education.module.css';

// 1. Import các icon cần thiết
import { FaMapMarkerAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';

// 2. TẠO DỮ LIỆU HỌC VẤN
const educationData = [
  {
    degree: "Bachelor of Science",
    major: "Computer Science",
    university: "Duy Tan University",
    date: "2023 - Present",
    gpa: "3.2/4.0", // Bạn có thể sửa điểm số thực tế
    achievements: [
      "Academic Scholarship for excellent performance (2023-2024)",
      "Active member of the university's IT Club",
      "Participated in Student Scientific Research projects"
    ]
  },
  {
    degree: "Professional Certificate",
    major: "Artificial Intelligence (AI)",
    university: "Samsung Innovation Campus (SIC)",
    date: "2024",
    gpa: "Excellent", // Hoặc để trống "" nếu không muốn hiện
    achievements: [
      "Mastered Python programming for Data Science and Machine Learning",
      "Completed a Capstone Project on Predictive Analysis",
      "Top 10 performing students in the course"
    ]
  }
];

function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.title}>Education</h2>
      <p className={styles.subtitle}>
        My academic journey and certifications that shape my technical foundation.
      </p>

      {/* 3. Render dữ liệu */}
      <div className={styles.container}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.card}>
            
            {/* Phần Header của thẻ */}
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.major}>{edu.major}</p>
              </div>
              {/* Chỉ hiện GPA nếu có dữ liệu */}
              {edu.gpa && (
                <span className={styles.gpa}>
                  {/* Nếu gpa là số thì hiện chữ GPA, nếu là chữ (Excellent) thì hiện Grade */}
                  {isNaN(edu.gpa[0]) ? "Grade: " : "GPA: "} 
                  {edu.gpa}
                </span>
              )}
            </div>

            {/* Phần thông tin chi tiết (icon + text) */}
            <div className={styles.details}>
              <span><FaMapMarkerAlt /> {edu.university}</span>
              <span><FaCalendarAlt /> {edu.date}</span>
            </div>

            {/* Phần thành tích */}
            <div className={styles.achievements}>
              <h4>Achievements</h4>
              <ul>
                {edu.achievements.map((ach, i) => (
                  <li key={i}>
                    <FaAward className={styles.awardIcon} /> {ach}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;