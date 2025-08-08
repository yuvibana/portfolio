import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">John Doe</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-300 mb-6">React.js Developer with 3+ Years Experience</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Passionate about creating dynamic, user-friendly web applications using modern React ecosystem. I
              specialize in building scalable frontend solutions with clean, maintainable code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-mint-600 hover:bg-mint-700 text-black font-medium">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-mint-600 text-mint-400 hover:bg-mint-600/10 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-mint-600 hover:text-black transition-all duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-mint-600 hover:text-black transition-all duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:john@example.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-mint-600 hover:text-black transition-all duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-mint-600 to-slate-800 rounded-full flex items-center justify-center mint-glow">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Developer Portrait"
                  className="w-72 h-72 rounded-full object-cover border-4 border-slate-900 shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-mint-600 rounded-full flex items-center justify-center animate-bounce text-black">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
