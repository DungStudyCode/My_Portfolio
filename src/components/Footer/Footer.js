import React from 'react';
import styles from './Footer.module.css';
// Import các icon bạn muốn dùng
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Tên hoặc Logo của bạn */}
        <div className={styles.logo}>
          Dũng<span> StudyCode</span>
        </div>

        {/* Danh sách Social Icons */}
        <div className={styles.socialIcons}>
          
          <a href="https://web.facebook.com/nguyen.tien.dung.156492" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaFacebookF />
          </a>

          <a href="http://github.com/DungStudyCode" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/dung-nguyen-tien-77aba1358/" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaLinkedinIn />
          </a>

          <a href="https://www.instagram.com/dung01232005/" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaInstagram />
          </a>

          <a href="https://www.tiktok.com/@ntd_205cs" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaTiktok />
          </a>


        </div>

        {/* Dòng bản quyền */}
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Nguyễn Tiến Dũng. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;