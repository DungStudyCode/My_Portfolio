import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icon menu

// Import ảnh logo của bạn (Hãy thay đường dẫn đúng với ảnh của bạn)
// Nếu chưa có ảnh, bạn có thể dùng tạm link online trong thẻ img bên dưới
import logoImg from '../../assets/images/logo.jpg'; 

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 1. State quản lý đóng/mở menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  // 2. Hàm bật tắt menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 3. Hàm đóng menu khi click vào link (UX tốt hơn)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={headerClassName}>
      
      {/* 4. LOGO ẢNH CÓ ANIMATION */}
      <Link to="/" className={styles.logoWrapper} onClick={closeMobileMenu}>
        <img src={logoImg} alt="Logo" className={styles.logoImage} />
      </Link>

      {/* 5. MENU DESKTOP (Ẩn trên mobile qua CSS) */}
      <nav className={styles.navDesktop}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* 6. NÚT LIÊN HỆ (Ẩn trên mobile nếu muốn gọn) */}
      <div className={styles.desktopBtn}>
         <Link to="/contact" className={styles.contactButton}>Contact Me</Link>
      </div>

      {/* 7. NÚT HAMBURGER (Chỉ hiện trên mobile) */}
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* 8. MENU MOBILE OVERLAY */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.active : ''}`}>
        <nav className={styles.mobileNavLinks}>
            <NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
            <NavLink to="/education" onClick={closeMobileMenu}>Education</NavLink>
            <NavLink to="/skills" onClick={closeMobileMenu}>Skills</NavLink>
            <NavLink to="/experience" onClick={closeMobileMenu}>Experience</NavLink>
            <NavLink to="/projects" onClick={closeMobileMenu}>Projects</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
            
            {/* Nút contact trong menu mobile */}
            <Link to="/contact" className={styles.contactButtonMobile} onClick={closeMobileMenu}>
                Contact Me
            </Link>
        </nav>
      </div>

    </header>
  );
}

export default Header;  