// To add a new project, copy one { ... } block below, paste it at the top of the list
// and change the text. Leave live as "" if the project has no live demo.
const projects = [
  {
    title: "GreenBuddy AI Plant Doctor",
    description: "Upload a leaf photo and get the disease and treatment advice. A MobileNetV2 CNN trained on PlantVillage reaches 95.6% accuracy, and the app says when it is unsure instead of guessing.",
    image: "assets/projects/greenbuddy.png",
    tags: ["Python", "FastAPI", "TensorFlow", "React", "SQLAlchemy"],
    github: "https://github.com/Azi2001/GreenBuddy-AI-Plant-Doctor",
    live: "",
    demo: "https://youtu.be/wpq5tQQkfnA",
  },
  {
    title: "AI Job Tracker",
    description: "Track job applications through Applied, Interview, Offer and Rejected, with AI resume analysis and resume-to-job matching using a local Ollama model.",
    image: "assets/projects/ai-job-tracker.png",
    imageFit: "contain",
    tags: ["React", "FastAPI", "PostgreSQL", "Ollama", "JWT"],
    github: "https://github.com/Azi2001/AI-Job-Tracker",
    live: "",
    demo: "https://youtu.be/BHEeQsFC2no",
  },
  {
    title: "PrimeReserve",
    description: "Resource reservation system where admins manage shared resources and staff book them, with role-based access and automatic prevention of overlapping bookings.",
    image: "assets/projects/primereserve.png",
    imageFit: "contain",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Azi2001/PrimeReserve",
    live: "",
    demo: "https://youtu.be/8kTc3ouXxTg",
  },
  {
    title: "Craving Night",
    description: "Late-night food ordering app with categories, search, a cart, checkout, order tracking and an admin dashboard, with automated tests.",
    image: "assets/projects/craving-night.png",
    tags: ["Django", "Python", "SQLite", "HTML/CSS"],
    github: "https://github.com/Azi2001/craving-night",
    live: "https://azi2001.pythonanywhere.com/"
  }
];