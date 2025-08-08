import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior React Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Led development of complex React applications using modern hooks and context API",
        "Implemented state management solutions with Redux for large-scale applications",
        "Collaborated with cross-functional teams to deliver high-quality user experiences",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2022 - 2023",
      description: [
        "Developed responsive web applications using React.js and Tailwind CSS",
        "Integrated RESTful APIs and managed application state with Context API",
        "Optimized application performance and implemented best practices",
        "Worked closely with designers to implement pixel-perfect UI components",
      ],
    },
    {
      title: "Junior React Developer",
      company: "StartUp Innovations",
      location: "San Francisco, CA",
      period: "2021 - 2022",
      description: [
        "Built interactive user interfaces using React.js and modern JavaScript",
        "Implemented responsive designs with Bootstrap and custom CSS",
        "Participated in agile development processes and daily standups",
        "Contributed to code documentation and testing procedures",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">My professional journey in React development</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-mint-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-mint-600 rounded-full border-4 border-slate-900 shadow-md z-10 mint-glow"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-mint-600 transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <div className="flex items-center text-mint-500 text-sm mt-1 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-slate-300 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-300 flex items-start">
                          <span className="text-mint-500 mr-2 mt-1.5 text-xs">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
