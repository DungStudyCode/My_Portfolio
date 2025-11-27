import React from 'react';
import styles from './Education.module.css';

// 1. Import các icon cần thiết
import { FaMapMarkerAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';

// 2. TẠO DỮ LIỆU HỌC VẤN
// Bạn có thể dễ dàng cập nhật thông tin của mình ở đây
const educationData = [
  {
    degree: "",
    major: "",
    university: "",
    date: "",
    gpa: "",
    achievements: [
      "",
      "",
      ""
    ]
  },
  {
    degree: "",
    major: "",
    university: "",
    date: "",
    gpa: "",
    achievements: [
      "",
      "",
      ""
    ]
  }
];

function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.title}>Education</h2>
      <p className={styles.subtitle}>
        My academic journey and achievements in the field of engineering.
      </p>

      {/* 3. Dùng .map() để render các thẻ từ dữ liệu */}
      <div className={styles.container}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.card}>
            
            {/* Phần Header của thẻ */}
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.major}>{edu.major}</p>
              </div>
              <span className={styles.gpa}>GPA: {edu.gpa}</span>
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