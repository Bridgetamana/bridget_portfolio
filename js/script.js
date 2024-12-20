const circle = document.getElementById('circle');
const body = document.body;
var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3');
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
  audio.play(); 

  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  circle.style.transform = isDarkMode ? 'rotate(180deg)' : 'rotate(0)';
});

if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  circle.style.transform = 'rotate(180deg)';
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


document.addEventListener('DOMContentLoaded', async () => {
  const eyeButton = document.querySelector('.eye-button');
  const viewCount = document.querySelector('.view-count');

  const BIN_URL = 'https://api.jsonbin.io/v3/b/6764b684ad19ca34f8de0b0c'; 
  const API_KEY = '$2a$10$TWV99gKUm1V0FqY2K6Mcqu.rTUQjiVq9x5P61uEuLYJsEULdloipy'; 

  async function getVisitorIP() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP:', error);
      return null;
    }
  }

  async function fetchBinData() {
    const response = await fetch(BIN_URL, {
      headers: {
        'X-Master-Key': API_KEY
      }
    });
    const result = await response.json();
    return result.record;
  }

  async function updateBinData(data) {
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY
      },
      body: JSON.stringify(data)
    });
  }

  const visitorIP = await getVisitorIP();
  if (!visitorIP) {
    eyeButton.classList.add('disabled');
    return;
  }

  const binData = await fetchBinData();
  viewCount.textContent = binData.totalClicks;

  if (binData.clickedIPs.includes(visitorIP)) {
    eyeButton.classList.add('disabled');
  }

  eyeButton.addEventListener('click', async () => {
    if (!eyeButton.classList.contains('disabled')) {
      binData.totalClicks += 1;
      binData.clickedIPs.push(visitorIP);

      await updateBinData(binData);

      viewCount.textContent = binData.totalClicks;
      eyeButton.classList.add('clicked', 'disabled');

      setTimeout(() => {
        eyeButton.classList.remove('clicked');
      }, 500);
    }
  });
});


// document.addEventListener('DOMContentLoaded', () => {
//   const eyeButton = document.querySelector('.eye-button');
//   const viewCount = document.querySelector('.view-count');
//   const STORAGE_KEY = 'portfolio_view_count';
//   const USER_CLICKED_KEY = 'user_clicked';
  
//   // Initialize view count from localStorage or set to 0
//   let count = parseInt(localStorage.getItem(STORAGE_KEY) || '0');
//   viewCount.textContent = count.toString();
  
//   // Check if user has already clicked
//   const hasClicked = localStorage.getItem(USER_CLICKED_KEY) === 'true';
  
//   eyeButton.addEventListener('click', () => {
//     if (!hasClicked) {
//       // Increment count
//       count++;
//       viewCount.textContent = count.toString();
      
//       // Save to localStorage
//       localStorage.setItem(STORAGE_KEY, count.toString());
//       localStorage.setItem(USER_CLICKED_KEY, 'true');
      
//       // Add animation class
//       eyeButton.classList.add('clicked');
      
//       // Remove animation class after animation completes
//       setTimeout(() => {
//         eyeButton.classList.remove('clicked');
//       }, 500);
      
//       // Disable button
//       eyeButton.style.cursor = 'default';
//       eyeButton.style.opacity = '0.7';
//     }
//   });
  
//   // If user has already clicked, disable button
//   if (hasClicked) {
//     eyeButton.style.cursor = 'default';
//     eyeButton.style.opacity = '0.7';
//   }
// });