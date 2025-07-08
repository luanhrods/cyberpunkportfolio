"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  Palette,
  Zap,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  Instagram,
  Eye,
  Menu,
  X,
  Home,
  Briefcase,
  User,
  MessageCircle,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Configuração de links sociais - fácil de editar
const socialLinks = {
  email: "mailto:eu@luanchicale.com.br",
  instagram: "https://instagram.com/luanchicale",
  linkedin: "https://linkedin.com/in/luanchicale",
  behance: "https://behance.net/luanhenryque",
}

// Configuração de projetos - fácil de editar
const projectsData = [
  {
    id: 4,
    title: {
      pt: "Identidade Visual - Caçamba.com",
      en: "Visual Identity - Caçamba.com",
    },
    description: {
      pt: "Desenvolvimento completo de identidade visual para plataforma de aluguel de caçambas, incluindo logo, paleta de cores e aplicações digitais.",
      en: "Complete visual identity development for dumpster rental platform, including logo, color palette and digital applications.",
    },
    category: {
      pt: "Identidade Visual",
      en: "Visual Identity",
    },
    tech: ["Illustrator", "Photoshop", "Figma"],
    image: "https://i.imgur.com/BFFMAJv.jpg",
    link: "https://www.behance.net/gallery/205411087/ID-Visual-para-cacambacom-Visual-ID-for-cacambacom",
    featured: true,
  },
  {
    id: 2,
    title: {
      pt: "Design de Produto - Embalagem de Café",
      en: "Product Design - Coffee Package",
    },
    description: {
      pt: "Estudo de caso completo para design de embalagem de café, focando em diferenciação no mercado e apelo visual.",
      en: "Complete case study for coffee package design, focusing on market differentiation and visual appeal.",
    },
    category: {
      pt: "Design de Produto",
      en: "Product Design",
    },
    tech: ["Figma", "Photoshop", "Mockups"],
    image: "https://i.imgur.com/suiAqO4.jpg",
    link: "https://www.behance.net/gallery/204300569/Product-Design-Coffee-Package-Case-Study",
    featured: true,
  },
  {
    id: 3,
    title: {
      pt: "Carrossel Instagram - T1 Faker",
      en: "Instagram Carousel - T1 Faker",
    },
    description: {
      pt: "Criação de carrossel para Instagram celebrando o jogador Faker de League of Legends, com design dinâmico e elementos gráficos envolventes.",
      en: "Instagram carousel creation celebrating League of Legends player Faker, featuring dynamic design and engaging graphic elements.",
    },
    category: {
      pt: "Social Media",
      en: "Social Media",
    },
    tech: ["Photoshop", "Figma"],
    image: "https://i.imgur.com/TdzpBX5.jpg",
    link: "https://www.behance.net/gallery/208524599/Carrossel-Instagram-T1-Faker-League-Of-Legends",
    featured: true,
  },
  {
    id: 5,
    title: {
      pt: "Landing Page - ZENITE",
      en: "Landing Page - ZENITE",
    },
    description: {
      pt: "Design e desenvolvimento de landing page moderna e responsiva para o projeto ZENITE, focando em conversão e experiência do usuário.",
      en: "Design and development of modern, responsive landing page for ZENITE project, focusing on conversion and user experience.",
    },
    category: {
      pt: "Web Design",
      en: "Web Design",
    },
    tech: ["Figma", "HTML/CSS", "JavaScript", "Responsive Design"],
    image: "https://i.imgur.com/kqD4NIV.jpg",
    link: "https://www.behance.net/gallery/223478033/Project-Landing-Page-ZENITE",
    featured: true,
  },
  {
    id: 1,
    title: {
      pt: "Bienal do Rio - Identidade de Evento",
      en: "Bienal do Rio - Event Identity",
    },
    description: {
      pt: "Design e desenvolvimento de landing page moderna e responsiva para o projeto ZENITE, focando em conversão e experiência do usuário.",
      en: "Design and development of modern, responsive landing page for ZENITE project, focusing on conversion and user experience.",
    },
    category: {
      pt: "Eventos",
      en: "Events",
    },
    tech: ["Figma", "Photoshop", "Illustrator", "Gráfica/Printing"],
    image: "https://i.imgur.com/vBktUgG.jpg",
    link: "https://www.behance.net/gallery/228733803/Bienal-do-livro-do-Rio-de-Janeiro-ID-Visual-Editora",
    featured: true,
  },
]

// Textos em múltiplos idiomas
const translations = {
  pt: {
    name: "Luan Chicale",
    role: "Estrategista Digital & Designer Gráfico",
    description:
      "Criando experiências digitais impactantes através de design estratégico e soluções visuais inovadoras",
    home: "início",
    portfolio: "portfólio",
    resume: "currículo",
    contact: "contato",
    viewMyWork: "Ver Meu Trabalho",
    featuredProjects: "Projetos em Destaque",
    viewProject: "Ver Projeto",
    experienceSkills: "Experiência & Habilidades",
    professionalExperience: "Experiência Profissional",
    technicalSkills: "Principais Habilidades Técnicas",
    getInTouch: "Entre em Contato",
    sendMessage: "Enviar Mensagem",
    yourName: "Seu Nome",
    yourEmail: "Seu Email",
    yourMessage: "Sua Mensagem",
    contactInformation: "Informações de Contato",
    followMe: "Me Siga",
    specialties: [
      { title: "Design Gráfico", desc: "Identidades visuais marcantes" },
      { title: "Estratégia Digital", desc: "Soluções que convertem" },
      { title: "UX/UI Design", desc: "Experiências intuitivas" },
    ],
    experiences: [
      {
        startYear: "2024",
        endYear: undefined,
        title: "Líder de Serviços de Marketing",
        company: "Enchantè Digital",
        description:
          "Gestor de Marketing e redes sociais focado em estratégias integradas de leads, coordenando equipes e otimizando conteúdo de mídias sociais. Com contas de clientes, consegui melhorar em 3x o alcance nas mídias sociais e 2x nas vendas.",
      },
      {
        startYear: "2024",
        endYear: "2025",
        title: "Gerente de Conteúdo - Contrato Indireto",
        company: "Ipê das Letras - Atlantic Books Group",
        description:
          "Gerente de Marketing especializado em criação de conteúdo, incluindo Instagram, TikTok, Blog e Eventos. Lidero a equipe de mídias sociais e conteúdo com mais de 100 autores, melhorei o engajamento mensal em 240% e as interações em mais de 400%.",
      },
      {
        startYear: "2024",
        endYear: "2024",
        title: "Interno de Design Gráfico",
        company: "YourListingExpert",
        description:
          "Como interno de design gráfico, pude criar diversas artes visuais focadas em mídias como Instagram e Blogs. Ajudei na edição de vídeos, capas de Reels e criação de visuais específicos para Canadá e EUA.",
      },
      {
        startYear: "2021",
        endYear: "2023",
        title: "Gerente de Mídias Sociais",
        company: "zeroEleven Agency",
        description:
          "Cresci com sucesso várias mídias sociais (Instagram, YouTube e TikTok). Liderei uma equipe para criação de conteúdo e apresentações de branding de influenciadores. Participei ativamente de vídeos de vendas e gerenciamento de conteúdo para campanhas de marcas como BIC, Bayer e outras. Trabalhei ativamente na agência TubeLab em parceria com zeroEleven Agency.",
      },
    ],
    skills: [
      { name: "Adobe Creative Suite", level: 95 },
      { name: "Figma", level: 90 },
      { name: "Estratégia de Marketing", level: 95 },
      { name: "Gestão de Mídias Sociais", level: 90 },
      { name: "Criação de Conteúdo", level: 95 },
      { name: "Branding", level: 90 },
    ],
    educationCertifications: "Graduações & Certificados",
    education: "Formação Acadêmica",
    certifications: "Certificações",
    educationData: [
      {
        degree: "Graduação em Vendas e Marketing",
        institution: "ILAC International College",
        year: "2023-2024",
        status: "Concluído",
      },
      {
        degree: "Graduação em COMEX",
        institution: "UNESA",
        year: "2024-2026",
        status: "Em andamento",
      },
    ],
    certificationsData: [
      {
        name: "Certificado Google Ads Search",
        issuer: "Google",
        year: "2023",
        credential: "",
      },
    ],
  },
  en: {
    name: "Luan Chicale",
    role: "Digital Strategist & Graphic Designer",
    description: "Creating impactful digital experiences through strategic design and innovative visual solutions",
    home: "home",
    portfolio: "portfolio",
    resume: "resume",
    contact: "contact",
    viewMyWork: "View My Work",
    featuredProjects: "Featured Projects",
    viewProject: "View Project",
    experienceSkills: "Experience & Skills",
    professionalExperience: "Professional Experience",
    technicalSkills: "Main Technical Skills",
    getInTouch: "Get In Touch",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    contactInformation: "Contact Information",
    followMe: "Follow Me",
    specialties: [
      { title: "Graphic Design", desc: "Striking visual identities" },
      { title: "Digital Strategy", desc: "Solutions that convert" },
      { title: "UX/UI Design", desc: "Intuitive experiences" },
    ],
    experiences: [
      {
        startYear: "2024",
        endYear: undefined,
        title: "Head of Marketing Services",
        company: "Enchantè Digital",
        description:
          "Marketing Manager focused in lead integrated strategies, coordinating teams and optimize social media content. With client accounts, could improve in 3x reach on social media and 2x in sales.",
      },
      {
        startYear: "2024",
        endYear: "2025",
        title: "Content Manager - Indirect Contract",
        company: "Ipê das Letras - Atlantic Books Group",
        description:
          "Marketing Manager specialized in Content creation, including Instagram, TikTok, Blog and Events. Lead the social media and content team through more than 100 authors, improved monthly engagement by 240%, and interactions in more than 400%.",
      },
      {
        startYear: "2024",
        endYear: "2024",
        title: "Graphic Design Intern",
        company: "YourListingExpert",
        description:
          "As an intern, I was able to create various visual arts focused on media such as Instagram and Blogs. I was able to help in video editing, Reel covers and creating specific visuals for Canada and USA.",
      },
      {
        startYear: "2021",
        endYear: "2023",
        title: "Social Media Manager",
        company: "zeroEleven Agency",
        description:
          "Growth successfully a couple social medias (Instagram, YouTube and TikTok). Led a team to content creation and branding presentations of influencers. Made and actively participate to sales videos and content management of some influencers campaigns for brands like BIC, Bayer and others. I've worked actively with TubeLab Agency into a partnership with zeroEleven.",
      },
    ],
    skills: [
      { name: "Adobe Creative Suite", level: 95 },
      { name: "Figma", level: 90 },
      { name: "Marketing Strategy", level: 95 },
      { name: "Social Media Management", level: 90 },
      { name: "Content Creation", level: 95 },
      { name: "Branding", level: 90 },
    ],
    educationCertifications: "Education & Certifications",
    education: "Academic Background",
    certifications: "Certifications",
    educationData: [
      {
        degree: "Sales & Marketing Graduation",
        institution: "ILAC International College",
        year: "2023-2024",
        status: "Completed",
      },
      {
        degree: "Tech Graduation in Foreing Trade",
        institution: "UNESA",
        year: "2024-2026",
        status: "Em andamento",
      },
    ],
    certificationsData: [
      {
        name: "Google Ads Search Certification",
        issuer: "Google",
        year: "2023",
        credential: "",
      },
    ],
  },
}

export default function FuturisticPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState("pt")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const t = translations[language as keyof typeof translations]
  const sections = ["home", "portfolio", "resume", "contact"]

  useEffect(() => {
    // Define o título da página no navegador
    document.title = "Luan Chicale - Portfólio"
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500) // Animação de loading mais rápida
    return () => clearTimeout(timer)
  }, [])

  const BehanceIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M8.84 10.835h-1.965v-1.859h1.783c1.878 0 1.646 1.859.182 1.859zm5.789 1.058h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.9.396h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm15.271-.289c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.357-.733c1.668-.853 1.607-3.981-1.587-4.028h-4.056v8.73h3.771c3.958 0 3.891-3.967 1.872-4.702zm3.357-3.166h4v-.875h-4v.875zm4.943 3.693c-.545-3.505-6.053-3.711-6.053.872 0 4.526 5.18 3.818 5.949 1.56h-1.848c-.645.748-2.508.531-2.404-1.184h4.41c.009-.555-.009-.953-.054-1.248z" />
    </svg>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-yellow-400 text-xl font-light">Inicializando Portfólio...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="particles-container">
          {[...Array(30)].map((_, i) => ( // Menos partículas
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${25 + Math.random() * 25}s`, // Animação mais lenta
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Desktop Floating Sidebar Simplificado */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="fixed top-1/3 left-4 z-50 hidden md:block"
      >
        <div className="bg-black/50 rounded-lg p-2">
          <nav className="flex flex-col space-y-2">
            {[
              { id: "home", icon: Home, label: t.home },
              { id: "portfolio", icon: Briefcase, label: t.portfolio },
              { id: "resume", icon: User, label: t.resume },
              { id: "contact", icon: MessageCircle, label: t.contact },
            ].map(item => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`p-3 rounded-md transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-yellow-400"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-5 h-5" />
                </button>
              )
            })}
            
            {/* Language Selector */}
            <div className="pt-2 border-t border-gray-700/50">
              <button
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="p-3 rounded-md text-gray-400 hover:text-yellow-400 transition-colors duration-200 w-full flex items-center justify-center"
                title="Mudar Idioma"
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-black/70 backdrop-blur-sm border border-white/10 p-3 rounded-lg"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-yellow-400" /> : <Menu className="w-6 h-6 text-yellow-400" />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
             <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                className="bg-gray-900/90 border-b border-white/10 p-4"
                onClick={e => e.stopPropagation()}
             >
                <nav className="flex justify-around">
                    {sections.map(sec => (
                        <button
                            key={sec}
                            onClick={() => {
                                setActiveSection(sec)
                                setIsMobileMenuOpen(false)
                            }}
                            className={`capitalize text-lg transition-colors duration-200 ${activeSection === sec ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                            {t[sec as keyof typeof t]}
                        </button>
                    ))}
                </nav>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex items-center justify-center px-6 pt-24 md:pt-0"
            >
              <div className="text-center max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent glow-text-yellow"
                >
                  {t.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-lg md:text-xl text-gray-300 mb-6"
                >
                  {t.role}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-base text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                  {t.description}
                </motion.p>

                {/* Specialty Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="grid md:grid-cols-3 gap-6 mb-10"
                >
                  {t.specialties.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="glass-card p-6 rounded-lg bg-white/5 border border-yellow-400/20 hover:border-yellow-400/30 transition-all duration-200"
                    >
                      {index === 0 && <Palette className="w-10 h-10 text-yellow-400 mx-auto mb-3" />}
                      {index === 1 && <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />}
                      {index === 2 && <Code className="w-10 h-10 text-yellow-400 mx-auto mb-3" />}
                      <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <Button
                    onClick={() => setActiveSection("portfolio")}
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 glow-button-yellow"
                  >
                    {t.viewMyWork}
                  </Button>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === "portfolio" && (
            <motion.section
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen py-20 px-6"
            >
              <div className="container mx-auto max-w-6xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent glow-text-yellow"
                >
                  {t.featuredProjects}
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {projectsData.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                      className="group relative rounded-lg overflow-hidden bg-white/5 border border-yellow-400/20 hover:border-yellow-400/30 transition-all duration-200"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title[language as keyof typeof project.title]}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-yellow-400/10 backdrop-blur-sm text-yellow-400 rounded-full text-xs border border-yellow-400/20">
                            {project.category[language as keyof typeof project.category]}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-200">
                          {project.title[language as keyof typeof project.title]}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {project.description[language as keyof typeof project.description]}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-white/5 text-gray-300 rounded-full text-xs border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => window.open(project.link, '_blank')}
                          className="w-full bg-transparent border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50 transition-all duration-200 rounded-lg font-semibold"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          {t.viewProject}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "resume" && (
            <motion.section
              key="resume"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen py-20 px-6"
            >
              <div className="container mx-auto max-w-6xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent glow-text-yellow"
                >
                  {t.experienceSkills}
                </motion.h2>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                        <Briefcase className="w-6 h-6 text-yellow-400 mr-3" />
                        {t.professionalExperience}
                      </h3>
                      <div className="relative space-y-6">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-amber-500 to-orange-500"></div>
                        {t.experiences.map((exp, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex items-start pl-10"
                          >
                            <div className="absolute left-0 top-1 flex-shrink-0 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xs z-10">
                              {exp.startYear.slice(-2)}
                            </div>
                            <div className="flex-1 glass-card p-4 rounded-lg bg-white/5 border border-yellow-400/20">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                                <div>
                                  <h4 className="text-md font-bold text-white">{exp.title}</h4>
                                  <p className="text-yellow-400 text-sm font-semibold">{exp.company}</p>
                                </div>
                                <span className="text-xs text-gray-400 mt-1 sm:mt-0">
                                  {exp.startYear} - {exp.endYear || (language === "pt" ? "Atual" : "Present")}
                                </span>
                              </div>
                              <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-1 space-y-8">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                       <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                        <Code className="w-6 h-6 text-yellow-400 mr-3" />
                        {t.technicalSkills}
                      </h3>
                      <div className="space-y-4">
                        {t.skills.map((skill, index) => (
                          <div key={index} className="glass-card p-3 rounded-lg bg-white/5 border border-yellow-400/20">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-white font-semibold text-sm">{skill.name}</span>
                              <span className="text-yellow-400 text-sm font-bold">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                                className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* SEÇÕES RESTAURADAS AQUI */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                        <User className="w-6 h-6 text-yellow-400 mr-3" />
                        {t.education}
                      </h3>
                      <div className="space-y-4">
                        {t.educationData.map((edu, index) => (
                          <div key={index} className="glass-card p-4 rounded-lg bg-white/5 border border-yellow-400/20">
                            <h4 className="font-bold text-white text-sm mb-1">{edu.degree}</h4>
                            <p className="text-yellow-400 text-sm mb-2">{edu.institution}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-xs">{edu.year}</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${edu.status === 'Concluído' || edu.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                {edu.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                        <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                        {t.certifications}
                      </h3>
                      <div className="space-y-4">
                        {t.certificationsData.map((cert, index) => (
                          <div key={index} className="glass-card p-4 rounded-lg bg-white/5 border border-yellow-400/20">
                            <h4 className="font-bold text-white text-sm mb-1">{cert.name}</h4>
                            <p className="text-yellow-400 text-sm mb-2">{cert.issuer}</p>
                            <span className="text-gray-400 text-xs">{cert.year}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "contact" && (
            <motion.section
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen py-20 px-6 flex items-center justify-center"
            >
              <div className="container mx-auto max-w-md">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent glow-text-yellow"
                >
                  {t.getInTouch}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="glass-card p-6 rounded-lg bg-white/5 border border-yellow-400/20">
                    <h3 className="text-xl font-bold mb-4 text-white">{t.contactInformation}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-300">eu@luanchicale.com.br</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-300">+55 (11) 96214-0166</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-300">São Paulo, SP</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-lg bg-white/5 border border-yellow-400/20">
                    <h3 className="text-xl font-bold mb-4 text-white text-center">{t.followMe}</h3>
                    <div className="flex justify-center space-x-4">
                      <motion.a href={socialLinks.email} whileHover={{ y: -3 }} className="p-3 bg-white/10 rounded-full text-yellow-400 hover:bg-white/20 transition-all"> <Mail className="w-6 h-6" /> </motion.a>
                      <motion.a href={socialLinks.instagram} whileHover={{ y: -3 }} className="p-3 bg-white/10 rounded-full text-yellow-400 hover:bg-white/20 transition-all"> <Instagram className="w-6 h-6" /> </motion.a>
                      <motion.a href={socialLinks.linkedin} whileHover={{ y: -3 }} className="p-3 bg-white/10 rounded-full text-yellow-400 hover:bg-white/20 transition-all"> <Linkedin className="w-6 h-6" /> </motion.a>
                      <motion.a href={socialLinks.behance} whileHover={{ y: -3 }} className="p-3 bg-white/10 rounded-full text-yellow-400 hover:bg-white/20 transition-all"> <BehanceIcon /> </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
      
      <footer className="relative z-10 py-6 px-6 text-center">
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-6">
            <p className="text-sm text-gray-400">
                Copyright © {new Date().getFullYear()} Luan Chicale por{" "}
                <a 
                    href="https://enchante.digital" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-yellow-400 hover:underline"
                >
                    enchante.digital
                </a>
            </p>
            <p className="text-xs text-gray-500 mt-2">
                Design de portfólio sob licensa pessoal por{" "}
                <a 
                    href="https://kriativa.art" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-yellow-400 hover:underline"
                >
                    Kriativa.art
                </a>
            </p>
        </div>
      </footer>

      <style jsx="true">{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FBBF24; /* amber-400 */
          border-radius: 50%;
          animation: float linear infinite;
          opacity: 0;
        }
        
        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }
        
        .glow-text-yellow {
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
        }
        
        .glow-button-yellow {
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.2);
        }
        
        .glass-card {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  )
}
