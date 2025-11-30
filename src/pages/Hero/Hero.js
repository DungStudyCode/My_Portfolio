import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

// Import các section khác (GIỮ NGUYÊN code cũ của bạn ở phần này)
import Projects from '../Projects/Projects'; 
import Skills from '../Skills/Skills';
// ... import Experience nếu có

function Hero() {
  return (
    <>
      {/* === PHẦN 1: HERO VỚI VIDEO BACKGROUND === */}
      <section id="home" className={styles.heroContainer}>
        
        {/* --- THÊM VIDEO VÀO ĐÂY --- */}
        {/* autoPlay: Tự động chạy
          loop: Lặp lại vô tận
          muted: Tắt tiếng (BẮT BUỘC để trình duyệt cho phép tự động chạy)
          playsInline: Bắt buộc cho iOS Safari
        */}
        <video 
          className={styles.videoBackground} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          {/* Đường dẫn bắt đầu bằng / nghĩa là tìm trong thư mục public */}
          <source src="/video-bg.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ thẻ video.
        </video>

        {/* Lớp phủ tối màu (Overlay) để làm nổi bật chữ */}
        <div className={styles.overlay}></div>


        {/* NỘI DUNG VĂN BẢN (Giữ nguyên) */}
        <div className={styles.content}>
          <h2 className={styles.subTitle}>
            WEB DEVELOPER & AI ENTHUSIAST
          </h2>
          
          <h1 className={styles.title}>
            <span className={styles.gradientText}>Dũng</span>'s Portfolio
          </h1>
          
          <p className={styles.description}>
            Hello! I am a passionate programmer who loves to create products with real value. I have experience working with JavaScript, ReactJS and NodeJS, with the ability to learn quickly and solve problems effectively. My goal is to continuously develop myself to become an expert Fullstack Developer and contribute to impactful projects.
          </p>

          <div className={styles.buttons}>
            <Link to="/projects" className={styles.primaryButton}>
              View Projects <span>&rarr;</span>
            </Link>
            
            <a 
              href="/resume.pdf" 
              download="Dung_Portfolio_Resume.pdf" 
              className={styles.secondaryButton}
            >
              Download CV <span>&#x21E9;</span>
            </a>
          </div>
        </div>
      </section>

      {/* === PHẦN 2: CÁC SECTION KHÁC (Giữ nguyên) === */}
      <div style={{ backgroundColor: '#121212', position: 'relative', zIndex: 2 }}>
        <Projects />
        <Skills />
        {/* <Experience /> */}
      </div>
    </>
  );
}

// Đã xóa bỏ biến particlesConfig ở cuối file vì không còn dùng nữa.

export default Hero;