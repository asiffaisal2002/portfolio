import { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { 
  ExternalLink, 
  Mail,
  Calendar,
  Code2,
  Briefcase,
  User,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import './App.css';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.2-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.2 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 12c.5.3 1 .4 1.5.4C2.5 11.2 2 7 2 7c.5.5 1 .6 1.5.6C1 5.7 1.8 3 1.8 3c2.7 3.3 6.6 5.5 11.2 5.7-.2-1.6.3-3.2 1.4-4.4 1.7-1.7 4.5-1.7 6.2 0 1.2-.2 2.3-.7 3.2-1.3-.4 1.2-1.2 2.2-2.3 2.8.9-.1 1.8-.4 2.6-.7-.6 1-1.4 1.8-2.2 2.5z"></path></svg>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo, socialLinks, skills, experience, projects } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-logo">Port<span className="text-gradient">folio</span>.</div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content animate-fade-in">
            <div className="avatar-wrapper">
              <img src={personalInfo.avatar} alt={personalInfo.name} className="avatar" />
            </div>
            <h1>Hi, I'm <span className="text-gradient">{personalInfo.name}</span></h1>
            <p className="hero-subtitle">{personalInfo.role}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
              <Mail size={16} className="text-secondary" />
              <a href={`mailto:${personalInfo.email}`} className="text-secondary" style={{ fontSize: '1.1rem' }}>
                {personalInfo.email}
              </a>
            </div>
            
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View Work <ChevronDown size={18} />
              </button>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn btn-outline">
                Contact Me <Mail size={18} />
              </a>
            </div>

            <div className="social-links">
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-icon">
                  <GithubIcon size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                  <LinkedinIcon size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="social-icon">
                  <TwitterIcon size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2><User className="inline-icon mb-1 mr-2" /> About Me</h2>
          <div className="glass-card max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed mb-4">{personalInfo.bio}</p>
            {personalInfo.resumeLink && (
              <a href={personalInfo.resumeLink} download="V_F_Asif_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                <ExternalLink size={18} /> Download Resume
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2><Code2 className="inline-icon mb-1 mr-2" /> Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass-card">
                <div className="skill-category">
                  <h3>{skillGroup.category}</h3>
                  <div className="skill-tags">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2><Briefcase className="inline-icon mb-1 mr-2" /> Experience</h2>
          <div className="timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-card">
                  <div className="experience-header">
                    <h3 className="experience-role">{exp.role}</h3>
                    <span className="experience-duration">
                      <Calendar size={16} /> {exp.duration}
                    </span>
                  </div>
                  <div className="experience-company mb-3">{exp.company}</div>
                  <p className="text-secondary">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2><Code2 className="inline-icon mb-1 mr-2" /> Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="glass-card project-card">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-outline" style={{flex: 1}}>
                        <GithubIcon size={18} /> Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{flex: 1}}>
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" style={{ paddingTop: '5rem' }}>
        <div className="container">
          <h2 className="mb-2"><Mail className="inline-icon mb-1 mr-2" /> Get In Touch</h2>
          <div className="mb-4 text-center">
            <p className="text-secondary mb-3">Feel free to reach out for collaborations or just a friendly hello!</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', margin: '1rem 0' }}>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} target="_blank" rel="noreferrer" className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {personalInfo.email}
              </a>
              {personalInfo.phone && (
                <a href={`https://wa.me/91${personalInfo.phone.replace(/\\D/g, '')}`} target="_blank" rel="noreferrer" className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {personalInfo.phone}
                </a>
              )}
            </div>
          </div>
          <div className="social-links" style={{ marginTop: '2rem' }}>
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-icon">
                <GithubIcon size={20} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                <LinkedinIcon size={20} />
              </a>
            )}
          </div>
          <p className="text-secondary" style={{ marginTop: '1.5rem' }}>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
