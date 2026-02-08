import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Code, Users, Wrench, Target, Lightbulb } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        {/* Top: Education + Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              Education
            </h3>
            <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse"></div>
                    <GraduationCap className="relative z-10 text-purple-400 mt-1" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-white mb-2">
                      B.Tech in Computer Science and Engineering
                    </h4>
                    <p className="text-gray-300 mb-1">
                      Indian Institute of Information Technology (IIIT), Kalyani
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      2026 • CGPA: 7.0
                    </p>
                    <div className="space-y-2 bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong className="text-purple-400">Intermediate (XII):</strong> Mjptbcwrjc • GPA: 9.2
                      </p>
                      <p className="text-sm text-gray-300">
                        <strong className="text-purple-400">SSC (X):</strong> TGSMS Ramaram • GPA: 10.0
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              Certifications
            </h3>
            <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
                      <Award className="relative z-10 text-blue-400 mt-1" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1">Python for Data Science</h4>
                      <p className="text-sm text-gray-400">IBM • 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full blur-xl animate-pulse"></div>
                      <Code className="relative z-10 text-green-400 mt-1" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1">Full Stack Development</h4>
                      <p className="text-sm text-gray-400">Coursera • 2023</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom: Skills Summary + Leadership */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              Skills Summary
            </h3>
            <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-xl animate-pulse"></div>
                    <Wrench className="relative z-10 text-orange-400 mt-1" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Specialized in <span className="text-purple-400 font-medium">full-stack development</span> with expertise in React, Node.js, and Python. 
                      Strong foundation in <span className="text-pink-400 font-medium">machine learning</span> and data analytics, 
                      with hands-on experience in Power BI, TensorFlow, and modern ML frameworks.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">React</span>
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-medium border border-pink-500/30">Python</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">Power BI</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">ML</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              Leadership & Activities
            </h3>
            <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse"></div>
                    <Users className="relative z-10 text-purple-400 mt-1" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Active in <span className="text-purple-400 font-medium">hackathon organization</span> and student leadership. 
                      Currently serving as <span className="text-pink-400 font-medium">Vice President</span> at IIIT Kalyani 
                      and organizing technical events to foster innovation and collaboration.
                    </p>
                    <div className="space-y-2 bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong className="text-purple-400">Vice President</strong> • IIIT Kalyani (2024-2025)
                      </p>
                      <p className="text-sm text-gray-300">
                        <strong className="text-purple-400">Hackathon Organizer</strong> • StatusCode2 (2025)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
