"use client"
import { useRef } from "react"
import emailjs from "emailjs-com"
import { Card, CardContent } from "@/components/ui/card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Github, Linkedin, ExternalLink, Send, MessageSquare, Phone } from "lucide-react"

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        "service_4rf3ack",      // 👈 replace with EmailJS service ID
        "template_4dj2h12",     // 👈 replace with EmailJS template ID
        form.current,
        "GV-gARsYC-1GzeCrg"     // 👈 your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!")
          form.current?.reset()
        },
        (error) => {
          alert("❌ Failed to send: " + error.text)
        }
      )
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse"></div>
                    <MessageSquare className="relative z-10 text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="from_name" className="text-gray-300 font-medium">Full name</Label>
                    <Input
                      id="from_name"
                      name="from_name"
                      className="bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="from_email" className="text-gray-300 font-medium">Email address</Label>
                    <Input
                      id="from_email"
                      name="from_email"
                      type="email"
                      className="bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-gray-300 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                      required
                    />
                  </div>

                  <EnhancedButton
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </EnhancedButton>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
                    <Mail className="relative z-10 text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Contact Information</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-white mb-1">Email</p>
                      <a
                        href="mailto:dhanavathsamithraj777@gmail.com"
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        dhanavathsamithraj777@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-white mb-1">Location</p>
                      <p className="text-gray-300">IIIT Kalyani, West Bengal, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-white mb-1">Available for</p>
                      <p className="text-gray-300">Freelance projects & collaborations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full blur-xl animate-pulse"></div>
                    <Github className="relative z-10 text-green-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Connect With Me</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300 mb-6">
                    Let's connect and discuss technology, projects, or opportunities!
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/dhanavathsamithraj/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white hover:bg-white/20 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/SAMITH-07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white hover:bg-white/20 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <EnhancedButton 
            variant="outline" 
            size="lg" 
            asChild 
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300"
          >
            <a href="/resume.pdf" download className="inline-flex items-center gap-3">
              <ExternalLink size={20} />
              Download Resume
            </a>
          </EnhancedButton>
        </div>
      </div>
    </section>
  )
}

export default Contact
