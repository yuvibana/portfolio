import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Context API", "React Hooks", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather application providing detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "JavaScript", "CSS3", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-mint-600 transition-all duration-200 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-slate-700 text-mint-400 hover:bg-mint-600 hover:text-black border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-mint-600 text-mint-500 hover:bg-mint-600 hover:text-black bg-transparent"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-mint-600 text-mint-500 hover:bg-mint-600 hover:text-black bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-mint-600 text-mint-500 hover:bg-mint-600 hover:text-black bg-transparent"
          >
            <Github className="h-4 w-4 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
