document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    // --- Theme Toggler ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localStorage.getItem('theme') === 'light' || (!localStorage.getItem('theme') && !prefersDark)) {
        body.classList.remove('dark-mode'); body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode'); body.classList.add('dark-mode');
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
        const newConfig = body.classList.contains('light-mode') ? particlesLight : particlesDark;
        if (window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }
        particlesJS('particles-js', newConfig);
    });
    
    // --- Header & Nav ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50));
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? '<i data-feather="x"></i>' : '<i data-feather="menu"></i>';
        feather.replace();
    });
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i data-feather="menu"></i>';
            feather.replace();
        }
    }));
    
    // --- Typing Animation ---
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = "Saurav Prakash Wani ";
        heroTitle.innerHTML = ''; let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
                i++; setTimeout(typeWriter, 100);
            } else if (heroTitle.querySelector('.cursor')) {
                heroTitle.querySelector('.cursor').style.animation = 'blink 1s infinite';
            }
        }
        typeWriter();
    }
    
    // --- DATA ---
    const skills = [ { name: 'Java', level: 95, category: 'Programming Languages' }, { name: 'JavaScript', level: 85, category: 'Programming Languages' }, { name: 'Python', level: 80, category: 'Programming Languages' }, { name: 'C', level: 75, category: 'Programming Languages' }, { name: 'HTML5', level: 90, category: 'Programming Languages' }, { name: 'CSS3', level: 85, category: 'Programming Languages' }, { name: 'Web Development', level: 85, category: 'Development & Frameworks' }, { name: 'Data Structures', level: 80, category: 'Development & Frameworks' }, { name: 'Algorithms', level: 80, category: 'Development & Frameworks' }, { name: 'Object-Oriented Programming', level: 85, category: 'Development & Frameworks' }, { name: 'User Interface Design', level: 75, category: 'Development & Frameworks' }, { name: 'Responsive Design', level: 80, category: 'Development & Frameworks' }, { name: 'Data Analysis', level: 80, category: 'Data & Analytics' }, { name: 'Data Visualization', level: 75, category: 'Data & Analytics' }, { name: 'Statistical Analysis', level: 70, category: 'Data & Analytics' }, { name: 'Epi Info', level: 70, category: 'Tools & Technologies' }, { name: 'Arduino IDE', level: 65, category: 'Tools & Technologies' }, { name: 'Robotics', level: 60, category: 'Tools & Technologies' }, { name: 'Problem Solving', level: 95, category: 'Soft Skills' }, { name: 'Team Collaboration', level: 95, category: 'Soft Skills' }, { name: 'Project Management', level: 85, category: 'Soft Skills' }, { name: 'Critical Thinking', level: 90, category: 'Soft Skills' }, ];
    const projectsData = [ { title: 'Cafe Billing Management System', date: 'Nov 2024 - Feb 2025', image: 'images/cafe-billing.png', description: 'A comprehensive CLI billing system for cafes, built with C to handle orders and generate bills.', details: 'The Cafe Bill Manager is a robust command-line interface (CLI) application developed in C, designed to streamline the billing process for cafes. It features a dynamic menu system, efficient order management, and automatic tax calculation (SGST/CGST). A key feature is its data persistence, which saves transaction records to files, allowing for sales summaries and easy retrieval of past bills. This project demonstrates a strong grasp of fundamental C programming, file I/O operations, and data structure implementation in a practical, real-world scenario.', toolsUsed: ['C', 'Billing System', 'File I/O'], githubUrl: 'https://github.com/sauravwani114/Cafe_Billing_Management_System.git' }, { title: 'Statistical Analysis of IPL Matches', date: 'Mar 2025 - Jun 2025', image: 'images/ipl-dashboard.png', description: 'A statistical analysis of IPL cricket data using Epi Info 7 to extract key insights.', details: 'This project involved a deep statistical analysis of a large Indian Premier League (IPL) dataset using the Epi Info 7 Visual Dashboard. My role was to process, analyze, and visualize the data to uncover trends in team performance, player statistics, and match outcomes. I utilized a range of statistical tools, including frequency distributions and cross-tabulations, to create compelling charts and graphs. The project showcases my proficiency in data handling, statistical interpretation, and the ability to transform raw data into a clear, evidence-based narrative.', toolsUsed: ['Epi Info', 'Data Analysis', 'Data Visualization'], liveUrl: 'https://sauravwani114.github.io/IPL-Dashboard/', githubUrl: 'https://github.com/sauravwani114/IPL-Dashboard' }, { title: 'Offline Currency Converter', date: 'May 2025', image: 'images/currency-converter.png', description: 'A high-performance currency converter web app that works 100% offline, with no APIs required.', details: 'I developed a unique, fully offline currency converter that supports over 200 global currencies without any reliance on external APIs or an internet connection. This was achieved by hardcoding exchange rates into an efficient JavaScript object, ensuring instant and reliable performance. The application features a clean, responsive UI with dynamic national flag displays that update based on the selected currency. This project highlights my skills in vanilla JavaScript, DOM manipulation, and creating privacy-first, offline-first web solutions.', toolsUsed: ['JavaScript', 'HTML5', 'CSS3', 'Offline-First'], liveUrl: 'https://sauravwani114.github.io/Currency-Converter/', githubUrl: 'https://github.com/sauravwani114/Currency-Converter' }, { title: 'Zephyr Website Development', date: 'Oct 2024 - Feb 2025', image: 'images/zephyr.png', description: 'A dynamic website focused on user authentication, responsive design, and interactive forms.', details: 'As part of the development team for the Zephyr project, I contributed to building a seamless user authentication system with secure login and registration. A primary focus was ensuring the website is fully responsive across all devices, utilizing modern CSS techniques. I developed multiple interactive forms with robust client-side validation to enhance user interaction and reduce errors. The project provided valuable experience in front-end development, user session management using local storage, and collaborative coding practices.', toolsUsed: ['JavaScript', 'HTML5', 'CSS3', 'Auth'], liveUrl: 'https://sauravwani114.github.io/ZEPHYR/', githubUrl: 'https://github.com/sauravwani114/ZEPHYR' }, { title: 'Rock Paper Scissors Game', date: 'Jan 2025', image: 'images/rps-game.png', description: 'An interactive Rock-Paper-Scissors game where the player competes against a computer opponent.', details: 'I created a classic Rock-Paper-Scissors game where a player can compete against a computer with randomized moves. The application features real-time score tracking and provides instant visual feedback for wins, losses, and draws. Built with vanilla HTML, CSS, and JavaScript, this project was an excellent exercise in DOM manipulation, handling user events, and implementing game logic in a front-end environment. It demonstrates my ability to create engaging, interactive web experiences from scratch.', toolsUsed: ['JavaScript', 'Game Dev', 'HTML5', 'CSS3'], liveUrl: 'https://sauravwani114.github.io/Rock-Paper-Scissors/', githubUrl: 'https://github.com/sauravwani114/Rock-Paper-Scissors' }, { title: 'Tic Tac Toe Game', date: 'Dec 2024', image: 'images/tic-tac-toe.png', description: 'A classic, fully functional Tic-Tac-Toe game built with vanilla web technologies.', details: 'This project is a fully functional, two-player Tic-Tac-Toe game developed entirely with HTML, CSS, and JavaScript. It features a clean, responsive user interface and robust logic for turn-based gameplay, dynamic win-checking, and handling draw scenarios. The game includes a seamless reset option to start new rounds. It was a foundational project that helped me solidify my understanding of core web development concepts like DOM manipulation, event handling, and logical algorithm implementation.', toolsUsed: ['JavaScript', 'Game Dev', 'HTML5', 'CSS3'], liveUrl: 'https://sauravwani114.github.io/Tic-Tac-Toe/', githubUrl: 'https://github.com/sauravwani114/Tic-Tac-Toe' }, ];
    const journeyData = [ { type: 'Experience', title: 'SWD Volunteer', institution: 'Vishwakarma Institute of Technology', period: 'Oct 2024 - Feb 2025', location: 'Pune, India', description: ['Contributing to student welfare and development initiatives at VIT Pune.', 'Collaborating with administration and student body on various projects.', 'Developing leadership and organizational skills through volunteer work.', 'Supporting fellow students in academic and extracurricular activities.'], tags: ['Leadership', 'Communication', 'Project Management', 'Team Collaboration'] }, { type: 'Education', title: 'B.Tech in Information Technology', institution: 'Vishwakarma Institute of Technology, Pune', period: '2024 - 2028', location: 'Pune, India', description: ['Pursuing Bachelor of Technology in Information Technology.', 'Building strong foundation in programming languages including Java, Python, and C.', 'Developing web applications using HTML5, CSS3, and JavaScript.', 'Engaging in practical projects to apply theoretical knowledge.'], tags: ['Java', 'Python', 'JavaScript', 'Web Development', 'Data Structures'] }, { type: 'Education', title: '12th Grade (HSC)', institution: 'Swami Vivekanand Jr College, Shirpur', period: '2022 - 2024', location: 'Shirpur, India', description: ['Completed higher secondary education with a focus on science and mathematics, building a strong analytical foundation.'], tags: [] }, { type: 'Education', title: '10th Grade (CBSE)', institution: 'Amrishbhai R. Patel School, Shirpur', period: 'Completed 2022', location: 'Shirpur, India', description: ['Built a strong academic foundation in science, mathematics, and computer applications.'], tags: [] }, ];
    const patentsData = [ { title: 'A simple Wearable Eye-Drowsiness Detection System', meta: '<strong>Patent No:</strong> 202521056651 · Issued Jul 4, 2025', description: 'Smart glasses designed to detect potential hazards and prevent accidents in real-time. The hardware features built-in sensors and Bluetooth connectivity, enabling instant alerts and SOS notifications via a mobile app. Ideal for bikers, workers, and elderly users — combining wearable tech with safety innovation.', image: 'images/patent-drowsiness-system.png' } ];

    // --- Skills Section Logic ---
    const skillsGrid = document.querySelector('.skills-grid');
    const skillsFilters = document.querySelector('.skills-filters');
    const categories = ['All', ...new Set(skills.map(skill => skill.category))];
    if (skillsFilters) {
        skillsFilters.innerHTML = categories.map(category => `<button data-filter="${category}" class="${category === 'All' ? 'active' : ''}">${category}</button>`).join('');
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = `${level}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const renderSkills = (filter = 'All') => {
        if (!skillsGrid) return;
        skillsGrid.innerHTML = '';
        const filteredSkills = filter === 'All' ? skills : skills.filter(skill => skill.category === filter);
        filteredSkills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-item-card';
            skillCard.setAttribute('data-aos', 'fade-up');
            skillCard.innerHTML = `
                <div class="skill-item-header"><h3>${skill.name}</h3><span>${skill.level}%</span></div>
                <div class="progress-bar"><div class="progress" data-level="${skill.level}"></div></div>
                <p class="skill-category">${skill.category}</p>`;
            skillsGrid.appendChild(skillCard);
        });
        document.querySelectorAll('.progress').forEach(bar => observer.observe(bar));
    };
    if (skillsFilters) {
        skillsFilters.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelector('.skills-filters button.active').classList.remove('active');
                e.target.classList.add('active');
                renderSkills(e.target.getAttribute('data-filter'));
            }
        });
    }
    renderSkills();

    // --- Other Section Rendering ---
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map((project, index) => `
            <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 50}">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <span class="project-date">${project.date}</span>
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tools-used">${project.toolsUsed.map(tag => `<span>${tag}</span>`).join('')}</div>
                    <div class="project-actions">
                        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn secondary"><i data-feather="github"></i> Code</a>` : ''}
                        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="btn secondary"><i data-feather="external-link"></i> Demo</a>` : ''}
                        <button class="btn primary" onclick="openModal(${index})"><i data-feather="info"></i> Details</button>
                    </div>
                </div>
            </div>`).join('');
    }
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        timeline.innerHTML = journeyData.map((item, index) => `
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div class="timeline-header-left">
                            <h3>${item.title}</h3>
                            <p><i data-feather="briefcase"></i> ${item.institution}</p>
                        </div>
                        <div class="timeline-header-right">
                            <p><i data-feather="calendar"></i> ${item.period}</p>
                            <p><i data-feather="map-pin"></i> ${item.location}</p>
                        </div>
                    </div>
                    <ul class="timeline-description">
                        ${item.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                    ${item.tags && item.tags.length > 0 ? `<div class="timeline-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div>` : ''}
                </div>
            </div>`).join('');
    }
    const patentsContainer = document.querySelector('.patents-container');
    if (patentsContainer) {
        patentsData.forEach(patent => {
            const patentCard = document.createElement('div');
            patentCard.className = 'patent-card';
            patentCard.setAttribute('data-aos', 'fade-up');
            patentCard.innerHTML = `
                <div class="patent-image-placeholder" onclick="openPatentModal('${patent.image}')">
                    <img src="${patent.image}" alt="${patent.title}" onerror="this.parentElement.innerHTML = '<i data-feather=\\'award\\' style=\\'width: 50px; height: 50px;\\'></i>'; feather.replace();">
                </div>
                <div class="patent-info">
                    <h3>${patent.title}</h3>
                    <p class="patent-meta">${patent.meta}</p>
                    <p>${patent.description}</p>
                </div>
            `;
            patentsContainer.appendChild(patentCard);
        });
    }
    
    // --- Modal Logic ---
    const projectModal = document.getElementById('project-modal');
    window.openModal = function(projectIndex) {
        const project = projectsData[projectIndex];
        projectModal.querySelector('#modal-body').innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="modal-project-image">
            <h2>${project.title}</h2>
            <p class="modal-description">${project.details}</p>
            <div class="project-tags">${project.toolsUsed.map(tag => `<span>${tag}</span>`).join('')}</div>
            <div class="modal-links">
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank"><i data-feather="external-link"></i> View Live</a>` : ''}
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank"><i data-feather="github"></i> View Code</a>` : ''}
            </div>`;
        feather.replace();
        projectModal.style.display = 'block';
    };
    projectModal.querySelector('.close-button').onclick = () => projectModal.style.display = 'none';

    // --- NEW Patent Modal Logic ---
    const patentModal = document.getElementById('patent-modal');
    const patentModalImage = document.getElementById('patent-modal-image');
    window.openPatentModal = function(imageUrl) {
        patentModalImage.src = imageUrl;
        patentModal.style.display = 'block';
    }
    patentModal.querySelector('.close-button').onclick = () => patentModal.style.display = 'none';

    // Close modals when clicking outside
    window.onclick = (event) => {
        if (event.target == projectModal) projectModal.style.display = 'none';
        if (event.target == patentModal) patentModal.style.display = 'none';
    };
    
    // --- Initializations ---
    AOS.init({ duration: 800, once: true, offset: 50 });
    feather.replace();
    
    // --- Particles.js Config ---
    const particlesDark = { particles: { number: { value: 60, density: { enable: true, value_area: 800 } }, color: { value: "#64ffda" }, shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#8892b0", opacity: 0.1, width: 1 }, move: { enable: true, speed: 1, direction: "none", random: true, out_mode: "out" } }, interactivity: { events: { onhover: { enable: true, mode: "grab" } }, modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } } }, retina_detect: true };
    const particlesLight = { particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: "#007BFF" }, shape: { type: "circle" }, opacity: { value: 0.4, random: true }, size: { value: 4, random: true }, line_linked: { enable: true, distance: 150, color: "#65676B", opacity: 0.2, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: false, out_mode: "out" } }, interactivity: { events: { onhover: { enable: true, mode: "grab" } }, modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } } } }, retina_detect: true };
    const initialParticlesConfig = body.classList.contains('light-mode') ? particlesLight : particlesDark;
    particlesJS('particles-js', initialParticlesConfig);
});