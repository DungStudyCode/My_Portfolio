import React from 'react';
import styles from './About.module.css';

// 1. Import icon Download từ 'react-icons'
import { FaDownload } from 'react-icons/fa';

// 2. Import hình ảnh của bạn từ thư mục assets
// (Thay đổi 'about-image.jpg' thành tên file thực tế của bạn)
import aboutImage from '../../assets/images/about-image.jpg'; 

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* === Cột Bên Trái: Văn Bản === */}
        <div className={styles.textColumn}>
          <h2 className={styles.title}>About Me</h2>
          
          <p className={styles.description}>
            I am a passionate engineering student with a focus on innovation and 
            problem-solving. My academic journey has equipped me with strong 
            technical skills and a deep understanding of engineering principles.
          </p>
          
          <h3 className={styles.subTitle}>My Journey</h3>
          
          <p className={styles.description}>
            Throughout my academic career, I've been involved in various projects that have 
            helped me develop practical skills and theoretical knowledge. I believe in continuous 
            learning and staying updated with the latest technological advancements.
          </p>
          
          {/* Nút Download CV (giống file ở public/resume.pdf) */}
          <a 
            href="/resume.pdf" 
            download="YourName_Resume.pdf" 
            className={styles.cvButton}
          >
            Download CV <FaDownload />
          </a>
        </div>

        {/* === Cột Bên Phải: Hình Ảnh === */}
        <div className={styles.imageColumn}>
          <img 
            src={aboutImage} 
            alt="Đang làm việc" 
            className={styles.aboutImage} 
          />
        </div>

      </div>
    </section>
  );
}

export default About;