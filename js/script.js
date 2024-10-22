const circle = document.getElementById('circle');
const body = document.body;
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

  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  if (isDarkMode) {
    circle.style.transform = 'rotate(180deg)';
  } else {
    circle.style.transform = 'rotate(0)';
  }
});
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
