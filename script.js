// ===== FUTURISTIC PORTFOLIO JAVASCRIPT WITH REAL CONTENT =====

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializePortfolio();
    }, 100);
});

// Main initialization function
function initializePortfolio() {
    console.log('🚀 Initializing Futuristic Portfolio...');
    
    // Core functionality
    initializeParticles();
    initializeCursorGlow();
    initializeNavigation();
    initializeThemeToggle();
    
    // Content loading first
    loadPersonalData();
    loadEducation();
    loadSkills();
    loadProjects();
    loadServices();
    loadCertificates();
    loadContactInfo();
    
    // Then start animations
    setTimeout(() => {
        initializeTypingEffect();
    }, 500);
    
    initializeScrollAnimations();
    
    // Interactive features
    setTimeout(() => {
        initializeSkillAnimations();
        initializeCertificateCarousel();
        initializeContactForm();
        initialize3DEffects();
    }, 1000);
    
    console.log('✅ Futuristic Portfolio Initialized');
}

// ===== PARTICLE SYSTEM =====
function initializeParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = (Math.random() - 0.5) * 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    const particles = [];
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// ===== CURSOR GLOW TRAIL =====
function initializeCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX - 10 + 'px';
        cursorGlow.style.top = e.clientY - 10 + 'px';
    });
    
    if ('ontouchstart' in window) {
        cursorGlow.style.display = 'none';
    }
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Smooth scroll to target
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== THEME TOGGLE =====
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'ri-moon-line' : 'ri-sun-line';
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        icon.className = newTheme === 'dark' ? 'ri-moon-line' : 'ri-sun-line';
    });
}

// ===== TYPING EFFECT =====
function initializeTypingEffect() {
    console.log('🎯 Starting typing effects...');
    
    const introText = document.getElementById('introText');
    const nameText = document.getElementById('nameText');
    const typingText = document.getElementById('typingText');
    const heroTagline = document.getElementById('heroTagline');
    
    if (!portfolioData) {
        console.error('Portfolio data not loaded');
        return;
    }
    
    if (introText) introText.textContent = '';
    if (nameText) nameText.textContent = '';
    if (typingText) typingText.textContent = '';
    if (heroTagline) heroTagline.textContent = '';
    
    setTimeout(() => {
        if (introText) {
            typeText(introText, portfolioData.heroAnimations.introMessage, 50);
        }
    }, 500);
    
    setTimeout(() => {
        if (nameText) {
            typeText(nameText, portfolioData.personal.name, 100);
        }
    }, 2500);
    
    setTimeout(() => {
        if (typingText) {
            startCyclingText(typingText, portfolioData.heroAnimations.typingTexts, 80, 2000);
        }
    }, 5000);
    
    setTimeout(() => {
        if (heroTagline) {
            typeText(heroTagline, portfolioData.personal.tagline, 30);
        }
    }, 7000);
}

function typeText(element, text, speed) {
    if (!element || !text) return;
    
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

function startCyclingText(element, texts, typeSpeed, pauseTime) {
    if (!element || !texts || texts.length === 0) return;
    
    let currentIndex = 0;
    
    function cycleText() {
        const currentText = texts[currentIndex];
        element.textContent = '';
        
        let i = 0;
        function type() {
            if (i < currentText.length) {
                element.textContent += currentText.charAt(i);
                i++;
                setTimeout(type, typeSpeed);
            } else {
                setTimeout(() => {
                    let j = currentText.length;
                    function erase() {
                        if (j > 0) {
                            element.textContent = currentText.substring(0, j - 1);
                            j--;
                            setTimeout(erase, typeSpeed / 2);
                        } else {
                            currentIndex = (currentIndex + 1) % texts.length;
                            setTimeout(cycleText, 500);
                        }
                    }
                    erase();
                }, pauseTime);
            }
        }
        
        type();
    }
    
    cycleText();
}

// ===== LOAD PERSONAL DATA =====
function loadPersonalData() {
    if (!portfolioData) return;
    
    const profileImage = document.getElementById('profileImage');
    const aboutImage = document.getElementById('aboutImage');
    const bioText = document.getElementById('bioText');
    
    if (profileImage) {
        profileImage.src = portfolioData.personal.profileImage;
        profileImage.alt = portfolioData.personal.name;
    }
    
    if (aboutImage) {
        aboutImage.src = portfolioData.personal.aboutImage;
        aboutImage.alt = `About ${portfolioData.personal.name}`;
    }
    
    if (bioText) {
        bioText.textContent = portfolioData.personal.bio;
    }
}

// ===== LOAD EDUCATION =====
function loadEducation() {
    const educationTimeline = document.getElementById('educationTimeline');
    if (!educationTimeline || !portfolioData) return;
    
    educationTimeline.innerHTML = '';
    
    portfolioData.education.forEach(edu => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${edu.degree}</h3>
                <h4>${edu.institution} - ${edu.year}</h4>
                ${edu.specialization ? `<p><strong>Specialization:</strong> ${edu.specialization}</p>` : ''}
                ${edu.stream ? `<p><strong>Stream:</strong> ${edu.stream}</p>` : ''}
                ${edu.percentage ? `<p><strong>Percentage:</strong> ${edu.percentage}</p>` : ''}
                <p><strong>Location:</strong> ${edu.location}</p>
                ${edu.description ? `<p>${edu.description}</p>` : ''}
            </div>
        `;
        
        educationTimeline.appendChild(timelineItem);
    });
}

// ===== LOAD SKILLS =====
function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid || !portfolioData) return;
    
    skillsGrid.innerHTML = '';
    
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <span class="skill-icon">${skill.icon}</span>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-progress">
                <div class="progress-circle" data-percentage="${skill.level}">
                    <span class="skill-percentage">${skill.level}%</span>
                </div>
            </div>
        `;
        
        skillsGrid.appendChild(skillItem);
    });
}

// ===== LOAD PROJECTS =====
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid || !portfolioData) return;
    
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank" class="project-link">
                        <i class="ri-external-link-line"></i> Live Demo
                    </a>
                    <a href="${project.githubUrl}" target="_blank" class="project-link">
                        <i class="ri-github-line"></i> GitHub
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ===== LOAD SERVICES =====
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid || !portfolioData) return;
    
    servicesGrid.innerHTML = '';
    
    portfolioData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card fade-in';
        serviceCard.innerHTML = `
            <span class="service-icon">${service.icon}</span>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

// ===== LOAD CERTIFICATES =====
function loadCertificates() {
    const certificatesCarousel = document.getElementById('certificatesCarousel');
    if (!certificatesCarousel || !portfolioData) return;
    
    certificatesCarousel.innerHTML = '';
    
    portfolioData.certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card';
        certCard.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certificate-image">
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p class="certificate-issuer">${cert.issuer}</p>
                <p class="certificate-date">${cert.date}</p>
                <a href="${cert.credentialUrl}" target="_blank" class="certificate-link">View Credential</a>
            </div>
        `;
        
        certificatesCarousel.appendChild(certCard);
    });
}

// ===== LOAD CONTACT INFO =====
function loadContactInfo() {
    if (!portfolioData) return;
    
    const contactEmail = document.getElementById('contactEmail');
    const contactPhone = document.getElementById('contactPhone');
    const contactLocation = document.getElementById('contactLocation');
    
    if (contactEmail) contactEmail.textContent = portfolioData.personal.email;
    if (contactPhone) contactPhone.textContent = portfolioData.personal.phone;
    if (contactLocation) contactLocation.textContent = portfolioData.personal.location;
    
    const socialLinks = document.getElementById('socialLinks');
    if (socialLinks) {
        socialLinks.innerHTML = '';
        
        Object.entries(portfolioData.social).forEach(([platform, url]) => {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.className = 'social-link';
            
            const icons = {
                github: 'ri-github-fill',
                linkedin: 'ri-linkedin-fill',
                twitter: 'ri-twitter-fill',
                instagram: 'ri-instagram-fill',
                email: 'ri-mail-line'
            };
            
            link.innerHTML = `<i class="${icons[platform] || 'ri-link'}"></i>`;
            socialLinks.appendChild(link);
        });
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section, .fade-in');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// ===== SKILL ANIMATIONS =====
function initializeSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressCircle = entry.target.querySelector('.progress-circle');
                const percentage = progressCircle.dataset.percentage;
                
                setTimeout(() => {
                    const angle = (percentage / 100) * 360;
                    progressCircle.style.background = `conic-gradient(
                        var(--accent-blue) 0deg,
                        var(--accent-blue) ${angle}deg,
                        var(--glass-bg) ${angle}deg,
                        var(--glass-bg) 360deg
                    )`;
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
}

// ===== CERTIFICATE CAROUSEL =====
function initializeCertificateCarousel() {
    const carousel = document.getElementById('certificatesCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const cards = carousel.querySelectorAll('.certificate-card');
    const totalCards = cards.length;
    
    if (totalCards === 0) return;
    
    function showCard(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        showCard(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalCards;
        showCard(currentIndex);
    });
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        showCard(currentIndex);
    }, 5000);
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        window.location.href = mailtoLink;
        contactForm.reset();
        alert('Thank you for your message! Your email client should open now.');
    });
    
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        
        if (input) {
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    group.classList.remove('focused');
                }
            });
        }
    });
}

// ===== 3D EFFECTS =====
function initialize3DEffects() {
    const cards = document.querySelectorAll('.project-card, .skill-item, .certificate-card, .service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
    
    const profileImg = document.querySelector('.profile-img');
    const aboutImg = document.querySelector('.about-img');
    
    [profileImg, aboutImg].forEach(img => {
        if (img) {
            img.addEventListener('mousemove', (e) => {
                const rect = img.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });
            
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        }
    });
}

// ===== DOWNLOAD CV FUNCTION =====
function downloadCV() {
    const cvContent = `MIHIR GALCHAR
Full-Stack Developer & AI Enthusiast

CONTACT INFORMATION
Phone: ${portfolioData.personal.phone}
Email: ${portfolioData.personal.email}
Address: ${portfolioData.personal.location}

PROFILE
${portfolioData.personal.bio}

EDUCATION
${portfolioData.education.map(edu => `
${edu.degree} - ${edu.year}
${edu.institution}, ${edu.location}
${edu.specialization ? `Specialization: ${edu.specialization}` : ''}
${edu.percentage ? `Percentage: ${edu.percentage}` : ''}
${edu.description || ''}
`).join('\n')}

TECHNICAL SKILLS
${portfolioData.skills.map(skill => `${skill.name}: ${skill.level}%`).join(', ')}

ACADEMIC PROJECTS
${portfolioData.projects.map(project => `
${project.title}
${project.description}
Technologies: ${project.technologies.join(', ')}
`).join('\n')}

SERVICES OFFERED
${portfolioData.services.map(service => `• ${service.title}: ${service.description}`).join('\n')}

CERTIFICATIONS
${portfolioData.certificates.map(cert => `• ${cert.title} - ${cert.issuer} (${cert.date})`).join('\n')}

CAREER OBJECTIVE
Seeking opportunities in forward-thinking companies to apply programming, database, and development skills while advancing expertise in AI and modern software development. Ready to take on new challenges and make meaningful contributions to technological advancement.`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mihir_Galchar_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
});

// ===== LOADING STATES =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('🎉 Portfolio fully loaded and interactive!');
});

// ===== PERFORMANCE OPTIMIZATIONS =====
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-speed', '0.01s');
}