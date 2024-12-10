const circle = document.getElementById('circle');
const body = document.body;
var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.toggle('dark-mode', savedTheme === 'dark');
  if (savedTheme === 'dark') {
    circle.style.transform = 'rotate(180deg)';
  } else {
    circle.style.transform = 'rotate(0)';
  }
}

circle.addEventListener('click', function () {
  const isDarkMode = body.classList.toggle('dark-mode');

  if (isDarkMode) {
    audio.play(); 
  } else {
    audio2.play(); 
  }

  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  if (isDarkMode) {
    circle.style.transform = 'rotate(180deg)';
  } else {
    circle.style.transform = 'rotate(0)';
  }
});

if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  const skillSection = document.getElementById('skills');
  const skillItems = document.querySelectorAll('.skill-container .skills');
  const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 
  };

  const revealSkills = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('skill-reveal');
          }, index * 400); 
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const skillObserver = new IntersectionObserver(revealSkills, observerOptions);

  skillObserver.observe(skillSection);
});

document.addEventListener('DOMContentLoaded', () => {
  const projectSection = document.getElementById('projects');
  const projectItems = document.querySelectorAll('.project-clipping');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const revealProjects = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('project-reveal');
          }, index * 400);
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const projectObserver = new IntersectionObserver(revealProjects, observerOptions);

  projectObserver.observe(projectSection);
});

const customCursor = document.createElement('div');
customCursor.id = 'custom-cursor';
customCursor.textContent = 'View';
document.body.appendChild(customCursor);

let mouseX = 0, mouseY = 0;  
let cursorX = 0, cursorY = 0;
const delay = 0.15; 

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * delay;
  cursorY += (mouseY - cursorY) * delay;

  customCursor.style.left = `${cursorX}px`;
  customCursor.style.top = `${cursorY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();
const projectLinks = document.querySelectorAll('.project-clipping');

projectLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '1';
    customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  link.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '0';
    customCursor.style.transform = 'translate(-50%, -50%) scale(0)';
  });
});