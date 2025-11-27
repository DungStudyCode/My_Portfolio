import React from 'react';
import styles from './Projects.module.css';

// 1. Import các icon cần thiết
import { FaGithub, FaLink } from 'react-icons/fa';

// 2. Import hình ảnh thumbnail cho dự án
// Đảm bảo bạn đã đặt ảnh vào src/assets/images/
import smartHomeThumbnail from '../../assets/images/smart-home.jpg';
import structuralSoftwareThumbnail from '../../assets/images/structural-software.jpg';
import renewableEnergyThumbnail from '../../assets/images/renewable-energy.jpg';

// 3. TẠO DỮ LIỆU DỰ ÁN
const projectsData = [
  {
    image: smartHomeThumbnail,
    title: "",
    description: "",
    technologies: ["", "", "", ""],
    demoLink: "#", // Thay bằng link demo thực tế
    repoLink: "#"  // Thay bằng link GitHub repo thực tế
  },
  {
    image: structuralSoftwareThumbnail,
    title: "",
    description: "",
    technologies: ["", "", "", ""],
    demoLink: "#",
    repoLink: "#"
  },
  {
    image: renewableEnergyThumbnail,
    title: "",
    description: "",
    technologies: ["", "", ""],
    demoLink: "#",
    repoLink: "#"
  }
];

// Component riêng cho mỗi Project Card
const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        
        <div className={styles.technologies}>
          {project.technologies.map((tech, i) => (
            <span key={i} className={styles.techTag}>{tech}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <FaLink /> Demo
          </a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <FaGithub /> Repo
          </a>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.subtitle}>
        A showcase of my engineering projects, demonstrating practical application of 
        skills and innovative problem-solving.
      </p>

      {/* 4. Dùng CSS Grid để tạo bố cục 3 cột */}
      <div className={styles.gridContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;