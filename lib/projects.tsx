import type { ReactNode } from "react"

export interface ProjectType {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  duration: string
  teamSize: string
  role: string
  completion: string
  overview: string[]
  features: string[]
  challenges?: {
    title: string
    description: string
  }[]
  techStack: {
    name: string
    description?: string
    icon: ReactNode
  }[]
  testimonial?: {
    name: string
    role: string
    text: string
  }
}

export const featuredProjects = [
  {
    id: "e-commerce",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with admin dashboard, payment integration, and inventory management.",
    image: "/placeholder.svg?height=192&width=384",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "social-media",
    title: "Social Media App",
    description: "A social networking platform with real-time messaging, post sharing, and user interactions.",
    image: "/placeholder.svg?height=192&width=384",
    technologies: ["Vue.js", "Firebase", "WebSocket"],
  },
  {
    id: "project-management",
    title: "Project Management Tool",
    description: "A comprehensive project management solution with task tracking, team collaboration, and analytics.",
    image: "/placeholder.svg?height=192&width=384",
    technologies: ["Angular", "Python", "PostgreSQL"],
  },
]

export const projects: ProjectType[] = [
  {
    id: "e-commerce",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with admin dashboard, payment integration, and inventory management.",
    fullDescription:
      "A comprehensive e-commerce solution built with modern technologies, featuring robust admin capabilities and seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "AWS"],
    duration: "6 months",
    teamSize: "4 developers",
    role: "Lead Developer",
    completion: "2025",
    overview: [
      "This e-commerce platform was developed to provide a complete solution for online retailers. The platform includes features such as inventory management, order processing, customer management, and analytics dashboard.",
      "The application was built with scalability in mind, utilizing microservices architecture and implementing robust security measures to protect sensitive user data.",
    ],
    features: [
      "Real-time inventory tracking and management",
      "Secure payment gateway integration with multiple providers",
      "Advanced analytics and reporting dashboard",
      "Customer relationship management system",
    ],
    challenges: [
      {
        title: "Performance Optimization",
        description:
          "Implemented Redis caching and optimized database queries to handle high traffic loads efficiently.",
      },
      {
        title: "Security Implementation",
        description: "Developed robust authentication system and implemented encryption for sensitive data storage.",
      },
    ],
    techStack: [
      {
        name: "React.js with Redux",
        description: "For building the user interface with state management",
        icon: <div className="text-blue-600">R</div>,
      },
      {
        name: "Node.js & Express",
        description: "Backend API and server-side logic",
        icon: <div className="text-green-600">N</div>,
      },
      {
        name: "MongoDB Atlas",
        description: "Database for storing application data",
        icon: <div className="text-green-700">M</div>,
      },
      {
        name: "AWS Services",
        description: "Cloud infrastructure and deployment",
        icon: <div className="text-orange-500">A</div>,
      },
    ],
    testimonial: {
      name: "Michael Johnson",
      role: "CTO",
      text: "The e-commerce platform has significantly improved our operations and customer satisfaction. The team delivered exceptional quality work.",
    },
  },
  {
    id: "social-media",
    title: "Social Media App",
    description: "A social networking platform with real-time messaging, post sharing, and user interactions.",
    fullDescription:
      "A modern social networking application that connects users through real-time features and intuitive design.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Firebase", "WebSocket"],
    duration: "8 months",
    teamSize: "3 developers",
    role: "Frontend Developer",
    completion: "2024",
    overview: [
      "This social media application was designed to provide users with a seamless platform for connecting with friends, sharing content, and engaging in real-time conversations.",
      "The platform features a responsive design that works across all devices and incorporates modern UX principles to enhance user engagement.",
    ],
    features: [
      "Real-time messaging with read receipts",
      "Content sharing with rich media support",
      "User profile customization",
      "Privacy controls and content moderation",
    ],
    challenges: [
      {
        title: "Real-time Communication",
        description:
          "Implemented WebSocket technology to enable instant messaging and notifications without page refreshes.",
      },
      {
        title: "Media Optimization",
        description: "Developed a system for compressing and optimizing user-uploaded media to improve loading times.",
      },
    ],
    techStack: [
      {
        name: "Vue.js",
        description: "Frontend framework for building the user interface",
        icon: <div className="text-green-600">V</div>,
      },
      {
        name: "Firebase",
        description: "Backend services including authentication and database",
        icon: <div className="text-orange-500">F</div>,
      },
      {
        name: "WebSocket",
        description: "For real-time communication features",
        icon: <div className="text-blue-600">W</div>,
      },
    ],
    testimonial: {
      name: "Sarah Williams",
      role: "Product Manager",
      text: "The social media platform exceeded our expectations in terms of performance and user engagement. The real-time features are particularly impressive.",
    },
  },
  {
    id: "project-management",
    title: "Project Management Tool",
    description: "A comprehensive project management solution with task tracking, team collaboration, and analytics.",
    fullDescription:
      "An enterprise-grade project management system designed to streamline workflows and enhance team productivity.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Angular", "Python", "PostgreSQL"],
    duration: "10 months",
    teamSize: "5 developers",
    role: "Full Stack Developer",
    completion: "2023",
    overview: [
      "This project management tool was developed to help teams organize tasks, track progress, and collaborate effectively on projects of any size.",
      "The application includes features for task assignment, deadline tracking, file sharing, and performance analytics to help teams optimize their workflows.",
    ],
    features: [
      "Kanban and Gantt chart views for task management",
      "Team collaboration with comments and file sharing",
      "Time tracking and resource allocation",
      "Performance analytics and reporting",
    ],
    challenges: [
      {
        title: "Complex Data Visualization",
        description: "Implemented interactive charts and graphs to display project metrics and team performance data.",
      },
      {
        title: "Integration Capabilities",
        description: "Developed an API system that allows the tool to integrate with other business applications.",
      },
    ],
    techStack: [
      {
        name: "Angular",
        description: "Frontend framework for building the user interface",
        icon: <div className="text-red-600">A</div>,
      },
      {
        name: "Python",
        description: "Backend API and server-side logic",
        icon: <div className="text-blue-600">P</div>,
      },
      {
        name: "PostgreSQL",
        description: "Relational database for storing application data",
        icon: <div className="text-blue-800">P</div>,
      },
    ],
    testimonial: {
      name: "David Chen",
      role: "Engineering Manager",
      text: "This tool has transformed how our team manages projects. The intuitive interface and powerful features have significantly improved our productivity.",
    },
  },
]

export function getProjectById(id: string): ProjectType | undefined {
  return projects.find((project) => project.id === id)
}

