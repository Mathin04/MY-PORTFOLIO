"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  Menu,
  X,
  MessageSquare,
  FileText,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = {
    "Programming Languages": ["Java", "SQL", "JavaScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["React.js", "Django"],
    "Database Management": ["MySQL"],
    "Tools & Technologies": ["VS Code", "Windows", "Excel", "Postman"],
  }

  const projects = [
    {
      title: "MA Fashions - E-Commerce Website",
      description:
        "Designed and built a responsive fashion e-commerce website with product browsing and cart functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Visual Studio"],
      outcome: "Enhanced user engagement through intuitive UI and improved frontend development proficiency.",
    },
    {
      title: "AMITY - Social Networking Website",
      description:
        "Developed a full-stack social networking platform enabling user registration, profile management, messaging, and interactive communication.",
      technologies: ["React.js", "Spring Boot", "MySQL", "Postman", "HTML", "CSS", "JavaScript"],
      outcome:
        "Delivered an engaging user experience similar to modern social apps with seamless full-stack integration.",
    },
  ]

  const internships = [
    {
      company: "42 Learn",
      duration: "May 2024 – June 2025",
      role: "Intern",
    },
    {
      company: "Code Tantra",
      duration: "May 2025 - June 2025",
      role: "Java Full Stack Intern",
    },
    {
      company: "IStudio",
      duration: "June 2025 – July 2025",
      role: "Ethical Hacking Intern",
    },
  ]

  const certifications = [
    "Data Science + AI ML Modeling + Big Query (42 Learn)",
    "Introduction to Internet of Things (NPTEL)",
    "Privacy and Security Online Social Media (NPTEL)",
    "Introduction of AI (Infosys Spring Board)",
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-emerald-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-emerald-600">Shaik Mathin</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    activeSection === item.toLowerCase() ? "text-emerald-600" : "text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-emerald-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-emerald-100">
              {["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-emerald-600 ${
                    activeSection === item.toLowerCase() ? "text-emerald-600" : "text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                    Mathin Shaik
                  </span>
                </h1>
                <p className="text-xl text-gray-600">AI & Data Science Student</p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Passionate about leveraging artificial intelligence and data science to create innovative solutions.
                  Currently pursuing B.Tech in AI & Data Science with hands-on experience in full-stack development.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-emerald-600" />
                    <span className="text-sm">22kq1a5497aids@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                    <span className="text-sm">+91 6281004679</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                    <span className="text-sm">Kandukur, Andhra Pradesh</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href="mailto:22kq1a5497aids@gmail.com"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                  title="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="tel:6281004679"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                  title="Phone"
                >
                  <Phone size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors" title="GitHub">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors" title="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://stackoverflow.com/users/31143033/user31143033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                  title="Stack Overflow"
                >
                  <MessageSquare size={24} />
                </a>
                <a
                  href="http://shaikmattu123-ohgrx.wordpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                  title="WordPress Blog"
                >
                  <FileText size={24} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20"></div>
                <img
                  src="/images/profile-3.jpg"
                  alt="Shaik Mathin"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Career Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be part of a visionary organization where curiosity meets code, and innovation is fueled by data,
                logic, and continuous learning to drive meaningful outcomes. I aspire to contribute to cutting-edge AI
                solutions that solve real-world problems and create positive impact on society. My goal is to bridge the
                gap between theoretical knowledge and practical applications, leveraging machine learning, data
                analytics, and emerging technologies to build intelligent systems that enhance human capabilities and
                drive digital transformation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My goal is to become a skilled Software Engineer in a top product-based MNC where I can contribute to
                impactful projects, continue learning, and grow as a developer. I'm also building a strong portfolio and
                GitHub presence to showcase my work and continuous progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-emerald-600 flex items-center">
                    {category === "Programming Languages" && <Code className="mr-2 h-5 w-5" />}
                    {category === "Database Management" && <Database className="mr-2 h-5 w-5" />}
                    {category === "Frameworks & Libraries" && <Globe className="mr-2 h-5 w-5" />}
                    {category === "Tools & Technologies" && <Award className="mr-2 h-5 w-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <ExternalLink className="mr-2 h-5 w-5 text-emerald-600" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-emerald-600 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome:</h4>
                    <p className="text-gray-600 text-sm">{project.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience & Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Internships */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-emerald-600" />
                Internships
              </h3>
              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <Card key={index} className="border-l-4 border-l-emerald-600 border-0 shadow-md">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900">{internship.role}</h4>
                      <p className="text-emerald-600 font-medium">{internship.company}</p>
                      <p className="text-gray-500 text-sm">{internship.duration}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Award className="mr-2 h-6 w-6 text-emerald-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <p className="text-gray-700">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-8 w-8 text-emerald-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      B.Tech - Artificial Intelligence and Data Science
                    </h3>
                    <p className="text-emerald-600 font-medium">Pace Institute Of Technology And Sciences, Ongole</p>
                    <p className="text-gray-600">CGPA: 8.75 | 2022 - 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-8 w-8 text-emerald-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">Intermediate - MPC</h3>
                    <p className="text-emerald-600 font-medium">Sri Gayatri IIT And NEET Academy, Kandukur</p>
                    <p className="text-gray-600">Percentage: 85.6% | 2020 - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-8 w-8 text-emerald-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">Secondary Schooling</h3>
                    <p className="text-emerald-600 font-medium">ZPGH School, Kandukur</p>
                    <p className="text-gray-600">Percentage: 93.3% | 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Summary</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dedicated AI & Data Science student with strong academic performance (8.75 CGPA) and hands-on experience
              in full-stack development. Passionate about leveraging artificial intelligence to create innovative
              solutions and drive meaningful technological advancement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">Let's Connect</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:22kq1a5497aids@gmail.com" className="text-emerald-600 hover:text-emerald-700">
                      22kq1a5497aids@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:6281004679" className="text-emerald-600 hover:text-emerald-700">
                      +91 6281004679
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Kandukur, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://stackoverflow.com/users/31143033/user31143033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                    title="Stack Overflow"
                  >
                    <MessageSquare size={20} />
                  </a>
                  <a
                    href="http://shaikmattu123-ohgrx.wordpress.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                    title="WordPress Blog"
                  >
                    <FileText size={20} />
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg"
                    onClick={() =>
                      (window.location.href =
                        "mailto:22kq1a5497aids@gmail.com?subject=Professional Inquiry&body=Hello Mathin,%0D%0A%0D%0AI would like to connect with you regarding...")
                    }
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Shaik Mathin. All rights reserved. Built with passion for innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
