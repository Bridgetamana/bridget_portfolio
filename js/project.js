const projects = [
  {
    id: 1,
    title: "EventHub",
    description: "EventHub is a comprehensive event management and ticketing platform designed to simplify the process of creating, managing, and promoting events. It provides a seamless experience for both event organizers and attendees.",
    challenges: "The development journey of EventHub came with its fair share of challenges. Early in the development process, I encountered a persistent Firebase authentication error (auth/invalid API key). This error occurred because Firebase wasn't properly initialized in the application - the API keys weren't being loaded correctly from the environment variables. Thanks to stackoverflow, I discovered that Vite handles environment variables differently from Create React App, requiring the 'VITE_' prefix for all environment variables. This was a valuable learning experience about environment configuration in Vite projects. Another significant challenge was creating authentic and meaningful content for the platform. Unlike many portfolio projects that rely on Lorem Ipsum placeholders, I wanted EventHub to feel like a real-world application. This meant crafting genuine event descriptions, realistic pricing structures, and authentic user testimonials. This process, while time-consuming, helped me better understand the event management industry and user expectations.",
    tools: ["React + Vite", "Firebase", "React Hook Form", "Paystack Integration", "TailwindCSS", "Framer Motion",],
    features: ["Real-time sales tracking", "Responsive event pages",],
    image: "images/EventCentral-screenshot.webp",
    moreImage: ["images/EventCentral-screenshot3.webp"],
    demoLink: "https://event-central.vercel.app/",
    repoLink: ""
  },
  {
    id: 2,
    title: "Academia LMS",
    description: "A comprehensive learning platform developed during an intensive 4-day hackathon, designed to bridge the gap between educators and students. This LMS focuses on creating an efficient and engaging learning environment with real-time features and intuitive task management. It's still UNDER CONSTRUCTION",
    challenges: "Developing an LMS during a 4-day hackathon was an exhilarating yet challenging experience. My teammate and I pushed ourselves to turn our idea into reality under intense time pressure. One of the toughest parts was figuring out which features to prioritize. We had so many ideas for what this platform could be, but with just four days, we had to make some tough calls and focus on the core functionalities that would deliver the most value. Despite the challenges, we delivered a functional LMS that we were proud of. There is still room for improvements, and I’m excited about the potential of expanding what we started!",
    tools: ["Next.js", "TailwindCSS", "Daisy UI", "Zustand"],
    features: ["Announcements board", "Deadline reminders", "Document sharing"],
    image: "./images/academia-screenshot1.webp",
    demoLink: "",
    repoLink: ""
  },

  {
    id: 3,
    title: "Word Unscrambler",
    description: "The Word Unscrambler is a web application that allows users to input a scrambled word and see all valid English word combinations that can be formed from the given letters.",
    challenges: "Building this Word Unscrambler was a fun challenge! The first hurdle was finding a free, reliable dictionary API for word validation. After some research, I went with the Dictionary API because it was simple and effective. Of course, that brought its own challenge: rate limits. To handle this, I built a batch processing system that sends multiple requests at once and retries automatically when limits are hit. While it’s not as fast as your typical word unscrambler yet, I’m actively working on refining it to get there.",
    tools: ["HTML", "JavaScript", "CSS"],
    image: "images/wordunscrambler-screenshot.webp",
    moreImage: ["images/wordunscrambler-screenshot1.webp", "images/wordunscrambler-screenshot2.webp", "images/wordunscrambler-screenshot3.webp"],
    demoLink: "https://bridgetamana.github.io/word-unscrambler.github.io/",
    repoLink: ""
  },

  {
    id: 4,
    title: "Timbu online store",
    description: "Timbu Store is a mini e-commerce platform that leverages the Timbu API to provide users with a seamless online shopping experience. This project demonstrates the implementation of core e-commerce functionalities while focusing on type safety and responsive design.",
    challenges: "Building Timbu Store presented an interesting set of challenges, particularly with API integration. The most significant hurdle was dealing with CORS (Cross-Origin Resource Sharing) issues that initially prevented the application from communicating with the Timbu API. What seemed like a straightforward API integration turned into days of troubleshooting and learning about web security protocols. I explored various solutions, from implementing proxy servers to modifying request headers, ultimately finding a way to handle the CORS restrictions effectively. While the application's core functionality might appear simple, overcoming these technical barriers required deep diving into web security concepts and API integration best practices.",
    tools: ["TypeScript", "React", "Timbu Api", "Context API"],
    features: ["Dynamic product listing from Timbu API", "Detailed product view", "Product search functionality", "Price range filters"],
    image: "images/onlinestore-screenshot (2).webp",
    moreImage: ["images/onlinestore-screenshot.webp",],
    demoLink: "https://gadgety-store.vercel.app/",
    repoLink: ""
  },
  {
    id: 5,
    title: "Sprout",
    description: "Sprout is a web-based plant care companion app designed to help plant enthusiasts discover, care for, and manage their plants. The platform provides tools for finding the perfect plant match, accessing expert care guides.",
    challenges: "Finding a free indoor plant API was a real challenge. I ended up with the Perenual API, which covers both indoor and outdoor plants. This meant I had to get creative with filtering to make it work for the app's specific needs. It wasn't perfect, but it got the job done. I've got tons of plans to expand this - thinking about adding more features, refining the plant matching, and making it even more user-friendly.",
    tools: ["React", "Perenual API", "Tailwind CSS", "GitHub Copilot"],
    features: [
      "Plant discovery based on user preferences",
      "Detailed plant care guides",
      "Responsive design for mobile and desktop"
    ],
    image: "images/sprout-screenshot.png",
    moreImage: [
      "images/sprout-screenshot2.png",
    ],
    demoLink: "https://sprout-ochre.vercel.app/",
    repoLink: "https://github.com/Bridgetamana/sprout"
  },
  {
    id: 6,
    title: "Focus",
    description: "Focus is a minimalistic, one-task-only to-do list designed to combat cognitive overload. Unlike traditional task managers, it displays only one task at a time, encouraging concentration and reducing the urge to multitask.",
    challenges: "Building Focus was all about solving my own productivity struggles. The biggest challenge was creating an interface that truly helps users concentrate. I had to think carefully about how to design something that keeps you focused on just one task. GitHub Copilot was a huge help, especially in cleaning up code and suggesting improvements. I've got tons of ideas to make this even better in the future.",
    tools: ["HTML", "CSS", "JavaScript", "GitHub Copilot"],
    features: [
      "Single task display",
      "Morale-boosting task completion",
      "Minimalist design",
      "Concentration-focused interface"
    ],
    image: "images/focus-screenshot.png",
    demoLink: "https://bridgetamana.github.io/focus.github.io/",
    repoLink: "https://github.com/Bridgetamana/focus.github.io"
  },
];

const params = new URLSearchParams(window.location.search);
const projectId = parseInt(params.get("id")) || 1;

const currentProject = projects.find(project => project.id === projectId);

if (currentProject) {
  document.getElementById("project-title").textContent = currentProject.title;
  document.getElementById("project-description").textContent = currentProject.description;
  document.getElementById("project-challenges").textContent = currentProject.challenges;
  const projectImageContainer = document.getElementById("project-image-container");
  projectImageContainer.innerHTML = `
    <picture>
      <img src="${currentProject.image}" alt="${currentProject.title}" loading="lazy" />
    </picture>
  `;

  const moreImagesContainer = document.getElementById("project-more-images");
  moreImagesContainer.innerHTML = '';
  if (currentProject.moreImage && currentProject.moreImage.length > 0) {
    currentProject.moreImage.forEach(imageSrc => {
      const picture = document.createElement("picture");
      picture.innerHTML = `
        <img src="${imageSrc}" alt="Additional image for ${currentProject.title}" class="additional-image" loading="lazy" />
      `;
      moreImagesContainer.appendChild(picture);
    });
  }

  const toolsList = document.getElementById("project-tools");
  toolsList.innerHTML = '';
  currentProject.tools.forEach(tool => {
    const li = document.createElement("li");
    li.textContent = tool;
    toolsList.appendChild(li);
  });

  const featuresList = document.getElementById("project-features");
  featuresList.innerHTML = '';
  if (currentProject.features) {
    currentProject.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }

  document.getElementById("project-demo").href = currentProject.demoLink;
  document.getElementById("project-repo").href = currentProject.repoLink;
}

const prevButton = document.getElementById("prev-project");
const nextButton = document.getElementById("next-project");

const prevProjectId = projectId > 1 ? projectId - 1 : projects.length;
const nextProjectId = projectId < projects.length ? projectId + 1 : 1;

prevButton.href = `project.html?id=${prevProjectId}`;
nextButton.href = `project.html?id=${nextProjectId}`;