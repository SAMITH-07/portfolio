import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Mail, Github, Linkedin, ExternalLink, Download, Sparkles } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Profile */}
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
            <img
              src={profilePhoto}
              alt="Dhanavath Samith Raj"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-500/50 shadow-2xl object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>

        {/* Name */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dhanavath Samith Raj</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-white font-medium">Full-Stack Developer & Data Analyst</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          B.Tech CSE student at IIIT Kalyani with experience in full-stack development, REST APIs, and ML projects. 
          Skilled in data analytics, visualization, and databases. Active in hackathon organization and student leadership.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <EnhancedButton 
            variant="default" 
            size="lg" 
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="#projects" className="flex items-center gap-2">
              <Github size={20} />
              View Projects
            </a>
          </EnhancedButton>

          <EnhancedButton 
            variant="outline" 
            size="lg" 
            asChild
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300"
          >
            <a href="#contact" className="flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a>
          </EnhancedButton>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          <a
            href="mailto:dhanavathsamithraj777@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://linkedin.com/in/dhanavathsamithraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://github.com/SAMITH-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          <a
            href="https://samith-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            aria-label="Portfolio"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
