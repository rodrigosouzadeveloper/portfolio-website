import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Full Stack Developer
            <br />
            <span className="text-blue-600">Criando Soluções</span>
            <br />
            <span className="text-blue-600">Digitais</span>
          </h1>
          <p className="text-gray-600 text-lg">
          Olá, sou Rodrigo Souza, um desenvolvedor full-stack apaixonado com 8 anos de experiência em construção de aplicações. 
          Sou especialista em criar soluções eficientes, escaláveis ​​e fáceis de usar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="#contact">Entre em contato</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">Ver Projetos</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="https://lh3.googleusercontent.com/a/ACg8ocKUhf4k20h6b7ZO8b8cNeFDEkoIaWu8cLXMj1y_jFxhegatndPS=s288-c-no"
              alt="Rodrigo Souza"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

