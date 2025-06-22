import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Shield, 
  Code, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Lock,
  Network,
  Database,
  Globe
} from 'lucide-react'
import './App.css'

// Import images
import heroBg from './assets/images/hero-bg.jpg'
import matrixBg from './assets/images/matrix-bg.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [typingText, setTypingText] = useState('')
  const fullText = 'Cybersecurity Expert & Software Developer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const skills = [
    { name: 'Cybersecurity', level: 90, category: 'security' },
    { name: 'Python', level: 85, category: 'programming' },
    { name: 'Linux/Unix', level: 88, category: 'systems' },
    { name: 'Network Security', level: 82, category: 'security' },
    { name: 'Web Development', level: 80, category: 'programming' },
    { name: 'Penetration Testing', level: 75, category: 'security' },
    { name: 'Machine Learning', level: 70, category: 'ai' },
    { name: 'Next.js/React', level: 78, category: 'programming' }
  ]

  const projects = [
    {
      title: 'ReconBot-Plus',
      description: 'Telegram bot for cybersecurity tasks including IP lookup, hash identification, vulnerability scanning, and OSINT queries.',
      tech: ['Python', 'Telegram API', 'OSINT', 'Security'],
      github: 'https://github.com/MohamedNourDerbeli/ReconBot-Plus',
      featured: true
    },
    {
      title: 'TicTacToe AI vs AI',
      description: 'Implementation of AI vs AI tic-tac-toe game using Minimax algorithm with alpha-beta pruning.',
      tech: ['Python', 'AI', 'Minimax Algorithm', 'Game Theory'],
      github: 'https://github.com/MohamedNourDerbeli/TicTacToeAI-vs-AI-with-Minimax',
      featured: true
    },
    {
      title: 'Next.js E-commerce Platform',
      description: 'Full-stack e-commerce website with server-side rendering, user authentication, and secure payment integration.',
      tech: ['Next.js', 'React', 'MongoDB', 'Payment Gateway'],
      github: '#',
      featured: true
    },
    {
      title: 'Simple Shell',
      description: 'Unix-like shell implementation providing essential command-line functionalities with optimized system-level programming.',
      tech: ['C', 'Unix', 'System Programming', 'Shell'],
      github: '#',
      featured: false
    },
    {
      title: 'Linux From Scratch',
      description: 'Built a custom Linux operating system from scratch, demonstrating deep understanding of Linux internals.',
      tech: ['Linux', 'System Administration', 'Kernel', 'Build Systems'],
      github: '#',
      featured: false
    },
    {
      title: 'Nessus Vulnerability Assessment',
      description: 'Comprehensive vulnerability assessment project identifying critical security flaws and providing mitigation strategies.',
      tech: ['Nessus', 'Vulnerability Assessment', 'Security Analysis', 'Reporting'],
      github: '#',
      featured: false
    }
  ]

  const experience = [
    {
      title: 'Work Study Student',
      company: 'Holberton School Tunis',
      period: '09/2023 - Present',
      location: 'Tunisia',
      description: [
        'Improved team morale by fostering relationships with 22+ peers, supervisors, and students',
        'Enhanced workplace communication by actively engaging with 22 individuals for ideas and support',
        'Built a collaborative team environment by working on 13 diverse projects with team members'
      ]
    },
    {
      title: 'Restaurant Server',
      company: 'Restaurant Nabeul',
      period: '02/2021 - 10/2022',
      location: 'Tunis, Tunisia',
      description: [
        'Streamlined order-taking and meal service for over 100 guests per shift, achieving 95% satisfaction rate',
        'Reduced wait times by an average of 10 minutes per table through efficient service optimization',
        'Maintained calm demeanor during high-volume shifts, demonstrating excellent stress management'
      ]
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">MD</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link text-sm font-medium ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="matrix-bg absolute inset-0 z-10" />
        <div className="container mx-auto px-6 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-primary">Mohamed</span>{' '}
              <span className="text-foreground">Derbeli</span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 h-8">
              <span className="typing-animation">{typingText}</span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate cybersecurity enthusiast and software engineer with expertise in system-level programming, 
              web development, and AI. Specializing in threat detection, vulnerability analysis, and secure coding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="cyber-button px-8 py-3 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a dedicated cybersecurity student and software developer based in Nabeul, Tunisia. 
                Currently pursuing advanced certifications in cybersecurity and machine learning to enhance 
                my skills in threat detection and secure coding practices.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With a strong foundation in system-level programming and web development, I'm passionate 
                about ethical hacking, network security, and building secure applications that protect 
                against modern cyber threats.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span>Nabeul, Tunisia</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="cyber-glow">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Security Focus</h3>
                  <p className="text-muted-foreground">Specialized in cybersecurity and ethical hacking</p>
                </CardContent>
              </Card>
              <Card className="cyber-glow">
                <CardContent className="p-6 text-center">
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Development</h3>
                  <p className="text-muted-foreground">Full-stack development with security in mind</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Cybersecurity</h3>
              <p className="text-sm text-muted-foreground">IDS/IPS, Nessus, Metasploit</p>
            </div>
            <div className="text-center">
              <Terminal className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Programming</h3>
              <p className="text-sm text-muted-foreground">Python, C, Bash, JavaScript</p>
            </div>
            <div className="text-center">
              <Network className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Networking</h3>
              <p className="text-sm text-muted-foreground">Wireshark, Nmap, Network Security</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Web Development</h3>
              <p className="text-sm text-muted-foreground">Next.js, React, MongoDB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="cyber-glow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in discussing cybersecurity projects, collaboration opportunities, 
                or just connecting with fellow security enthusiasts. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-4" />
                  <span>derbelnourmohamed@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-4" />
                  <span>+216 56 231 771</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-4" />
                  <span>Nabeul, Tunisia</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://www.linkedin.com/in/md-nr-db', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/MohamedNourDerbeli', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <Card className="cyber-glow">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button className="cyber-button w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Mohamed Derbeli. Built with React and passion for cybersecurity.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

