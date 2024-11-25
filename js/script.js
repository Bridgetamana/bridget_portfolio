const circle = document.getElementById('circle');
const body = document.body;
var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3');
const savedTheme = localStorage.getItem('theme');

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

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
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-bar");
  const progressLabel = document.getElementById("progress-label");

  const progressValues = [25, 50, 75, 100];

  let currentProgress = 0;

  function updateProgress() {
    if (currentProgress < progressValues.length) {
      const value = progressValues[currentProgress];
      progressBar.style.width = `${value}%`;
      progressLabel.textContent = `${value}%`;
      currentProgress++;
    } else {
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
      }, 500); 
      clearInterval(progressInterval);
    }
  }

  const progressInterval = setInterval(updateProgress, 1000); 
});
