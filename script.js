function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const title = section.querySelector('.section-title');
        title.addEventListener('mouseover', () => {
            section.classList.add('expanded');
        });
        title.addEventListener('mouseout', () => {
            if (!section.classList.contains('clicked') && !section.classList.contains('active')) {
                section.classList.remove('expanded');
            }
        });
        title.addEventListener('click', () => {
            sections.forEach(sec => {
                sec.classList.remove('clicked');
                sec.classList.remove('active');
            });
            section.classList.add('clicked');
            section.classList.add('active');
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                section.classList.remove('expanded');
                section.classList.remove('clicked');
                section.classList.remove('active');
            });

            targetSection.classList.add('expanded');
            targetSection.classList.add('clicked');
            targetSection.classList.add('active');

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    createSnowflakes();
    cycleLogo();
});

function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflakeContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }, 100);
}

function cycleLogo() {
    const logo = document.getElementById('logo');
    const fullName = "ChristianScialli";
    const initials = "CS";
    let index = 0;

    function typeWriter() {
        if (index < fullName.length) {
            logo.textContent += fullName.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        } else {
            setTimeout(() => {
                index = fullName.length;
                deleteWriter();
            }, 2000);
        }
    }

    function deleteWriter() {
        if (index > 0) {
            logo.textContent = fullName.substring(0, index - 1);
            index--;
            setTimeout(deleteWriter, 100);
        } else {
            logo.textContent = initials;
        }
    }

    typeWriter();
}