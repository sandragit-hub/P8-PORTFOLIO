import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ProjectModal = ({ project, closeModal }) => {
    if (!project) return null;

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            contentLabel="Détails du projet"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2>{project.title}</h2>
            <p>{project.descriptionModal}</p>
            <div className="tags">
                {project.tag && project.tag.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <a
                href={project.codeSource}
                target="_blank"
                rel="noopener noreferrer"
                className="source-btn" >
                Code Source
            </a>

        </Modal>
    );
};

export default ProjectModal;
