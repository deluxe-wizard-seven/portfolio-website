import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Download,
  Mail,
  Calendar,
  MapPin,
} from "lucide-react";
import { IconCloud } from "@/components/magicui/icon-cloud";

const App = () => {
  const email = "diptobhattacharjee6@gmail.com";
  const github = "https://github.com/deluxe-wizard-seven/";
  const linkedin = "https://www.linkedin.com/in/dipto-bhattacharjee-160a10205/";

  const slugs = [
    "markdown",
    "celery",
    "googlecloud",
    "streamlit",
    "pypi",
    "npm",
    "nodemon",
    "mongoose",
    "zsh",
    "trpc",
    "archlinux",
    "netlify",
    "vite",
    "swagger",
    "vercel",
    "stripe",
    "curl",
    "httpie",
    "c",
    "cplusplus",
    "socketdotio",
    "springboot",
    "python",
    "kotlin",
    "react",
    "redux",
    "axios",
    "tailwindcss",
    "nextdotjs",
    "html5",
    "css",
    "javascript",
    "nodedotjs",
    "express",
    "typescript",
    "prisma",
    "sqlalchemy",
    "postgresql",
    "mongodb",
    "mariadb",
    "mysql",
    "flask",
    "linux",
    "postman",
    "pydantic",
    "fastapi",
    "django",
    "kubernetes",
    "terraform",
    "go",
    "rust",
    "nginx",
    "docker",
    "git",
    "github",
    "githubactions",
    "pycharm",
    "intellijidea",
    "vim",
    "neovim",
    "vscodium",
    "spring",
  ];

  const accents = [
    {
      accent: "from-blue-500 to-cyan-500",
      accentHover: "from-blue-600 to-cyan-600",
    },
    {
      accent: "from-indigo-500 to-blue-500",
      accentHover: "from-indigo-600 to-blue-600",
    },
    {
      accent: "from-teal-500 to-emerald-500",
      accentHover: "from-teal-600 to-emerald-600",
    },
    {
      accent: "from-orange-500 to-red-500",
      accentHover: "from-orange-600 to-red-600",
    },
    {
      accent: "from-yellow-400 to-orange-500",
      accentHover: "from-yellow-500 to-orange-600",
    },
    {
      accent: "from-green-500 to-blue-500",
      accentHover: "from-green-600 to-blue-600",
    },
    {
      accent: "from-rose-500 to-pink-500",
      accentHover: "from-rose-600 to-pink-600",
    },
    {
      accent: "from-violet-500 to-purple-500",
      accentHover: "from-violet-600 to-purple-600",
    },
    {
      accent: "from-lime-400 to-emerald-500",
      accentHover: "from-lime-500 to-emerald-600",
    },
    {
      accent: "from-amber-400 to-orange-500",
      accentHover: "from-amber-500 to-orange-600",
    },
    {
      accent: "from-sky-400 to-blue-500",
      accentHover: "from-sky-500 to-blue-600",
    },
  ];

  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [currentAccent, setCurrentAccent] = useState(
    accents[Math.floor(Math.random() * accents.length)],
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendMessage = () => {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const subject = `Contact from ${name} (${email})`;
    const mailtoUrl = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const skillsSection = document.querySelector("#skills-container");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const projectsSection = document.querySelector("#projects-container");
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExperienceVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const experienceSection = document.querySelector("#experience-container");
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const changeAccent = () => {
    let newAccent = accents[Math.floor(Math.random() * accents.length)];
    while (
      newAccent.accent === currentAccent.accent &&
      newAccent.accentHover === currentAccent.accentHover
    ) {
      newAccent = accents[Math.floor(Math.random() * accents.length)];
    }
    setCurrentAccent(newAccent);
  };

  const getHoverColor = () => {
    if (currentAccent.accent.includes("blue")) return "#3b82f6";
    if (currentAccent.accent.includes("indigo")) return "#6366f1";
    if (currentAccent.accent.includes("teal")) return "#14b8a6";
    if (currentAccent.accent.includes("orange")) return "#f97316";
    if (currentAccent.accent.includes("yellow")) return "#eab308";
    if (currentAccent.accent.includes("green")) return "#22c55e";
    if (currentAccent.accent.includes("rose")) return "#f43f5e";
    if (currentAccent.accent.includes("violet")) return "#8b5cf6";
    if (currentAccent.accent.includes("lime")) return "#84cc16";
    if (currentAccent.accent.includes("amber")) return "#f59e0b";
    if (currentAccent.accent.includes("sky")) return "#0ea5e9";
    return "#3b82f6";
  };

  const projects = [
    {
      title: "Collaborative Notes",
      description:
        "Real-time collaborative notes app with event-driven backend and distributed architecture, with the support for creating public/private notes room.",
      tech: [
        "Python",
        "FastAPI",
        "Redis",
        "python-socketio",
        "Uvicorn",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/deluxe-wizard-seven/collaborative-notes",
      image: "collaborative_notes.png",
    },
    {
      title: "Portfolio Website (this one)",
      description:
        "Personal portfolio website built with TypeScript, React, Tailwind CSS, Shadcn and Magic UI for custom components.",
      tech: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Shadcn",
        "MagicUI",
        "Portfolio",
      ],
      github: "https://github.com/deluxe-wizard-seven/portfolio-website",
      image: "portfolio_website.png",
    },
    {
      title: "Book Inventory Management System",
      description:
        "A full-stack MERN app to manage book inventory with CRUD operations, scalable APIs and a responsive UI for easy tracking and search.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github:
        "https://github.com/deluxe-wizard-seven/book-inventory-management-system",
      image: "book_inventory_management_system.png",
    },
    {
      title: "Crypto-Compression Pipeline",
      description:
        "A pipelined Enigma-based encryption and Huffman compression system for secure and efficient text storage.",
      tech: [
        "Java",
        "Encoder",
        "Decoder",
        "Encryption",
        "Decryption",
        "File Security",
        "Huffman Coding Algorithm",
        "Enigma Machine",
      ],
      github: "https://github.com/deluxe-wizard-seven/crypto-compress-pipeline",
      image: "crypto_compression_pipeline.png",
    },
    {
      title: "CRM",
      description:
        "Customer Relationship Management (CRM) app built with Python & Django, supporting CRUD operations to manage customer records efficiently.",
      tech: ["Python", "Django", "HTML", "CRM"],
      github: "https://github.com/deluxe-wizard-seven/crm",
      image: "crm.png",
    },
    {
      title: "Flappy Plane",
      description:
        "Flappy Bird–style game built with Python & Pygame, featuring simple controls and endless gameplay.",
      tech: ["Python", "Pygame", "Game"],
      github: "https://github.com/deluxe-wizard-seven/flappy-plane",
      image: "flappy_plane.png",
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "koolio.ai",
      period: "April, 2023 - Present",
      location: "Remote",
      description:
        "Designed, built and deployed scalable backend and cloud-based systems with microservices architecture, integrating AI/ML and real-time collaboration, for a high-performance web and AI application, primarily working with AWS, GCP and Python.",
      achievements: [
        "Led backend system architecture and cloud infrastructure (AWS and GCP) for a production app delivering 10+ core features with 99.9% uptime.",
        "Architected modular microservices with event-driven design, asynchronous task execution and efficient inter-service communication - improving system reliability and cutting API response latency by 56%.",
        "Designed and implemented Google OAuth 2.0, Apple SSO and Facebook SSO for secure authentication, boosting user onboarding by 47%.",
        "Developed a full-scale subscription management system using Stripe APIs with trials and webhooks, ensuring seamless billing and compliance.",
        "Automated deployments with CI/CD pipelines (GitHub Actions, Docker, Cloud Build) enabling zero-downtime releases and 70% faster release cycles, and 95% reduction in manual deployment errors.",
        "Migrated ML inference workloads from AWS EC2 to ECS, reducing compute overhead and cutting infrastructure costs by 40%.",
        "Engineered real-time collaboration architecture using Socket.IO, Redis Pub/Sub and WebSockets, scaling from MVP to 1,000+ concurrent sessions with low latency and high reliability.",
        "Developed LiveKit-based AI Voice Agent system supporting multi-user audio rooms with live transcription and recording, designed for fault-tolerant, scalable real-time collaboration.",
        "Revamped audio processing pipelines, implementing asynchronous task handling and caching, increasing processing throughput by 66.7%.",
        "Streamlined PostgreSQL and NoSQL databases (Redis, DynamoDB, Firestore), reducing storage footprint by 35% and latency by 50%.",
        "Resolved 100+ critical backend production issues, improving system stability, uptime and reducing average incident response time by 50%.",
      ],
      url: "https://www.koolio.ai/",
    },
    {
      title: "Technical Developer Intern",
      company: "Basel Practitioners",
      period: "December, 2022 - May, 2023",
      location: "Remote",
      description:
        "Owned & developed two microservices — Due Diligence service in a Credit Risk Management Framework & Data Forecasting service — using Spring Boot (Java), AWS QuickSight & Amplify. Designed scalable architectures, optimised data pipelines & integrated interactive dashboards.",
      achievements: [
        "Delivered interactive forecasting dashboards via AWS QuickSight, S3 & Athena for data-driven insights.",
        "Architected scalable backend on Spring Boot & database schemas with MySQL, ensuring maintainability & efficient data flows.",
        "Optimized database performance, improving query execution & reducing latency by 50%.",
        "Contributed to frontend React, Redux & Axios, building features with React Hooks for smooth API integrations.",
      ],
      url: "https://www.baselpractitioners.com/",
    },
  ];

  const skills = [
    {
      category: "Programming & Backend",
      items: [
        "Python",
        "Flask",
        "FastAPI",
        "Django",
        "Django REST",
        "Java",
        "Spring Boot",
        "Node.js",
        "Express.js",
        "Axios",
        "TypeScript",
        "REST APIs",
        "GraphQL",
        "gRPC",
        "tRPC",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "MariaDB",
        "NoSQL",
        "MongoDB",
        "AWS DynamoDB",
        "GCP Firestore",
        "Caching",
        "Redis",
        "AWS ElastiCache",
        "GCP Memorystore",
        "Memcached",
        "C",
        "C++",
        "Kotlin",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "GCP",
        "Docker",
        "Docker Compose",
        "Podman",
        "Podman Compose",
        "CI/CD",
        "GitHub Actions",
        "GitLab CI",
        "GCP Cloud Build",
        "GCP Firebase",
        "AWS CloudFormation",
        "AWS Amplify",
        "Buildpacks",
        "Monitoring",
        "AWS CloudWatch",
        "Git",
        "GitHub",
        "GitLab",
        "Linux",
        "Nginx",
        "Bash",
        "Maven",
        "uv",
        "npm",
        "Postman",
      ],
    },
    {
      category: "System Design & Architecture",
      items: [
        "Microservices Architecture",
        "Scalable Distributed Systems",
        "Stripe Payments",
        "AI Voice Agents",
        "LiveKit",
        "Real-Time Collaboration",
        "WebSockets",
        "Socket.IO",
        "Authentication & Authorization",
        "OAuth 2.0",
        "Apple SSO",
        "Facebook SSO",
        "Event Driven Architecture",
      ],
    },
  ];

  const themeClasses = {
    bg: isDark ? "bg-gray-900" : "bg-white",
    text: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    cardBg: isDark ? "bg-gray-800" : "bg-white",
    border: isDark ? "border-gray-700" : "border-gray-200",
    accent: `bg-gradient-to-r ${currentAccent.accent}`,
    accentHover: `bg-gradient-to-r ${currentAccent.accentHover}`,
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${themeClasses.bg} ${themeClasses.text}`}
    >
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
       
        @keyframes shimmy {
          0% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-2px) rotate(-1deg); }
          50% { transform: translateX(2px) rotate(1deg); }
          75% { transform: translateX(-1px) rotate(-0.5deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }
       
        .icon-shimmy {
          transition: all 0.2s ease;
        }
       
        .icon-shimmy:hover {
          animation: shimmy 0.5s ease-in-out;
        }
       
        .icon-shimmy-parent:hover .icon-shimmy {
          animation: shimmy 0.5s ease-in-out;
        }
       
        .skill-card-1 {
          animation: ${skillsVisible ? "fadeInScale 0.8s ease-out forwards" : "none"};
          opacity: ${skillsVisible ? 1 : 0};
        }
       
        .skill-card-2 {
          animation: ${skillsVisible ? "fadeInScale 0.8s ease-out 0.3s forwards" : "none"};
          opacity: ${skillsVisible ? 1 : 0};
        }
       
        .skill-card-3 {
          animation: ${skillsVisible ? "fadeInScale 0.8s ease-out 0.6s forwards" : "none"};
          opacity: ${skillsVisible ? 1 : 0};
        }
       
        .project-card-1 {
          animation: ${projectsVisible ? "fadeInScale 0.8s ease-out forwards" : "none"};
          opacity: ${projectsVisible ? 1 : 0};
        }
       
        .project-card-2 {
          animation: ${projectsVisible ? "fadeInScale 0.8s ease-out 0.3s forwards" : "none"};
          opacity: ${projectsVisible ? 1 : 0};
        }
       
        .project-card-3 {
          animation: ${projectsVisible ? "fadeInScale 0.8s ease-out 0.6s forwards" : "none"};
          opacity: ${projectsVisible ? 1 : 0};
        }

        .project-card-4 {
          animation: ${projectsVisible ? "fadeInScale 0.8s ease-out 0.9s forwards" : "none"};
          opacity: ${projectsVisible ? 1 : 0};
        }
       
        .project-card-5 {
          animation: ${projectsVisible ? "fadeInScale 0.8s ease-out 1.2s forwards" : "none"};
          opacity: ${projectsVisible ? 1 : 0};
        }
       
        .project-card-6 {
          animation: ${projectsVisible ? "fadeInScale 0.8s ease-out 1.5s forwards" : "none"};
          opacity: ${projectsVisible ? 1 : 0};
        }

        .experience-card-1 {
          animation: ${experienceVisible ? "fadeInScale 0.8s ease-out forwards" : "none"};
          opacity: ${experienceVisible ? 1 : 0};
        }
       
        .experience-card-2 {
          animation: ${experienceVisible ? "fadeInScale 0.8s ease-out 0.3s forwards" : "none"};
          opacity: ${experienceVisible ? 1 : 0};
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDark ? "bg-gray-900/80" : "bg-white/80"} border-b ${themeClasses.border}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="icon-shimmy">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors ${themeClasses.text}`}
                    onMouseEnter={(e: any) =>
                      (e.target.style.color = getHoverColor())
                    }
                    onMouseLeave={(e: any) => (e.target.style.color = "")}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={changeAccent}
                className={`p-2 rounded-lg ${themeClasses.text} transition-all duration-200 hover:scale-105 active:scale-95 active:translate-y-1`}
                title="Change accent color"
              >
                <div className="icon-shimmy">🎨</div>
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg hover:bg-gray-100 ${isDark ? "hover:bg-gray-800" : ""} transition-colors`}
                title="Toggle light/dark theme"
              >
                <div className="icon-shimmy">
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${themeClasses.cardBg} border-t ${themeClasses.border}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block px-3 py-2 text-base font-medium ${themeClasses.text} transition-colors`}
                    onMouseEnter={(e: any) =>
                      (e.target.style.color = getHoverColor())
                    }
                    onMouseLeave={(e: any) => (e.target.style.color = "")}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 h-fit flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div
                className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${currentAccent.accent} p-1 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div
                  className={`w-full h-full rounded-full ${themeClasses.cardBg} flex items-center justify-center text-4xl font-bold`}
                >
                  <img
                    src="profile_picture.png"
                    alt="Profile Picture"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span
                className={`bg-gradient-to-r ${currentAccent.accent} bg-clip-text text-transparent`}
              >
                Dipto Bhattacharjee
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl mb-8 ${themeClasses.textSecondary}`}
            >
              Backend Engineer | Cloud & DevOps Enthusiast
            </p>

            <p
              className={`text-lg mb-12 max-w-2xl mx-auto ${themeClasses.textSecondary}`}
            >
              Turning ideas into scalable products by building scalable web
              applications, automating deployment pipelines and integrating AI
              into production systems to deliver high-performance, cloud-native
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-8 py-3 rounded-lg ${themeClasses.accent} text-white font-medium hover:${themeClasses.accentHover} transform hover:scale-105 transition-all duration-200 shadow-lg`}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-3 rounded-lg ${themeClasses.accent} text-white font-medium hover:${themeClasses.accentHover} transform hover:scale-105 transition-all duration-200 shadow-lg`}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 pb-20 ${isDark ? "bg-gray-800/50" : "bg-gray-50"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span
              className={`bg-gradient-to-r ${currentAccent.accent} bg-clip-text text-transparent`}
            >
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className={`text-lg mb-6 ${themeClasses.textSecondary}`}>
                I’m a <b>backend developer</b> with{" "}
                <b>2+ years of experience</b> building <b>scalable web apps</b>,{" "}
                <b>automating cloud deployments</b> and{" "}
                <b>integrating AI features into production</b>. I specialize in{" "}
                <b>Python</b>, <b>Java</b>, <b>Node.js</b> and{" "}
                <b>cloud engineering</b> on <b>AWS</b> and <b>GCP</b>,
                leveraging <b>Docker</b> and{" "}
                <b>CI/CD for automated deployments</b> — with a passion for{" "}
                <b>backend design</b>, <b>performance optimisation</b> and{" "}
                <b>delivering impactful products</b> —{" "}
                <b>solving real-world problems</b> and{" "}
                <b>turning ideas into high-performance solutions</b>. Currently
                expanding my skill set by learning <b>Terraform</b>,{" "}
                <b>Kubernetes</b> and <b>Rust</b>.
              </p>
              <p className={`text-lg mb-8 ${themeClasses.textSecondary}`}>
                When I’m not coding, you’ll probably find me on a{" "}
                <b>motorcycle ride </b>🏍️, <b>exploring new places </b>🌍,{" "}
                <b>photographing</b> 📷 <b>nature</b> 🌿 and <b>mountains</b> 🏔️
                or <b>diving into the latest tech trends </b>👨🏻‍💻 over a cup of{" "}
                <b>coffee</b> ☕.
              </p>

              <div className="flex space-x-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gradient-to-r ${currentAccent.accent} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  <div className="icon-shimmy">
                    <Github size={20} />
                  </div>
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gradient-to-r ${currentAccent.accent} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  <div className="icon-shimmy">
                    <Linkedin size={20} />
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gradient-to-r ${currentAccent.accent} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  <div className="icon-shimmy">
                    <Mail size={20} />
                  </div>
                </a>

                <a
                  href="resume_dipto_bhattacharjee.pdf"
                  download="Dipto_Bhattacharjee_Resume.pdf"
                  className={`p-3 rounded-lg bg-gradient-to-r ${currentAccent.accent} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  <div className="icon-shimmy">
                    <Download size={20} />
                  </div>
                </a>
              </div>
            </div>

            {/* MagicUI IconCloud */}
            <div className="flex flex-col items-center">
              <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden sm:px-20 px-0">
                <IconCloud images={images} />
              </div>
            </div>
          </div>

          {/* Skills breakdown section */}
          <div className="mt-16">
            <div id="skills-container" className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className={`p-6 rounded-xl ${themeClasses.cardBg} shadow-lg border ${themeClasses.border} skill-card-${index + 1} hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 ${themeClasses.text}`}
                  >
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span
                className={`bg-gradient-to-r ${currentAccent.accent} bg-clip-text text-transparent`}
              >
                Work Experience
              </span>
            </h2>
          </div>

          <div id="experience-container" className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`${themeClasses.cardBg} rounded-xl shadow-lg border ${themeClasses.border} p-8 experience-card-${index + 1} hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <h4
                        className={`text-lg font-semibold mb-2 bg-gradient-to-r ${currentAccent.accent} bg-clip-text text-transparent`}
                      >
                        {exp.company}
                      </h4>
                    </a>
                  </div>
                  <div className="flex flex-col md:items-end mt-4 md:mt-0">
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className={`text-sm ${themeClasses.textSecondary}`}>
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span className={`text-sm ${themeClasses.textSecondary}`}>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={`text-lg mb-6 ${themeClasses.textSecondary}`}>
                  {exp.description}
                </p>

                <div>
                  <h5 className="font-semibold mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className={`flex items-start ${themeClasses.textSecondary}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentAccent.accent} mr-3 mt-2 flex-shrink-0`}
                        ></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${isDark ? "bg-gray-800/50" : "bg-gray-50"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span
              className={`bg-gradient-to-r ${currentAccent.accent} bg-clip-text text-transparent`}
            >
              Featured Projects
            </span>
          </h2>

          <div
            id="projects-container"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${themeClasses.cardBg} rounded-xl shadow-lg border ${themeClasses.border} overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col`}
              >
                <a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/*
                <div
                  className={`h-48 bg-gradient-to-br ${currentAccent.accent}`}
                ></div>
               */}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className={`${themeClasses.textSecondary} mb-4 flex-1`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${currentAccent.accent} text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span
              className={`bg-gradient-to-r ${currentAccent.accent} bg-clip-text text-transparent`}
            >
              Let's Work Together
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className={`text-lg mb-9 ${themeClasses.textSecondary}`}>
                Whether it's a quick hello or your next big idea, my inbox is
                always open! :D
              </p>

              <div className="space-y-4 cursor-pointer">
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 icon-shimmy-parent cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center space-x-4 icon-shimmy-parent">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${currentAccent.accent} text-white`}
                    >
                      <div className="icon-shimmy">
                        <Mail size={20} />
                      </div>
                    </div>
                    <span>{`${email}`}</span>
                  </div>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 icon-shimmy-parent cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center space-x-4 icon-shimmy-parent">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${currentAccent.accent} text-white`}
                    >
                      <div className="icon-shimmy">
                        <Github size={20} />
                      </div>
                    </div>
                    <span>github.com/deluxe-wizard-seven</span>
                  </div>
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 icon-shimmy-parent cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center space-x-4 icon-shimmy-parent">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${currentAccent.accent} text-white`}
                    >
                      <div className="icon-shimmy">
                        <Linkedin size={20} />
                      </div>
                    </div>
                    <span>linkedin.com/in/dipto-bhattacharjee</span>
                  </div>
                </a>

                <a
                  href="resume_dipto_bhattacharjee.pdf"
                  download="Dipto_Bhattacharjee_Resume.pdf"
                  className="flex items-center space-x-4 icon-shimmy-parent cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center space-x-4 icon-shimmy-parent">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${currentAccent.accent} text-white`}
                    >
                      <div className="icon-shimmy">
                        <Download size={20} />
                      </div>
                    </div>
                    <span>Download My Resume</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.text} focus:ring-2 focus:border-transparent transition-colors`}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.text} focus:ring-2 focus:border-transparent transition-colors`}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.text} focus:ring-2 focus:border-transparent transition-colors resize-none`}
                ></textarea>
              </div>
              <button
                className={`w-full px-8 py-3 rounded-lg ${themeClasses.accent} text-white font-medium hover:${themeClasses.accentHover} transform hover:scale-105 transition-all duration-200 shadow-lg`}
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${themeClasses.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={themeClasses.textSecondary}>
              © 2025 Dipto Bhattacharjee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
