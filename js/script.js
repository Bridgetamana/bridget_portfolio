const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  audio.play();
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

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