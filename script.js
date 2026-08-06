document.addEventListener('DOMContentLoaded', () => {

    const skillsData = [
        {
            id: "web",
            title: "Web",
            subtitle: "Modern web apps",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tab-icon"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" x2="12" y1="22" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" x2="12" y1="2" y2="8.5"></line></svg>`,
            heading: "Web Technologies",
            skills: [
                { name: "Laravel", isPrimary: true },
                { name: "Codeigniter", isPrimary: true },
                { name: "PHP", isPrimary: false },
                { name: "Next.js", isPrimary: false },
                { name: "React", isPrimary: false },
                { name: "Tailwind CSS", isPrimary: false },
                { name: "Bootstrap", isPrimary: true },
                { name: "JavaScript", isPrimary: false },
                { name: "HTML", isPrimary: false },
                { name: "CSS", isPrimary: false }
            ]
        },
        {
            id: "backend",
            title: "Backend",
            subtitle: "Scalable services",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tab-icon"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>`,
            heading: "Backend Technologies",
            skills: [
                { name: "Laravel", isPrimary: true },
                { name: "FastAPI", isPrimary: false },
                { name: "Flask", isPrimary: false },
                { name: "Python", isPrimary: false },
                { name: "PHP", isPrimary: false },
                { name: "MySQL", isPrimary: true },
                { name: "SQLite", isPrimary: true },
                { name: "Firebase", isPrimary: false },
            ]
        },
        {
            id: "mobile",
            title: "Mobile",
            subtitle: "Cross-platform apps",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tab-icon"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" x2="12" y1="18" y2="18"></line></svg>`,
            heading: "Mobile Technologies",
            skills: [
                { name: "Flutter", isPrimary: true },
                { name: "Dart", isPrimary: false },
                { name: "Kotlin", isPrimary: true }
            ]
        },
        {
            id: "infra",
            title: "Tools & Infra",
            subtitle: "Environment & DevOps",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tab-icon"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path></svg>`,
            heading: "Infrastructure & Tools",
            skills: [
                { name: "Debian Linux", isPrimary: true },
                { name: "Git", isPrimary: true },
                { name: "GitHub", isPrimary: true },
                { name: "Postman", isPrimary: true },
                { name: "Android Studio", isPrimary: true },
                { name: "Figma", isPrimary: true },
                { name: "Docker", isPrimary: false }
            ]
        }
    ];

    function renderSkills() {
        const tabsContainer = document.getElementById('skills-tabs-container');
        const contentContainer = document.getElementById('skills-content-container');

        if (!tabsContainer || !contentContainer) return;

        let tabsHTML = '';
        let contentHTML = '';

        skillsData.forEach((category, index) => {
            const isActive = index === 0 ? 'active' : '';

            tabsHTML += `
                <div class="skill-tab ${isActive}" data-target="${category.id}">
                    ${category.svg}
                    <h4>${category.title}</h4>
                    <p>${category.subtitle}</p>
                </div>
            `;


            let badgesHTML = '';
            category.skills.forEach((skill, index) => {
                const delay = (index * 0.08) + 's';

                if (skill.isPrimary) {
                    badgesHTML += `<span class="badge-primary" style="animation-delay: ${delay}"><span class="star-pulse">✦</span> ${skill.name}</span>`;
                } else {
                    badgesHTML += `<span class="badge-secondary" style="animation-delay: ${delay}">${skill.name}</span>`;
                }
            });


            contentHTML += `
                <div class="skills-content ${isActive}" id="skill-${category.id}">
                    <h5>${category.heading}</h5>
                    <div class="tech-badges">
                        ${badgesHTML}
                    </div>
                </div>
            `;
        });

        tabsContainer.innerHTML = tabsHTML;
        contentContainer.innerHTML = contentHTML;

        initTabSwitcher();
    }

    function initTabSwitcher() {
        const skillTabs = document.querySelectorAll('.skill-tab');
        const skillContents = document.querySelectorAll('.skills-content');

        skillTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                skillTabs.forEach(t => t.classList.remove('active'));
                skillContents.forEach(c => {
                    c.classList.remove('active');
                    c.style.display = 'none';
                });

                tab.classList.add('active');

                const targetId = tab.getAttribute('data-target');
                const targetContent = document.getElementById(`skill-${targetId}`);

                if (targetContent) {
                    targetContent.style.display = 'flex';
                    void targetContent.offsetWidth;
                    targetContent.classList.add('active');
                }
            });
        });
    }

    renderSkills();


    const scrollContainer = document.getElementById('scroll-container');

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let isScrolling = false;
    let startY = 0;

    function snapToSection(direction) {
        if (isScrolling) return;

        const sectionHeight = scrollContainer.clientHeight;
        const currentScroll = scrollContainer.scrollTop;
        const currentIndex = Math.round(currentScroll / sectionHeight);

        let nextIndex = currentIndex;

        if (direction === 'down' && currentIndex < sections.length - 1) {
            nextIndex++;
        } else if (direction === 'up' && currentIndex > 0) {
            nextIndex--;
        }

        if (nextIndex !== currentIndex) {
            isScrolling = true;

            scrollContainer.scrollTo({
                top: nextIndex * sectionHeight,
                behavior: 'smooth'
            });

            const activeSectionId = sections[nextIndex].getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(activeSectionId)) {
                    link.classList.add('active');
                }
            });

            setTimeout(() => {
                isScrolling = false;
            }, 800);
        }
    }

    scrollContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 'down' : 'up';
        snapToSection(direction);
    }, { passive: false });

    scrollContainer.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    }, { passive: false });

    scrollContainer.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });

    scrollContainer.addEventListener('touchend', (e) => {
        const endY = e.changedTouches[0].clientY;
        const distance = startY - endY;

        if (Math.abs(distance) > 40) {
            const direction = distance > 0 ? 'down' : 'up';
            snapToSection(direction);
        }
    }, { passive: false });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (isScrolling) return;

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                isScrolling = true;
                scrollContainer.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });

                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');

                navMenu.classList.remove('active');
                menuBtn.classList.remove('active');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');

                setTimeout(() => {
                    isScrolling = false;
                }, 800);
            }
        });
    });


    const words = document.querySelectorAll(".word-slider .word");
    let currentWordIndex = 0;
    let isTextAnimating = false;

    if (words.length > 0) {
        words[0].classList.add("is-visible");
    }

    function changeWord() {
        if (words.length <= 1 || isTextAnimating) return;
        isTextAnimating = true;

        const currentWord = words[currentWordIndex];
        const nextWordIndex = (currentWordIndex + 1) % words.length;
        const nextWord = words[nextWordIndex];

        currentWord.classList.remove("is-visible");
        currentWord.classList.add("is-hidden");
        nextWord.classList.remove("is-hidden");
        nextWord.classList.add("is-visible");

        setTimeout(() => {
            currentWord.classList.remove("is-hidden");
            isTextAnimating = false;
        }, 500);

        currentWordIndex = nextWordIndex;
    }

    if (words.length > 0) {
        setInterval(changeWord, 2500);
    }


    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });


    const motionElements = document.querySelectorAll('.motion-element');
    const observerOptions = {
        root: scrollContainer,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const scrollObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    motionElements.forEach(el => {
        scrollObserver.observe(el);
    });


    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillContents = document.querySelectorAll('.skills-content');

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            skillContents.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });

            tab.classList.add('active');

            const targetId = tab.getAttribute('data-target');
            const targetContent = document.getElementById(`skill-${targetId}`);
            if (targetContent) {
                targetContent.style.display = 'flex';
                void targetContent.offsetWidth;
                targetContent.classList.add('active');
            }
        });
    });



});


