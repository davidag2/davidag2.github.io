document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to sections when they come into view
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add dynamic class to active project in the carousel
    const projects = document.querySelectorAll('.project');
    let currentIndex = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            project.classList.toggle('active', i === index);
        });
    }

    function nextProject() {
        currentIndex = (currentIndex + 1) % projects.length;
        showProject(currentIndex);
    }

    function prevProject() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        showProject(currentIndex);
    }

    // Call these functions to initialize the carousel
    showProject(currentIndex);
    document.getElementById('nextBtn').addEventListener('click', nextProject);
    document.getElementById('prevBtn').addEventListener('click', prevProject);

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Particle background initialization
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            // Add more particle settings as needed
        }
    });
});
