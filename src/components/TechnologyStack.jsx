import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TECHNOLOGIES } from '../data/technologies';
import './TechnologyStack.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechnologyDetailModal = ({ technology, isOpen, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!technology) return null;

  return (
    <div 
      className={`tech-modal-overlay ${isOpen ? 'open' : ''}`} 
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className="tech-modal-content" ref={modalRef}>
        <button 
          className="tech-modal-close" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>
        
        <div className="tech-modal-body">
          <div className="tech-modal-header tech-modal-section">
            <div className="tech-modal-category">{technology.category}</div>
            <h2 className="tech-modal-title">
              <img src={technology.logo} alt={technology.name} className="tech-modal-logo-img" /> {technology.name}
            </h2>
            <p className="tech-modal-desc">{technology.shortDescription}</p>
          </div>

          <div className="tech-modal-section">
            <h3 className="tech-modal-section-title">Overview</h3>
            <p className="tech-modal-text">{technology.overview}</p>
          </div>

          <div className="tech-modal-section">
            <h3 className="tech-modal-section-title">Key Capabilities</h3>
            <div className="tech-capabilities-list">
              {technology.capabilities.map((cap, i) => (
                <div key={i} className="tech-check-item">
                  <span className="tech-check-icon">✓</span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-modal-section">
            <h3 className="tech-modal-section-title">Technologies & Tools</h3>
            <div className="tech-tools-grid">
              {technology.tools.map((tool, i) => (
                <span key={i} className="tech-tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="tech-modal-section">
            <h3 className="tech-modal-section-title">Our Approach</h3>
            <p className="tech-modal-text">{technology.approach}</p>
          </div>

          <div className="tech-modal-section">
            <h3 className="tech-modal-section-title">Use Cases</h3>
            <div className="tech-usecases-list">
              {technology.useCases.map((uc, i) => (
                <div key={i} className="tech-check-item">
                  <span className="tech-check-icon">▪</span>
                  <span>{uc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-modal-cta tech-modal-section">
            <h3>Discuss Your Technology Requirements</h3>
            <p className="tech-modal-text" style={{marginBottom: '24px'}}>Ready to build robust solutions using {technology.name}?</p>
            <Link to="/contact" className="btn btn-primary btn-lg" onClick={onClose}>
              Contact Our Experts
            </Link>
          </div>

          <div className="tech-nav-bar tech-modal-section">
            <button 
              className="tech-nav-btn" 
              onClick={onPrev} 
              disabled={!hasPrev}
            >
              &larr; Previous Technology
            </button>
            <button 
              className="tech-nav-btn" 
              onClick={onNext} 
              disabled={!hasNext}
            >
              Next Technology &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnologyCard = ({ technology, onClick }) => {
  return (
    <div 
      className="tech-card" 
      onClick={() => onClick(technology)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(technology);
        }
      }}
    >
      <div className="tech-icon-wrapper">
        <img src={technology.logo} alt={technology.name} className="tech-card-logo-img" />
      </div>
      <h3 className="tech-card-title">{technology.name}</h3>
      <p className="tech-card-desc">{technology.shortDescription}</p>
      <div className="tech-tags">
        {technology.tags.map((tag, i) => (
          <span key={i} className="tech-tag">{tag}</span>
        ))}
      </div>
      <div className="tech-card-footer">
        <span className="tech-card-btn">
          View Details <span className="tech-card-arrow">&rarr;</span>
        </span>
      </div>
    </div>
  );
};

export default function TechnologyStack() {
  const animRef = useScrollAnimation();
  const [selectedTech, setSelectedTech] = useState(null);
  
  const techIndex = selectedTech ? TECHNOLOGIES.findIndex(t => t.id === selectedTech.id) : -1;
  const hasPrev = techIndex > 0;
  const hasNext = techIndex < TECHNOLOGIES.length - 1;

  const handlePrev = () => {
    if (hasPrev) setSelectedTech(TECHNOLOGIES[techIndex - 1]);
  };

  const handleNext = () => {
    if (hasNext) setSelectedTech(TECHNOLOGIES[techIndex + 1]);
  };

  return (
    <>
      <section className="tech-stack-section" ref={animRef} aria-labelledby="tech-stack-heading">
        <div className="container">
          <div className="tech-stack-header anim">
            <span className="tech-label">Technology Stack</span>
            <h2 className="tech-title" id="tech-stack-heading">
              Modern Technologies<br />for a Healthier Tomorrow
            </h2>
            <p className="tech-subtitle">
              We leverage industry-leading technologies and cloud platforms to build secure, scalable and intelligent solutions across healthcare, software and data services.
            </p>
          </div>

          <div className="tech-grid anim anim-delay-2">
            {TECHNOLOGIES.map((tech) => (
              <TechnologyCard 
                key={tech.id} 
                technology={tech} 
                onClick={setSelectedTech} 
              />
            ))}
          </div>
        </div>
      </section>

      <TechnologyDetailModal 
        technology={selectedTech}
        isOpen={!!selectedTech}
        onClose={() => setSelectedTech(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </>
  );
}
