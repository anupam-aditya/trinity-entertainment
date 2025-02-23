import React, { useState } from "react";
import styles from "./RelatedWork.module.css";

const RelatedWork = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={styles.relatedWork}>
      <h2 className={styles.heading}>{projects?.heading}</h2>
      <div className={styles.grid}>
        {projects?.data?.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <MediaModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.media}>
        <img src={project.media.url} alt={project.title} />
        {project.media.type === "video" && (
          <div className={styles.playButton}>▶</div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>
      </div>
    </div>
  );
};

const MediaModal = ({ project, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <div className={styles.mediaContainer}>
          {project.media.type === "image" ? (
            <img src={project.media.url} alt={project.title} />
          ) : (
            <iframe
              src={project.media.embedUrl}
              title={project.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <p className={styles.fullDescription}>{project.fullDescription}</p>
      </div>
    </div>
  );
};

export default RelatedWork;
