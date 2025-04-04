import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/lib/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48 bg-gray-100">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <Button variant="link" asChild className="p-0">
          <Link href={`/projects/${project.id}`}>View Details →</Link>
        </Button>
      </div>
    </div>
  )
}

