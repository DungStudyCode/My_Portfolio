import React from 'react';
import styles from './Footer.module.css';
// 1. Import Link từ react-router-dom để điều hướng nội bộ mượt mà
import { Link } from 'react-router-dom';

// Import các icon
import { FaPhone, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* === Cột 1: Logo & Socials === */}
        <div className={styles.col}>
          {/* Dùng Link thay cho a href */}
          <Link to="/" className={styles.logo}>Portfolio</Link>
          <p className={styles.description}>
            A professional portfolio showcasing my skills, projects, and achievements in engineering.
          </p>
          
          {/* Hàng icon thứ nhất */}
          <div className={styles.socialIcons}>
            <a href="tel:+84123456789" aria-label="Phone"><FaPhone /></a>
            <a href="mailto:email@example.com" aria-label="Email"><FiMail /></a>
            
            {/* Đã thêm target="_blank" và rel="noopener noreferrer" */}
            <a 
              href="https://www.linkedin.com/in/dung-nguyen-tien-77aba1358/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            
            <a 
              href="https://github.com/DungStudyCode" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* Hàng icon thứ hai */}
          <div className={styles.socialIcons}>
            <a 
              href="https://www.facebook.com/nguyen.tien.dung.156492" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* === Cột 2: About === */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>About</h3>
          {/* Cập nhật thành Link để tương thích với Router */}
          <Link to="/about">About Me</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
        </div>

        {/* === Cột 3: Work === */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Work</h3>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          {/* Link tạm thời đến trang chủ nếu chưa có trang certificates */}
          <Link to="/">Certificates</Link> 
        </div>

        {/* === Cột 4: Connect === */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Connect</h3>
          <Link to="/contact">Contact</Link>
          {/* Resume là file tĩnh nên dùng thẻ a bình thường */}
          <a href="/resume.pdf" download="YourName_Resume.pdf">Resume</a>
        </div>

      </div>
      
      {/* === Thanh Dưới Cùng === */}
      <div className={styles.bottomBar}>
        <p>© 2025 Nguyễn Tiến Dũng. All rights reserved.</p>
        <div>
           {/* Placeholder cho Privacy Policy */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;