import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux", "Context API", "React Hooks"],
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "CSS Grid", "Flexbox"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "Visual Studio Code", "Visual Studio", "NPM", "Webpack"],
    },
    {
      title: "Deployment & Hosting",
      skills: ["Vercel", "Netlify", "GitHub Pages", "Firebase Hosting"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-700 p-6 rounded-lg border border-slate-600 hover:border-mint-600 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-slate-800 text-mint-400 hover:bg-mint-600 hover:text-black border-0"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-slate-700 p-8 rounded-lg border border-slate-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-mint-500">3+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mint-500">50+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mint-500">15+</div>
              <div className="text-slate-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
