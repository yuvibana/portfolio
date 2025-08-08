import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "john.doe@example.com",
      href: "mailto:john.doe@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from
              you. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center border border-mint-800">
                    <info.icon className="h-6 w-6 text-mint-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">{info.title}</h4>
                    <a href={info.href} className="text-slate-300 hover:text-mint-400 transition-colors duration-200">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border border-slate-600">
              <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
              <p className="text-slate-300">
                I typically respond to emails within 24 hours. For urgent matters, feel free to call or connect with me
                on LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full bg-slate-700 border-slate-600 focus:border-mint-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-slate-700 border-slate-600 focus:border-mint-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-700 border-slate-600 focus:border-mint-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-700 border-slate-600 focus:border-mint-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project or how I can help you..."
                  className="w-full bg-slate-700 border-slate-600 focus:border-mint-600 text-white placeholder:text-slate-400"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-mint-600 hover:bg-mint-700 text-black font-medium">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
