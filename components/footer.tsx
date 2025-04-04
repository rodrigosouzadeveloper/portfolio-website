import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span>rodrigo</span>
            <span className="text-blue-400">souza</span>
            <span>.dev</span>
          </Link>

          <div className="mt-4 md:mt-0">
            <p className="text-gray-400">© 2025 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

