import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Server, Brain, Wrench, Code, Database, Cpu } from "lucide-react"

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Skills */}
          <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in">
            <CardContent className="flex flex-col items-center p-8 gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse"></div>
                <Monitor className="relative z-10 h-16 w-16 text-purple-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">React Js</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Redux</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Next Js</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Angular Js</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">HTML</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">CSS</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">JavaScript</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Bootstrap</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">jQuery</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in">
            <CardContent className="flex flex-col items-center p-8 gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
                <Server className="relative z-10 h-16 w-16 text-blue-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Backend</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Node Js</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Express Js</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Graph QL</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Python</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Django</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">MySQL</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Postgresql</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">MongoDB</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Java</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Firebase</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Machine Learning Skills */}
          <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in">
            <CardContent className="flex flex-col items-center p-8 gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full blur-xl animate-pulse"></div>
                <Brain className="relative z-10 h-16 w-16 text-green-400 group-hover:text-green-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Machine Learning</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Python</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Tensorflow</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Keras</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Jupyter</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Google Colab</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Sk Learn Kit</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Others Skills */}
          <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in">
            <CardContent className="flex flex-col items-center p-8 gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-xl animate-pulse"></div>
                <Wrench className="relative z-10 h-16 w-16 text-orange-400 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Others</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Git</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">GitHub</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Netlify</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Vercel</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">VS Code</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Postman</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Data Structures</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Algorithms</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">C</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">C++</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">OOPs</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Figma</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Power BI</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Excel</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">SQL</Badge>
                <Badge variant="secondary" className="px-4 py-2 m-1 text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300">Data Visualization</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills