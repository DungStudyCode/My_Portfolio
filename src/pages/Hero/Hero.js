import React, { useCallback } from 'react';
import styles from './Hero.module.css'; // Đảm bảo đường dẫn này đúng

// 1. Import Link từ React Router
import { Link } from 'react-router-dom';
// Import thư viện nền
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// 2. Import các section bạn muốn thêm vào trang chủ
// (Hãy chắc chắn đường dẫn này đúng, 
// ví dụ: '../../pages/Projects/Projects' hoặc '../../sections/Projects/Projects'
// tùy thuộc vào việc bạn đã đổi tên thư mục 'sections' thành 'pages' chưa)
import Projects from '../Projects/Projects'; // Giả sử bạn đã đổi tên thành /pages
import Skills from '../Skills/Skills';     // Giả sử bạn đã đổi tên thành /pages


function Hero() {
  // Hàm này là bắt buộc để tải engine
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    // Dùng Fragment để bọc nhiều section
    <>
      {/* === PHẦN 1: HERO (Với nội dung mới của bạn) === */}
      <section id="home" className={styles.heroContainer}>
        
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig} 
          className={styles.particles}
        />

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
            {/* 3. SỬA THÀNH <Link> CỦA ROUTER */}
            <Link to="/projects" className={styles.primaryButton}>
              View Projects <span>&rarr;</span>
            </Link>
            
            <a 
              href="/resume.pdf" // File này phải nằm trong thư mục /public
              download="Dung_Portfolio_Resume.pdf" 
              className={styles.secondaryButton}
            >
              Download CV <span>&#x21E9;</span>
            </a>
          </div>
        </div>
      </section>

      {/* === PHẦN 2: THÊM NỘI DUNG ĐỂ TRANG DÀI HƠN === */}
      {/* (Bọc trong 1 div để đảm bảo nền tối) */}
      <div style={{ backgroundColor: '#121212' }}>
        <Projects />
        <Skills />
        {/* Bạn có thể thêm <Experience /> ở đây nếu muốn */}
      </div>
    </>
  );
}

// CẤU HÌNH CHO HIỆU ỨNG NỀN
const particlesConfig = {
  background: {
    color: {
      value: "#1a1a2e", // Màu nền
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: { // Đây là các đường nối
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1, // Tốc độ di chuyển
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80, // Số lượng hạt
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle", // Hình dạng hạt
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default Hero;