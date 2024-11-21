const projects = [
  {
    id: 1,
    title: "EventHub",
    description: "EventHub is a comprehensive event management and ticketing platform designed to simplify the process of creating, managing, and promoting events. It provides a seamless experience for both event organizers and attendees.",
    challenges: "The development journey of EventHub came with its fair share of challenges. Early in the development process, I encountered a persistent Firebase authentication error (auth/invalid API key). This error occurred because Firebase wasn't properly initialized in the application - the API keys weren't being loaded correctly from the environment variables. Thanks to stackoverflow, I discovered that Vite handles environment variables differently from Create React App, requiring the 'VITE_' prefix for all environment variables. This was a valuable learning experience about environment configuration in Vite projects. Another significant challenge was creating authentic and meaningful content for the platform. Unlike many portfolio projects that rely on Lorem Ipsum placeholders, I wanted EventHub to feel like a real-world application. This meant crafting genuine event descriptions, realistic pricing structures, and authentic user testimonials. This process, while time-consuming, helped me better understand the event management industry and user expectations.",
    tools: ["React + Vite", "Firebase", "React Hook Form", "Paystack Integration", "TailwindCSS", "Framer Motion",],
    features: ["Real-time sales tracking", "Responsive event pages",],
    image: "images/bridget-photo.webp",
    demoLink: "https://event-central.vercel.app/",
    repoLink: ""
  },
  {
    id: 2,
    title: "Academia LMS",
    description: "A comprehensive learning platform developed during an intensive 4-day hackathon, designed to bridge the gap between educators and students. This LMS focuses on creating an efficient and engaging learning environment with real-time features and intuitive task management.",
    challenges: "Developing an LMS during a 4-day hackathon was an exhilarating yet challenging experience. Working with a teammate, we faced the intense pressure of building a functional platform under severe time constraints. One of our biggest challenges was deciding which features to prioritize – we had ambitious plans but needed to be realistic about what we could accomplish in just four days. This led to some tough decisions about feature scope, but ultimately helped us focus on delivering core functionalities that would provide real value to users.",
    tools: ["Next.js", "TailwindCSS", "Daisy UI", "Zustand"],
    features: ["Announcements board", "Deadline reminders", "Document sharing"],
    image: "images/bridget-photo.webp",
    demoLink: "https://academia-hazel.vercel.app/",
    repoLink: ""
  },

  {
    id: 3,
    title: "Word Unscrambler",
    description: "The Word Unscrambler is a web application that allows users to input a scrambled word and see all valid English word combinations that can be formed from the given letters.",
    challenges: "Building this Word Unscrambler presented several interesting technical challenges that required careful consideration and creative solutions. The initial hurdle was finding a suitable free and reliable dictionary API for word validation, which led to the selection of the Dictionary API for its simplicity and effectiveness. This choice introduced its own challenge with rate limiting, which was addressed by implementing a batch processing system that sends multiple word validation requests simultaneously and includes intelligent retry logic for handling 429 errors. Performance optimization was another critical concern, particularly given the potentially large number of permutations that needed to be processed. This was resolved through the implementation of efficient data structures and algorithms, combined with the batch processing approach, ensuring the application remains responsive even when handling larger input strings. The resulting solution strikes a balance between API efficiency, performance optimization, and user experience, making the Word Unscrambler both practical and efficient for daily use.",
    tools: ["HTML", "JavaScript", "CSS"],
    image: "images/bridget-photo.webp",
    demoLink: "https://bridgetamana.github.io/word-unscrambler.github.io/",
    repoLink: ""
  },

  {
    id: 4,
    title: "Timbu online store",
    description: "Timbu Store is a mini e-commerce platform that leverages the Timbu API to provide users with a seamless online shopping experience. This project demonstrates the implementation of core e-commerce functionalities while focusing on type safety and responsive design.",
    challenges: "Building Timbu Store presented an interesting set of challenges, particularly with API integration. The most significant hurdle was dealing with CORS (Cross-Origin Resource Sharing) issues that initially prevented the application from communicating with the Timbu API. What seemed like a straightforward API integration turned into days of troubleshooting and learning about web security protocols. I explored various solutions, from implementing proxy servers to modifying request headers, ultimately finding a way to handle the CORS restrictions effectively. While the application's core functionality might appear simple, overcoming these technical barriers required deep diving into web security concepts and API integration best practices. This experience not only improved my problem-solving skills but also enhanced my understanding of modern web security considerations and API consumption patterns. The project also served as a practical exercise in TypeScript implementation. Converting API responses into strongly-typed interfaces and ensuring type safety across component boundaries helped create a more robust and maintainable codebase. While initially adding some development overhead, the use of TypeScript proved invaluable in catching potential errors early in the development process and providing better code documentation through type definitions.",
    tools: ["TypeScript", "React", "Timbu Api", "Context API"],
    features: ["Dynamic product listing from Timbu API", "Detailed product view", "Product search functionality", "Price range filters"],
    image: "images/bridget-photo.webp",
    demoLink: "https://gadgety-store.vercel.app/",
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