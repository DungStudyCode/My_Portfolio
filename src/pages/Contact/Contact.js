import React from 'react';
import styles from './Contact.module.css';

// 1. Import các icon cần thiết
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail, FiSend } from 'react-icons/fi'; // FiMail cho email, FiSend cho nút gửi

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.subtitle}>
        Have a question or want to work together? Feel free to reach out!
      </p>

      {/* 2. Container chính chia 2 cột */}
      <div className={styles.container}>
        
        {/* === CỘT TRÁI: THÔNG TIN === */}
        <div className={styles.infoCard}>
          <h3>Contact Information</h3>
          
          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <div>
              <span>0818 284 523</span>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FiMail className={styles.icon} />
            <div>
              <span>dungzero2k5@gmail.com</span>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <span>Đà Nẵng, Việt Nam</span>
            </div>
          </div>
        </div>

        {/* === CỘT PHẢI: FORM === */}
        {/* Để form này hoạt động, hãy dùng dịch vụ như Formspree.
          1. Đăng ký Formspree (miễn phí).
          2. Tạo form mới và lấy ID (ví dụ: "f/xxyyzz").
          3. Thay thế thẻ <form> bằng:
             <form action="https://formspree.io/f/xxyyzz" method="POST" className={styles.form}>
        */}
        <form 
          action="https://formspree.io/f/YOUR_UNIQUE_ID" // <-- THAY ID CỦA BẠN VÀO ĐÂY
          method="POST"
          className={styles.form}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Send Message <FiSend />
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;