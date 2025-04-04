import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Contato</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              icon={<Mail className="w-5 h-5 text-blue-600" />}
              title="Email"
              content="rodrigo@rodrigosouza.dev"
            />

            <ContactInfo
              icon={<MapPin className="w-5 h-5 text-blue-600" />}
              title="Location"
              content="Brasília, DF, Brasil"
            />

            <div className="flex space-x-4 pt-4">
              <SocialLink href="https://www.linkedin.com/in/rodrigo-augusto-santos-de-souza/" label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialLink>

              <SocialLink href="https://github.com/rodrigosouzadeveloper" label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </SocialLink>

              {/* <SocialLink href="https://twitter.com" label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </SocialLink> */}
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Nome" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Textarea placeholder="Mensagem" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  content: string
}

function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  label: string
  children: React.ReactNode
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
    >
      {children}
    </a>
  )
}

