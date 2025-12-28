import React from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// 1. IMPORT HÌNH ẢNH
// --- Ảnh Project 1: Portfolio
import portfolioImg from '../../assets/images/portfolio.png'; 

// --- Ảnh Project 2
import techZone from '../../assets/images/techZone.png'; 

// --- Ảnh Project 3: AI Waste Classification
import garbageImg from '../../assets/images/garbageclassification.png'; 

const projectsData = [
  // === PROJECT 1: CHÍNH LÀ PORTFOLIO NÀY ===
  {
    title: "Personal Portfolio Website",
    description: "This very website you are looking at! A fully responsive personal portfolio built with ReactJS, featuring a modern dark theme, smooth CSS animations, and a working contact form integrated with EmailJS.",
    techStack: ["React", "CSS Modules", "EmailJS", "Responsive Design"],
    image: portfolioImg, // Biến ảnh import ở trên
    githubLink: "https://github.com/DungStudyCode/My_Portfolio", // Link tới repo của web này
    demoLink: "https://my-portfolio-xi-woad-15.vercel.app/" // Link demo chính là trang chủ
  },

  // === PROJECT 2: TechZone - E-commerce Web Application ===
  {
    title: "TechZone - E-commerce Web Application",
    description: "A productivity tool to manage tasks with drag-and-drop features, dark mode, and real-time updates.",
    techStack: ["ReactJS", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
    image: techZone,
    githubLink: "https://github.com/DungStudyCode/TechZone-Project",
    demoLink: "https://tech-zone-project.vercel.app/"
  },
  
  // === PROJECT 3: AI WASTE CLASSIFICATION ===
  {
    title: "AI Smart Waste Classification",
    description: "An intelligent system using Deep Learning (MobileNetV2) to classify waste in real-time via Webcam. Features Vietnamese voice feedback using gTTS and a Flask-based API.",
    techStack: ["Python", "TensorFlow", "Flask", "MobileNetV2"], 
    image: garbageImg, 
    githubLink: "https://github.com/DungStudyCode/GarbageClassification",
    demoLink: "https://youtu.be/your-demo-video"
  }
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>
        <p className={styles.subtitle}>Here are some of my recent works</p>

        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ animationDelay: `${index * 0.2}s` }} 
            >
              <div className={styles.imageContainer}>
                {/* Thêm xử lý lỗi nếu ảnh không tải được thì hiện ảnh mặc định */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage} 
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}}
                />
                
                <div className={styles.overlay}>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.btnLink}>
                    <FaGithub /> Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className={styles.btnLink}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;