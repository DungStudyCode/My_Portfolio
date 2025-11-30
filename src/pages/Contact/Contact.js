import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <div className={styles.container}>
        
        {/* === Cột Thông Tin === */}
        <div className={styles.infoColumn}>
          
          <div className={styles.infoItem}>
            <div className={styles.iconBox}><FaEnvelope /></div>
            <div className={styles.infoContent}>
              <h4>Email</h4>
              <p>Dungzero2k5@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}><FaPhoneAlt /></div>
            <div className={styles.infoContent}>
              <h4>Phone</h4>
              <p>(+84) 0818 284 523</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}><FaMapMarkerAlt /></div>
            <div className={styles.infoContent}>
              <h4>Location</h4>
              <p>Da Nang, Vietnam</p>
            </div>
          </div>

        </div>

        {/* === Cột Form Liên Hệ === */}
        <div className={styles.formColumn}>
          <form>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Name</label>
              <input type="text" className={styles.input} placeholder="Enter your name" required />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input type="email" className={styles.input} placeholder="Enter your email" required />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Subject</label>
              <input type="text" className={styles.input} placeholder="Subject of message" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea className={styles.textarea} placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;