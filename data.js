// ===== CONTENT DATA - EDIT THIS FILE TO UPDATE PORTFOLIO CONTENT =====

const portfolioData = {
    // ===== PERSONAL INFORMATION =====
    personal: {
        name: "Mihir Galchar",
        title: "Full Stack Developer & AI Enthusiast",
        tagline: "Building the future, one line of code at a time",
        bio: "Aspiring software developer and AI enthusiast pursuing an MCA in Computer Science at Saurashtra University. Passionate about building fast, efficient web and app solutions and tackling AI-driven challenges. Seeking opportunities in forward-thinking companies to apply my programming, database, and development skills while advancing expertise and contributing to cutting-edge projects.",
        profileImage: "./m1.png",
        aboutImage: "./m2.png",
        location: "Morbi Road, Rajkot-360003, Gujarat, India",
        email: "mihirgalchar39@gmail.com",
        phone: "+91-8238733586"
    },

    // ===== SKILLS - Real skills from uploaded portfolio =====
    skills: [
        { name: "JavaScript", level: 85, icon: "💻" },
        { name: "Python & laravel", level: 88, icon: "🐍" },
        { name: "C#", level: 82, icon: "⚡" },
        { name: "PHP", level: 80, icon: "🌐" },
        { name: "ASP.NET", level: 85, icon: "🔷" },
        { name: "Flask", level: 83, icon: "🔥" },
        { name: "Django", level: 78, icon: "🎯" },
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "Oracle", level: 75, icon: "🏛️" },
        { name: "AI/ML", level: 80, icon: "🤖" },
        { name: "Figma", level: 80, icon: "🎨" } ,
    ],

    // ===== PROJECTS - Real projects from uploaded portfolio =====
    projects: [
        {
            title: "Online Banking System",
            description: "Comprehensive banking system with three user roles (Admin, Staff, Client) featuring account management, transactions, and statement generation with robust security measures.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
            technologies: ["ASP.NET", "Bootstrap", "SQL Server", "Visual Studio"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
            icon: "🏦"
        },
        {
            title: "Internet Banking System",
            description: "Advanced Flask-based banking system with real-time messaging, location services, and international money transfer capabilities using modern web technologies.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
            technologies: ["Flask", "HTML/CSS", "JavaScript", "MySQL", "Bootstrap", "XMPP"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
            icon: "🌐"
        },
        {
            title: "Swasthya Vision AI",
            description: "Cutting-edge AI-powered healthcare solution leveraging computer vision and machine learning for medical diagnosis and health monitoring applications.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
            technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Machine Learning"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
            icon: "🤖"
        }
    ],

    // ===== EDUCATION - Real education from uploaded portfolio =====
    education: [
        {
            degree: "Master's in Computer Applications (MCA)",
            institution: "Saurashtra University",
            location: "Rajkot, Gujarat",
            year: "Currently Pursuing",
            specialization: "Computer Science",
            description: "Focus on AI, Advanced Programming, and Software Development"
        },
        {
            degree: "Bachelor's in Computer Applications (BCA)",
            institution: "Parangat College of Computer Science",
            location: "Halvad",
            year: "2024",
            percentage: "72.91% (First Class)",
            description: "Comprehensive study of programming, database management, and software engineering"
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Shree Shanaskar Vidhyalaya",
            location: "Halvad",
            year: "2021",
            stream: "Commerce",
            percentage: "40.54%"
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "Shree Shanaskar Vidhyalaya",
            location: "Halvad",
            year: "2018",
            percentage: "54.00%",
            description: "Foundation in core subjects with focus on mathematics and science"
        }
    ],

    // ===== CERTIFICATES - Real certificates from uploaded portfolio =====
   certificates: [
        {
            title: "Full Stack Web Development",
            issuer: "Coursera - Meta",
            date: "December 2023",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
            credentialUrl: "#",
            icon: "💻"
        },
        {
            title: "Machine Learning Fundamentals",
            issuer: "edX - IBM",
            date: "October 2023",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
            credentialUrl: "#",
            icon: "🤖"
        },
        {
            title: "React Native Development",
            issuer: "Udemy",
            date: "September 2023",
            image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&h=200&fit=crop",
            credentialUrl: "#",
            icon: "📱"
        },
        {
            title: "Database Management Systems",
            issuer: "Oracle Academy",
            date: "August 2023",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
            credentialUrl: "#",
            icon: "🗄️"
        },
        {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "July 2023",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
            credentialUrl: "#",
            icon: "☁️"
        },
        {
            title: "Version Control with Git",
            issuer: "GitHub Learning Lab",
            date: "June 2023",
            image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop",
            credentialUrl: "#",
            icon: "🔧"
        }
    ],

    // ===== SERVICES - Real services from uploaded portfolio =====
    services: [
        {
            title: "Full-Stack Development",
            description: "End-to-end web application development using modern frameworks like ASP.NET, Flask, and Django with database integration and responsive design.",
            icon: "💻"
        },
        {
            title: "Mobile Development",
            description: "Cross-platform mobile application development for iOS and Android using modern technologies and frameworks for seamless user experiences.",
            icon: "📱"
        },
        {
            title: "Database Management",
            description: "Expert database design, optimization, and management using MySQL, SQL Server, and Oracle with focus on performance and security.",
            icon: "🗄️"
        },
        {
            title: "AI & Machine Learning",
            description: "Development of AI-powered solutions using Python, TensorFlow, and computer vision for intelligent automation and decision-making systems.",
            icon: "🤖"
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and engaging user interfaces with modern design principles, responsive layouts, and optimal user experience.",
            icon: "🎨"
        },
        {
            title: "System Integration",
            description: "Seamless integration of various systems, APIs, and third-party services to create unified and efficient software solutions.",
            icon: "⚙️"
        }
    ],

    // ===== SOCIAL LINKS - Real social links from uploaded portfolio =====
    social: {
        github: "https://github.com/mihirgalchar",
        linkedin: "https://www.linkedin.com/in/mihir-galchar/",
      ///  twitter: "https://twitter.com/mihirgalchar",
        //instagram: "https://instagram.com/",
        email: "mailto:mihirgalchar39@gmail.com"
    },

    // ===== HERO SECTION ANIMATIONS =====
    heroAnimations: {
        typingTexts: [
            "Full Stack Developer",
            "AI Enthusiast", 
            "Problem Solver",
            "Tech Innovator",
            "Software Engineer"
        ],
        introMessage: "Hello! 👋 I'm Mihir — let's build something amazing together."
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;

}

