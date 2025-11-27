import React from 'react';
import styles from './Footer.module.css';

// Import các icon chúng ta cần từ thư viện 'react-icons'
// 'Fa' là Font Awesome, 'Bs' là Bootstrap Icons, 'Fi' là Feather Icons
import { FaPhone, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
// import { BsTwitter } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi'; // Ví dụ cho Email và Chat

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* === Cột 1: Logo & Socials === */}
        <div className={styles.col}>
          <a href="#home" className={styles.logo}>Portfolio</a>
          <p className={styles.description}>
            A professional portfolio showcasing my skills, projects, and achievements in engineering.
          </p>
          {/* Hàng icon thứ nhất */}
          <div className={styles.socialIcons}>
            <a href="tel:+84123456789" aria-label="Phone"><FaPhone /></a>
            <a href="mailto:email@example.com" aria-label="Email"><FiMail /></a>
            <a href="https://www.linkedin.com/in/dung-nguyen-tien-77aba1358/" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/DungStudyCode" aria-label="GitHub"><FaGithub /></a>
            {/* <a href="#" aria-label="Chat"><FiMessageSquare /></a> */}
            {/* <a href="#" aria-label="Twitter"><BsTwitter /></a> */}
          </div>
          {/* Hàng icon thứ hai */}
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/nguyen.tien.dung.156492" aria-label="Facebook"><FaFacebook /></a>
            {/* <a href="#" aria-label="Instagram"><FaInstagram /></a> */}
          </div>
        </div>

        {/* === Cột 2: About === */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>About</h3>
          <a href="#about">About Me</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
        </div>

        {/* === Cột 3: Work === */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Work</h3>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a> {/* Bạn cần tạo section này sau */}
        </div>

        {/* === Cột 4: Connect === */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Connect</h3>
          {/* <a href="#">Blog</a> Bạn cần tạo trang này sau */}
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" download="YourName_Resume.pdf">Resume</a>
        </div>

      </div>
      
      {/* === Thanh Dưới Cùng === */}
      <div className={styles.bottomBar}>
        <p>© 2025 [Nguyễn Tiến Dũng]. All rights reserved.</p>
        <div>
          {/* <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;