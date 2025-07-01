import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, Phone, Mail, ExternalLink, Download, Code, Database, Server, Zap, FileText, MapPin, Calendar, GraduationCap, Award, SheetIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';
import MobileNav from '@/components/MobileNav';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'resume', 'projects', 'skills', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    // Create a simple resume download or redirect to contact
//     const resumeText = `
// Ali Rizvi - Oracle DBA & Full Stack Developer

// Contact: the.er.alirizvi9936@gmail.com | +91 7084096364

// EXPERIENCE:
// • 6-Month Oracle 19c Database Internship - Performance Tuning, Backup & Recovery
// • 1-Month Python Internship - Logic Building & Scripting

// SKILLS:
// • Database: Oracle 19c/21c, PL/SQL, Performance Tuning
// • Programming: Python, Java, C, JavaScript, React
// • Specialties: Problem Solving, System Optimization, Troubleshooting

// EDUCATION:
// • B.Tech in Computer Science Engineering

// PROJECTS:
// • Stock Portfolio Tracker - Real-time Performance Monitoring
// • Library Management System - SQL-based Oracle Project
// • Mental Health Chatbot - AI-powered Wellness Platform
//     `;
    const a = document.createElement('a');
    a.href = '/Ali_Rizvi_Resume.pdf'; // Adjust path if it's somewhere else
    a.download = 'Ali_Rizvi_Resume.pdf';     // Optional: rename on download
    
    // const blob = new Blob([resumeText], { type: 'text/plain' });
    // const url = URL.createObjectURL(blob);
    //  const a = document.createElement('a');
    //  a.href = url;
    //  a.download = 'Ali_Rizvi_Resume.txt';
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
    //  URL.revokeObjectURL(url);
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ali Rizvi
            </h1>
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {['Home', 'About', 'Experience', 'Resume', 'Projects', 'Skills', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-300 hover:text-blue-400 text-sm xl:text-base ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile Navigation */}
            <MobileNav activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20"></div>
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-32 sm:w-64 h-32 sm:h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <Badge className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium backdrop-blur-sm">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  Ready to Innovate
                </Badge>
                
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="block text-white/90">Hello, I'm</span>
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                      Ali Rizvi
                    </span>
                  </h1>
                  
                  <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    Database Whisperer
                  </div>
                  
                  <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
                    Oracle DBA | Backend Logic | Creative Coder
                  </p>
                  
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                    Crafting digital experiences that are smooth, scalable, and made to impress. 
                    I bridge logical rigor with creativity to solve complex problems.
                  </p>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <Badge variant="outline" className="border-blue-500/50 text-blue-300 bg-blue-500/5 hover:bg-blue-500/10 transition-colors text-xs sm:text-sm">
                  Oracle 19c
                </Badge>
                <Badge variant="outline" className="border-purple-500/50 text-purple-300 bg-purple-500/5 hover:bg-purple-500/10 transition-colors text-xs sm:text-sm">
                  Python
                </Badge>
                <Badge variant="outline" className="border-teal-500/50 text-teal-300 bg-teal-500/5 hover:bg-teal-500/10 transition-colors text-xs sm:text-sm">
                  PL/SQL
                </Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 bg-pink-500/5 hover:bg-pink-500/10 transition-colors text-xs sm:text-sm">
                  React
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  View My Work
                  <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-400/50 text-blue-300 hover:bg-blue-400/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right Side - Professional Picture Section */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                {/* Main Picture Container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl animate-pulse"></div>
                  
                  {/* Picture Container */}
                  <div className="absolute inset-1 bg-slate-900 rounded-3xl overflow-hidden">
                    {/* Profile Image */}
                    <img 
                      src="https://i.postimg.cc/XYSjtHV6/alipic.jpg" 
                      alt="Ali Rizvi - Oracle DBA & Full Stack Developer"
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Overlay with subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/30 rounded-full blur-sm animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-purple-500/30 rounded-full blur-md animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 -right-6 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-teal-500/30 rounded-full blur-sm animate-ping delay-700"></div>
                </div>

                {/* Floating Info Cards - Hidden on mobile for better space */}
                <div className="absolute -left-8 top-1/4 hidden xl:block">
                  <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Database className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Specialization</p>
                        <p className="text-sm font-medium text-blue-300">Oracle DBA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 hidden xl:block">
                  <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 animate-fade-in delay-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <Code className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Experience</p>
                        <p className="text-sm font-medium text-purple-300">6+ Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Passionate Technologist</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I'm a passionate technologist who bridges logical rigor with creativity. With expertise in Oracle Database administration 
                and a growing passion for full-stack development, I solve complex problems while building elegant solutions.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start sm:items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base"><strong>Education:</strong> B.Tech in Computer Science</span>
                </div>
                <div className="flex items-start sm:items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base"><strong>Certifications:</strong> Oracle DBA Course, SQL Certifications</span>
                </div>
                <div className="flex items-start sm:items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-teal-500 rounded-full mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base"><strong>Philosophy:</strong> "There's elegance in logic—and creativity in solving problems."</span>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="w-full h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Database className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 text-blue-400" />
                  <p className="text-sm sm:text-base lg:text-lg font-semibold">Database Architecture</p>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">Expert in Oracle Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-2 sm:left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="mb-8 sm:mb-12 relative">
                <div className="absolute left-1 sm:left-2 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-2 sm:border-4 border-slate-900"></div>
                <div className="ml-8 sm:ml-12">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-blue-400 text-base sm:text-lg lg:text-xl">6-Month Oracle 19c Database Internship</CardTitle>
                      <CardDescription className="text-xs sm:text-sm lg:text-base">Real-world Database Administration</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 text-xs sm:text-sm lg:text-base">
                        Intensive hands-on experience with Oracle Database administration, focusing on real-world troubleshooting, 
                        performance tuning, and patching operations.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Performance Tuning</Badge>
                        <Badge variant="secondary" className="text-xs">Backup & Recovery</Badge>
                        <Badge variant="secondary" className="text-xs">Patch Management</Badge>
                        <Badge variant="secondary" className="text-xs">Listener Configuration</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-8 sm:mb-12 relative">
                <div className="absolute left-1 sm:left-2 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full border-2 sm:border-4 border-slate-900"></div>
                <div className="ml-8 sm:ml-12">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-purple-400 text-base sm:text-lg lg:text-xl">1-Month Python Internship</CardTitle>
                      <CardDescription className="text-xs sm:text-sm lg:text-base">Logic Building & Scripting Fundamentals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 text-xs sm:text-sm lg:text-base">
                        Foundation building experience focusing on programming logic, scripting fundamentals, 
                        and problem-solving methodologies using Python.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Python Scripting</Badge>
                        <Badge variant="secondary" className="text-xs">Logic Building</Badge>
                        <Badge variant="secondary" className="text-xs">Problem Solving</Badge>
                        <Badge variant="secondary" className="text-xs">Algorithm Design</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Education & Certifications */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 mb-6 flex items-center">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                    Education
                  </h3>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-base sm:text-lg lg:text-xl text-white">Bachelor of Technology</CardTitle>
                      <CardDescription className="text-xs sm:text-sm lg:text-base">Computer Science Engineering</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-gray-300 text-xs sm:text-sm lg:text-base">AKTU/Lucknow Institute of Technology</p>
                        <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          2021 - 2025
                        </div>
                        <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Lucknow
                        </div>
                         <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                          <SheetIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          7.5 CGPA
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-400 mb-6 flex items-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-white text-xs sm:text-sm lg:text-base">Oracle Database Administration</h4>
                            <p className="text-gray-400 text-xs sm:text-sm">Lernomate Technologies</p>
                          </div>
                          <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs">2025</Badge>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-white text-xs sm:text-sm lg:text-base">SQL Fundamentals</h4>
                            <p className="text-gray-400 text-xs sm:text-sm">HackerRank Certification(Basic&intermediate)</p>
                          </div>
                          <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">2025</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Skills Summary & Contact */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-400 mb-6 flex items-center">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                    Core Competencies
                  </h3>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-3 text-xs sm:text-sm lg:text-base">Database Technologies</h4>
                          <div className="space-y-2">
                            <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs w-full justify-start">Oracle 19c/21c</Badge>
                            <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs w-full justify-start">PL/SQL</Badge>
                            <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs w-full justify-start">Performance Tuning</Badge>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-400 mb-3 text-xs sm:text-sm lg:text-base">Programming</h4>
                          <div className="space-y-2">
                            <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs w-full justify-start">Python</Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs w-full justify-start">Java</Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs w-full justify-start">C</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-pink-400 mb-6 flex items-center">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                    <a href="/src/components/myResume.pdf" download>Download Resume</a>
                  </h3>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                          Get a detailed overview of my professional experience, skills, and achievements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm"
                            onClick={handleResumeDownload}
                          >
                            <Download className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                            Download Resume
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 text-xs sm:text-sm"
                            onClick={() => scrollToSection('contact')}
                          >
                            <Mail className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                            Request Resume
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-400 text-base sm:text-lg lg:text-xl">Stock Portfolio Tracker</CardTitle>
                  <a 
                    href="https://github.com/Alirizvi11/Stock-portfolio-Tracker" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   scrollToSection('contact');
                    // }}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
                <CardDescription className="text-xs sm:text-sm lg:text-base">Real-time Performance Tracker</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-xs sm:text-sm lg:text-base">
                  Comprehensive stock investment tracking system with real-time performance monitoring and analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs">React</Badge>
                  <Badge variant="outline" className="border-green-500/50 text-green-300 text-xs">API Integration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-400 text-base sm:text-lg lg:text-xl">Library Management System</CardTitle>
                  <a 
                    href="https://github.com/Alirizvi11/Libarary_management_System-"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   scrollToSection('contact');
                    // }}                
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
                <CardDescription className="text-xs sm:text-sm lg:text-base">SQL-based Oracle Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-xs sm:text-sm lg:text-base">
                  Complete library management solution with inventory tracking and role-based lending system.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">Oracle</Badge>
                  <Badge variant="outline" className="border-yellow-500/50 text-yellow-300 text-xs">PL/SQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-teal-400 text-base sm:text-lg lg:text-xl">Mental Health Chatbot</CardTitle>
                  <a 
                    href="https://github.com/Alirizvi11/Mental_Health_Chatbot" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   scrollToSection('contact');
                    // }}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
                <CardDescription className="text-xs sm:text-sm lg:text-base">Wellness Support Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-xs sm:text-sm lg:text-base">
                  AI-powered mental wellness website offering stress-relief support and positive affirmations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-teal-500/50 text-teal-300 text-xs">Python</Badge>
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">AI/ML</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-400" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-400 mb-2">Database</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="border-blue-500/50 text-blue-300 block text-xs">Oracle 19c, 12c, 21c</Badge>
                <Badge variant="outline" className="border-blue-500/50 text-blue-300 block text-xs">PL/SQL</Badge>
                <Badge variant="outline" className="border-blue-500/50 text-blue-300 block text-xs">Performance Tuning</Badge>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-400" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-purple-400 mb-2">Programming</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-500/50 text-purple-300 block text-xs">Python</Badge>
                <Badge variant="outline" className="border-purple-500/50 text-purple-300 block text-xs">Java</Badge>
                <Badge variant="outline" className="border-purple-500/50 text-purple-300 block text-xs">C</Badge>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-teal-400" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-teal-400 mb-2">Web Technologies</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="border-teal-500/50 text-teal-300 block text-xs">HTML/CSS</Badge>
                <Badge variant="outline" className="border-teal-500/50 text-teal-300 block text-xs">JavaScript</Badge>
                <Badge variant="outline" className="border-teal-500/50 text-teal-300 block text-xs">React</Badge>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-pink-400" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-pink-400 mb-2">Specialties</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 block text-xs">Problem Solving</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 block text-xs">System Optimization</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 block text-xs">Troubleshooting</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <Database className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-blue-400 text-base sm:text-lg lg:text-xl">Database Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Oracle Database Setup & Installation with best practices and optimization.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-purple-400 text-base sm:text-lg lg:text-xl">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Database performance tuning and query optimization for maximum efficiency.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300">
              <CardHeader>
                <Server className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-teal-400 mx-auto mb-4" />
                <CardTitle className="text-teal-400 text-base sm:text-lg lg:text-xl">Backup & Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Comprehensive backup strategies and disaster recovery solutions.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-pink-500/50 transition-all duration-300">
              <CardHeader>
                <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-400 mx-auto mb-4" />
                <CardTitle className="text-pink-400 text-base sm:text-lg lg:text-xl">Error Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Expert troubleshooting and patch management for critical systems.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0" />
                  <a href="tel:+917084096364" className="text-sm sm:text-base lg:text-lg hover:text-blue-400 transition-colors">
                    +91 7084096364
                  </a>
                </div>
                <div className="flex items-center space-x-4 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400 flex-shrink-0" />
                  <a href="mailto:the.er.alirizvi9936@gmail.com" className="text-sm sm:text-base lg:text-lg hover:text-purple-400 transition-colors break-all">
                    the.er.alirizvi9936@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
                <a 
                  href="https://www.linkedin.com/in/ali-r-758562258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" />
                </a>
                <a 
                  href="https://github.com/alirizvi11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-purple-500/50 transition-colors"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" />
                </a>
                <a 
                  href=" https://x.com/alirizvi9936?t=k0QMLsYUWN6d32LiRRk6PQ&s=08" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-teal-500/50 transition-colors"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-teal-400" />
                </a>
                <a 
                  href="https://www.instagram.com/alisyed11_?igsh=NThhZDNtcXk1cGV3 " 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-pink-500/50 transition-colors"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-400" />
                </a>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-gray-400 italic text-sm sm:text-base lg:text-lg">
                  "There's elegance in logic—and creativity in solving problems."
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            © 2025 Ali Rizvi. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;