import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4 gradient-text">{"<Dev />"}</div>
            <p className="text-slate-400 leading-relaxed">
              React.js Developer passionate about creating amazing web experiences. Let's build something great
              together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-mint-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>john.doe@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com"
                className="p-2 bg-slate-800 rounded-lg hover:bg-mint-600 hover:text-black transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-slate-800 rounded-lg hover:bg-mint-600 hover:text-black transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:john@example.com"
                className="p-2 bg-slate-800 rounded-lg hover:bg-mint-600 hover:text-black transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center">
            © {currentYear} John Doe. Made with <Heart className="h-4 w-4 mx-1 text-mint-500" />
            and React.js
          </p>
        </div>
      </div>
    </footer>
  )
}
