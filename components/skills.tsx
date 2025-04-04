import type React from "react"
import { Code, Server, Database, Wrench } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Habilidades Técnicas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory
            icon={<Code className="w-8 h-8 text-blue-600" />}
            title="Frontend"
            skills={["React.js", "HTML/CSS", "JavaScript", "Next.js", "React Native"]}
          />

          <SkillCategory
            icon={<Server className="w-8 h-8 text-blue-600" />}
            title="Backend"
            skills={["Node.js", "JavaScript", "TypeScript", "Go", "Java"]}
          />

          <SkillCategory
            icon={<Database className="w-8 h-8 text-blue-600" />}
            title="Database"
            skills={["MongoDB", "MySQL", "PostgreSQL", "DynamoDB"]}
          />

          <SkillCategory
            icon={<Wrench className="w-8 h-8 text-blue-600" />}
            title="Tools"
            skills={["Git", "Docker", "AWS", "CI/CD"]}
          />
        </div>
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  icon: React.ReactNode
  title: string
  skills: string[]
}

function SkillCategory({ icon, title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill) => (
            <li key={skill} className="text-gray-600">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

