import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Github, ExternalLink, Bot, BarChart3, Calendar, BookOpen, Monitor, Brain, PieChart, TrendingUp, Database, Leaf, Mail, HeartPulse, LocateFixed, Code } from "lucide-react"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Travelobia – Travel Feasibility Assessment API",
      description:
        "Built an API that evaluates travel destination feasibility using weather, political advisories, and flight & hotel prices. Implemented a weighted scoring system to rank destinations and assist travelers with data-driven decisions.",
      icon: <Calendar className="text-purple-400" size={24} />,
      technologies: ["Node.js", "Express.js", "JavaScript", "REST APIs", "Data Aggregation"],
      year: "2024",
      category: "WEB APP'S",
      github: "",
      demo: ""
    },
    {
      title: "Sanskrit Sandhi Splitter",
      description:
        "Designed a hybrid rule-based and machine learning model for Sanskrit Sandhi splitting using Bi-LSTM and Seq2Seq architectures. Focused on accurate Sandhi boundary detection and sequence prediction for complex word formations.",
      icon: <BookOpen className="text-purple-400" size={24} />,
      technologies: ["Python", "NLP", "Bi-LSTM", "Seq2Seq", "Machine Learning"],
      year: "2023–2024",
      category: "MACHINE LEARNING",
      github: "",
      demo: ""
    },
    {
      title: "Weather Forecasting Website",
      description:
        "Created a real-time weather web application using OpenWeatherMap API. Displays temperature, wind, humidity, pressure, visibility, sunrise/sunset, and a 5-day forecast with dynamic backgrounds and responsive UI.",
      icon: <ExternalLink className="text-purple-400" size={24} />,
      technologies: ["JavaScript", "HTML/CSS", "OpenWeatherMap API", "Frontend Development"],
      year: "2023",
      category: "WEB APP'S",
      github: "",
      demo: ""
    },
    {
      title: "Sales Performance Dashboard",
      description:
        "Comprehensive Power BI dashboard for sales performance analysis with interactive visualizations, DAX measures, and automated data refresh. Enables real-time tracking of sales metrics, regional performance, and trend analysis.",
      icon: <BarChart3 className="text-purple-400" size={24} />,
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "Visualization", "SQL"],
      year: "2024",
      category: "POWER BI",
      github: "",
      demo: ""
    },
    {
      title: "Customer Analytics Dashboard",
      description:
        "Customer behavior analytics dashboard with segmentation analysis, purchase patterns, and churn prediction. Integrated multiple data sources and created automated reporting system for business intelligence.",
      icon: <PieChart className="text-purple-400" size={24} />,
      technologies: ["Power BI", "Excel", "SQL", "Customer Analytics", "Data Visualization", "Reporting"],
      year: "2024",
      category: "POWER BI",
      github: "",
      demo: ""
    },
    {
      title: "Financial Data Analysis Tool",
      description:
        "Financial analysis tools using advanced Excel functions and Power BI for budget tracking, expense analysis, and forecasting. Created automated reports and dashboards for financial monitoring.",
      icon: <TrendingUp className="text-purple-400" size={24} />,
      technologies: ["Excel", "Power BI", "Financial Analysis", "Data Modeling", "Advanced Excel", "Reporting"],
      year: "2024",
      category: "POWER BI",
      github: "",
      demo: ""
    },
    {
      title: "Leaf Disease Detection",
      description:
        "A CNN-based leaf disease detection system for multiple plant types. Uses deep learning techniques to identify and classify various plant diseases from leaf images with high accuracy.",
      icon: <Leaf className="text-green-400" size={24} />,
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning", "Computer Vision"],
      year: "2024",
      category: "MACHINE LEARNING",
      github: "https://github.com/DhanavathSamithRaj/leaf-disease-detection",
      demo: ""
    },
    {
      title: "Email Spam Detection NLP",
      description:
        "Email Spam Detection system using Natural Language Processing and Machine Learning. Classifies emails as spam or legitimate using advanced NLP techniques and ML algorithms.",
      icon: <Mail className="text-green-400" size={24} />,
      technologies: ["Python", "NLP", "Machine Learning", "Text Classification", "Natural Language Processing"],
      year: "2024",
      category: "MACHINE LEARNING",
      github: "https://github.com/DhanavathSamithRaj/email-spam-detection-nlp",
      demo: ""
    },
    {
      title: "Object Tracking Color Detection",
      description:
        "Computer vision project for object tracking and color detection in real-time video streams. Implements advanced algorithms for multi-object tracking and color-based object recognition.",
      icon: <LocateFixed className="text-green-400" size={24} />,
      technologies: ["Python", "OpenCV", "Computer Vision", "Object Detection", "Color Detection", "Real-time Processing"],
      year: "2024",
      category: "MACHINE LEARNING",
      github: "https://github.com/DhanavathSamithRaj/object-tracking-color-detection",
      demo: ""
    },
    {
      title: "Heart Disease Prediction",
      description:
        "Machine learning model for predicting heart disease using medical datasets. Implements classification algorithms to assess heart disease risk factors and provide accurate predictions.",
      icon: <HeartPulse className="text-green-400" size={24} />,
      technologies: ["Python", "Machine Learning", "Classification", "Medical AI", "Data Analysis", "Scikit-learn"],
      year: "2024",
      category: "MACHINE LEARNING",
      github: "https://github.com/DhanavathSamithRaj/heart-disease-prediction",
      demo: ""
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <EnhancedButton
            variant={activeFilter === 'All' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('All')}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
          >
            All
          </EnhancedButton>
          <EnhancedButton
            variant={activeFilter === 'WEB APP\'S' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('WEB APP\'S')}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
          >
            WEB APP'S
          </EnhancedButton>
          <EnhancedButton
            variant={activeFilter === 'MACHINE LEARNING' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('MACHINE LEARNING')}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
          >
            MACHINE LEARNING
          </EnhancedButton>
          <EnhancedButton
            variant={activeFilter === 'POWER BI' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('POWER BI')}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
          >
            POWER BI
          </EnhancedButton>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {project.icon}
                    <span className="text-sm text-purple-400 font-medium">{project.year}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-100 rounded-full text-xs font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <EnhancedButton variant="outline" size="sm" asChild className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </EnhancedButton>
                  )}
                  {project.demo && (
                    <EnhancedButton variant="outline" size="sm" asChild className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </EnhancedButton>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
