const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aut aliquid temporibus laboriosam vel mollitia, ex tenetur neque omnis explicabo quia. Consectetur labore sit incidunt, qui nulla magni vitae illo!",
    tools: ["HTML", "CSS", "JavaScript"],
    image: "images/bridget-photo.webp",
    demoLink: "https://example.com",
    repoLink: ""
  },
  {
    id: 2,
    title: "Project Two",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aut aliquid temporibus laboriosam vel mollitia, ex tenetur neque omnis explicabo quia. Consectetur labore sit incidunt, qui nulla magni vitae illo!",
    tools: ["React", "Node.js", "Express"],
    image: "images/bridget-photo.webp",
    demoLink: "https://example.com",
    repoLink: ""
  },

  {
    id: 3,
    title: "Project Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aut aliquid temporibus laboriosam vel mollitia, ex tenetur neque omnis explicabo quia. Consectetur labore sit incidunt, qui nulla magni vitae illo!",
    tools: ["React", "Node.js", "Express"],
    image: "images/bridget-photo.webp",
    demoLink: "https://example.com",
    repoLink: ""
  },

  {
    id: 4,
    title: "Project Four",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aut aliquid temporibus laboriosam vel mollitia, ex tenetur neque omnis explicabo quia. Consectetur labore sit incidunt, qui nulla magni vitae illo!",
    tools: ["React", "Node.js", "Express"],
    image: "images/bridget-photo.webp",
    demoLink: "https://example.com",
    repoLink: ""
  },
];

const params = new URLSearchParams(window.location.search);
const projectId = parseInt(params.get("id")) || 1;

const currentProject = projects.find(project => project.id === projectId);

if (currentProject) {
  document.getElementById("project-title").textContent = currentProject.title;
  document.getElementById("project-description").textContent = currentProject.description;

  const toolsList = document.getElementById("project-tools");
  toolsList.innerHTML = '';
  currentProject.tools.forEach(tool => {
    const li = document.createElement("li");
    li.textContent = tool;
    toolsList.appendChild(li);
  });

  document.getElementById("project-image").src = currentProject.image;
  document.getElementById("project-image").alt = currentProject.title;

  document.getElementById("project-demo").href = currentProject.demoLink;
  document.getElementById("project-repo").href = currentProject.repoLink;
}

const prevButton = document.getElementById("prev-project");
const nextButton = document.getElementById("next-project");

const prevProjectId = projectId > 1 ? projectId - 1 : projects.length;
const nextProjectId = projectId < projects.length ? projectId + 1 : 1;

prevButton.href = `project.html?id=${prevProjectId}`;
nextButton.href = `project.html?id=${nextProjectId}`;