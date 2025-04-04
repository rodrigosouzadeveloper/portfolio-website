import Link from "next/link"

interface HeaderProps {
  showBackLink?: boolean
}

export default function Header({ showBackLink = false }: HeaderProps) {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-blue-600 font-bold text-xl">
          <span>rodrigo</span>
          <span className="text-gray-800">souza</span>
          <span className="text-blue-600">.dev</span>
        </Link>

        {showBackLink ? (
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Voltar
          </Link>
        ) : (
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Início
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900">
              Habilidades
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900">
              Projetos
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

