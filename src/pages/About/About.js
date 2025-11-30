import React from 'react';
import styles from './About.module.css';

// 1. Import Framer Motion
import { motion } from 'framer-motion';

// Import icon và ảnh
import { FaDownload } from 'react-icons/fa';
import aboutImage from '../../assets/images/about-image.jpg'; // Đảm bảo đường dẫn đúng

function About() {
  
  // 2. Định nghĩa các biến hiệu ứng (Variants)
  // Hiệu ứng cho văn bản: Bay từ dưới lên và mờ dần
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Hiệu ứng cho container: Giúp các con xuất hiện lần lượt (stagger)
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Mỗi phần tử con cách nhau 0.2s
      }
    }
  };

  // Hiệu ứng cho hình ảnh: Bay từ phải sang
  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className={styles.about}>
      {/* Container chính sử dụng motion */}
      <motion.div 
        className={styles.container}
        variants={containerVariant}
        initial="hidden"
        whileInView="visible" // Animation chạy khi cuộn tới
        viewport={{ once: true, amount: 0.3 }} // Chỉ chạy 1 lần
      >

        {/* === Cột Bên Trái: Văn Bản === */}
        <div className={styles.textColumn}>
          
          <motion.h2 className={styles.title} variants={textVariant}>
            About Me
          </motion.h2>
          
          <motion.p className={styles.description} variants={textVariant}>
            I am a passionate engineering student with a focus on innovation and 
            problem-solving. My academic journey has equipped me with strong 
            technical skills and a deep understanding of engineering principles.
          </motion.p>
          
          <motion.h3 className={styles.subTitle} variants={textVariant}>
            My Journey
          </motion.h3>
          
          <motion.p className={styles.description} variants={textVariant}>
            Throughout my academic career, I've been involved in various projects that have 
            helped me develop practical skills and theoretical knowledge. I believe in continuous 
            learning and staying updated with the latest technological advancements.
          </motion.p>
          
          {/* Nút Download CV với hiệu ứng nảy khi hover/click */}
          <motion.div variants={textVariant}>
            <motion.a 
              href="/resume.pdf" 
              download="YourName_Resume.pdf" 
              className={styles.cvButton}
              whileHover={{ scale: 1.05 }} // Phóng to nhẹ khi hover
              whileTap={{ scale: 0.95 }}   // Thu nhỏ nhẹ khi click
            >
              Download CV <FaDownload />
            </motion.a>
          </motion.div>
        </div>

        {/* === Cột Bên Phải: Hình Ảnh === */}
        <motion.div 
          className={styles.imageColumn}
          variants={imageVariant}
        >
          {/* Ảnh có hiệu ứng nghiêng nhẹ khi hover */}
          <motion.img 
            src={aboutImage} 
            alt="Working" 
            className={styles.aboutImage} 
            whileHover={{ 
              scale: 1.03, 
              rotate: 2, 
              boxShadow: "0px 10px 30px rgba(0, 188, 212, 0.3)" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

      </motion.div>
    </section>
  );
}

export default About;