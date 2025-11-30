import React from 'react';
import styles from './Footer.module.css';
// Import các icon bạn muốn dùng
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6"; 

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
          
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaFacebookF />
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaGithub />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaLinkedinIn />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <FaInstagram />
          </a>

        </div>

        {/* Dòng bản quyền */}
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;