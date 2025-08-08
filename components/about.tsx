import { Code, Users, Lightbulb, Target } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with excellent communication and problem-solving skills.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always learning new technologies and implementing creative solutions.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality results that meet business objectives.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A passionate React.js developer with over 3 years of experience building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I started my journey as a web developer 3+ years ago, diving deep into the React ecosystem. What began
                as curiosity about interactive user interfaces has evolved into a passion for creating seamless,
                performant web applications.
              </p>
              <p>
                Throughout my career, I've worked on diverse projects ranging from e-commerce platforms to complex
                dashboard applications. I believe in writing clean, maintainable code and staying updated with the
                latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-700 rounded-lg border border-slate-600 hover:border-mint-600 transition-colors duration-200"
              >
                <item.icon className="h-8 w-8 text-mint-500 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
