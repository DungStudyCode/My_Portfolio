// src/components/Header/Header.js
import React, { useState, useEffect } from 'react'; // 1. Import thêm useState, useEffect
import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  // 2. Tạo state để theo dõi trạng thái cuộn
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Thêm "lắng nghe sự kiện" khi component được tải
  useEffect(() => {
    const handleScroll = () => {
      // Nếu cuộn qua 50px, đặt state là true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Thêm event listener
    window.addEventListener('scroll', handleScroll);

    // Rất quan trọng: Gỡ bỏ event listener khi component bị "hủy"
    // để tránh rò rỉ bộ nhớ (memory leak)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] nghĩa là effect này chỉ chạy 1 lần lúc đầu

  // 4. Thêm class 'scrolled' một cách có điều kiện
  const headerClassName = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClassName}> {/* 5. Sử dụng class động */}
      <Link to="/" className={styles.logo}>Portfolio</Link>

      <nav className={styles.nav}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link to="/contact" className={styles.contactButton}>Contact Me</Link>
    </header>
  );
}

export default Header;