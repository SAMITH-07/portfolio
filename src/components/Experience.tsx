import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Briefcase, Calendar, Building, Users, TrendingUp } from "lucide-react"

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const experiences = [
    {
      title: "IPO Web App & REST API Development",
      company: "Bluestock",
      period: "2024",
      description:
        "Developed a full-stack IPO management web application with a secure, scalable REST API to support mobile integration. Implemented user authentication, real-time IPO listings, and investor data handling with optimized queries and robust error handling. Ensured API reliability with JWT security and Postman-tested endpoints.",
      technologies: ["React.js", "Node.js", "REST API", "JWT Authentication", "Database Optimization", "Postman", "Full-Stack Development"],
      category: "SDE"
    },
    {
      title: "Data Science & Analytics Intern",
      company: "Amdox Technologies",
      period: "2026",
      description: "Built time-series forecasting models using ARIMA, LSTM, and Prophet to analyze cryptocurrency trends. Performed data cleaning, preprocessing, and exploratory analysis using Python and Pandas. Developed interactive dashboards using Streamlit and Plotly to visualize trends and predictive insights.",
      technologies: [
        "Python",
        "Pandas",
        "ARIMA",
        "LSTM",
        "Prophet",
        "Streamlit",
        "Plotly",
        "Time Series Forecasting",
        "Data Analysis"
      ],
      category: "Data Analytics"
    },

    {
      title: "Data Analytics Intern",
      company: "NoviTech R&D Pvt Ltd",
      period: "2026",
      description: "Designed and developed Power BI dashboards for business reporting and KPI tracking. Conducted data transformation and analysis using Excel and SQL. Delivered actionable insights for sales, HR, and retail performance optimization through data-driven reporting.",
      technologies: [
        "Power BI",
        "Excel",
        "SQL",
        "Data Cleaning",
        "KPI Analysis",
        "Data Visualization",
        "Business Analytics"
      ],
      category: "Data Analytics"
    }

  ];

  const filteredExperiences = activeFilter === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === activeFilter);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
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
            variant={activeFilter === 'SDE' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('SDE')}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
          >
            SDE
          </EnhancedButton>
          <EnhancedButton
            variant={activeFilter === 'Data Analytics' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('Data Analytics')}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
          >
            Data Analytics
          </EnhancedButton>
        </div>

        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse"></div>
                      {exp.category === 'Projects' ? (
                        <TrendingUp className="relative z-10 text-blue-400" size={28} />
                      ) : (
                        <TrendingUp className="relative z-10 text-blue-400" size={28} />
                      )}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Calendar size={18} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-medium text-purple-400 mb-3">{exp.company}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
