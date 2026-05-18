import profileImage from '../assets/IMG_8965new.JPG.jpeg';

export const portfolioData = {
  personalInfo: {
    name: "V F Asif",
    role: "Full Stack Developer",
    bio: "I am a motivated and detail-oriented MCA graduate with a strong foundation in software development, programming, and database management. I am proficient in Python, MERN Stack and web technologies, and I have hands-on experience in project development and problem-solving. Eager to apply my technical skills and collaborate in a dynamic team environment to contribute effectively and gain industry experience.",
    email: "asiffaisal065@gmail.com",
    phone: "9567127931",
    location: "",
    resumeLink: "/resume.pdf",
    avatar: profileImage
  },
  socialLinks: {
    github: "https://github.com/asiffaisal2002",
    linkedin: "https://www.linkedin.com/in/v-f-asif-36245b326/",
    twitter: ""
  },
  skills: [
    { category: "Languages", items: ["Python", "JavaScript", "PHP"] },
    { category: "Frontend", items: ["HTML", "CSS", "React"] },
    { category: "Backend", items: ["Django", "Node.js", "Express.js"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Core Concepts", items: ["REST APIs", "Auth & Authorization", "MVC Architecture", "Database Design"] }
  ],
  experience: [
    {
      id: 1,
      role: "MCA Graduate",
      company: "Recent Graduate",
      duration: "Completed",
      description: "Graduated with a Master of Computer Applications (MCA). Equipped with a strong foundation in software development and database management, ready to build scalable full-stack web applications."
    }
  ],
  projects: [
    {
      id: 1,
      title: "Online Therapy and Guidance System",
      description: "Built a responsive full-stack web application to manage therapy services, featuring secure user authentication, role-based access, appointment scheduling, and an intuitive dashboard. Implemented modern UI design, RESTful APIs, and database integration to ensure scalability, usability, and efficient data handling.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://fullstack-mern-ashen.vercel.app",
      githubLink: ""
    },
    {
      id: 2,
      title: "Machine Renting and Selling System",
      description: "Built a web-based platform for renting and selling machines, enabling users to list equipment, browse availability, and manage transactions efficiently. Built using HTML, CSS, Django, and MySQL, with a focus on secure data handling, user-friendly interfaces, and reliable backend operations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "Django", "MySQL"],
      liveLink: "",
      githubLink: ""
    },
    {
      id: 3,
      title: "Coming Soon...",
      description: "An exciting new project is currently in the works! Check back later to see what I'm building next.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TBD"],
      liveLink: "",
      githubLink: ""
    }
  ]
};
