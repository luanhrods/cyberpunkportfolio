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
    const timer = setTimeout(() => setIsLoading(false), 2000)
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
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <div className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-teal-400 text-xl font-light">Initializing Portfolio...</p>
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
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 20}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Desktop Floating Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed top-1/3 left-8 transform z-50 hidden md:block"
      >
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {/* Home */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection("home")}
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeSection === "home"
                  ? "bg-teal-400 text-black shadow-lg shadow-teal-400/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
              title={t.home}
            >
              <Home className="w-6 h-6" />
            </motion.button>

            {/* Portfolio */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection("portfolio")}
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeSection === "portfolio"
                  ? "bg-teal-400 text-black shadow-lg shadow-teal-400/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
              title={t.portfolio}
            >
              <Briefcase className="w-6 h-6" />
            </motion.button>

            {/* Resume */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection("resume")}
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeSection === "resume"
                  ? "bg-teal-400 text-black shadow-lg shadow-teal-400/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
              title={t.resume}
            >
              <User className="w-6 h-6" />
            </motion.button>

            {/* Contact */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection("contact")}
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeSection === "contact"
                  ? "bg-teal-400 text-black shadow-lg shadow-teal-400/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
              title={t.contact}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>

            {/* Language Selector */}
            <div className="pt-4 border-t border-gray-700/50">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="p-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 w-full flex items-center justify-center"
                title="Change Language"
              >
                <Globe className="w-6 h-6" />
              </motion.button>
              <div className="text-center mt-2">
                <span className="text-xs text-teal-400 font-medium">{language.toUpperCase()}</span>
              </div>
            </div>
          </nav>
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 p-3 rounded-xl shadow-2xl"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6 text-teal-400" />}
      </motion.button>

      {/* Mobile Menu - Agora com a mesma estética do menu desktop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-20 right-6 z-40 md:hidden"
          >
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl">
              <nav className="flex flex-col space-y-4">
                {/* Home */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection("home")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    activeSection === "home"
                      ? "bg-teal-400 text-black shadow-lg shadow-teal-400/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                  title={t.home}
                >
                  <Home className="w-6 h-6" />
                </motion.button>

                {/* Portfolio */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection("portfolio")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    activeSection === "portfolio"
                      ? "bg-teal-400 text-black shadow-lg shadow-teal-400/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                  title={t.portfolio}
                >
                  <Briefcase className="w-6 h-6" />
                </motion.button>

                {/* Resume */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection("resume")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    activeSection === "resume"
                      ? "bg-teal-400 text-black shadow-lg shadow-teal-400/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                  title={t.resume}
                >
                  <User className="w-6 h-6" />
                </motion.button>

                {/* Contact */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection("contact")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    activeSection === "contact"
                      ? "bg-teal-400 text-black shadow-lg shadow-teal-400/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                  title={t.contact}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.button>

                {/* Language Selector */}
                <div className="pt-4 border-t border-gray-700/50">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                    className="p-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 w-full flex items-center justify-center"
                    title="Change Language"
                  >
                    <Globe className="w-6 h-6" />
                  </motion.button>
                  <div className="text-center mt-2">
                    <span className="text-xs text-teal-400 font-medium">{language.toUpperCase()}</span>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="min-h-screen flex items-center justify-center px-6 pt-24 md:pt-0"
            >
              <div className="text-center max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-emerald-500 to-green-600 bg-clip-text text-transparent glow-text"
                >
                  {t.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8"
                >
                  {t.role}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                  {t.description}
                </motion.p>

                {/* Specialty Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid md:grid-cols-3 gap-6 mb-12"
                >
                  {t.specialties.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/5 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300"
                    >
                      {index === 0 && <Palette className="w-12 h-12 text-teal-400 mx-auto mb-4" />}
                      {index === 1 && <Zap className="w-12 h-12 text-teal-400 mx-auto mb-4" />}
                      {index === 2 && <Code className="w-12 h-12 text-teal-400 mx-auto mb-4" />}
                      <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
                  <Button
                    onClick={() => setActiveSection("portfolio")}
                    className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 glow-button"
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
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="min-h-screen py-20 px-6"
  >
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent glow-text"
      >
        {t.featuredProjects}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal-400/10 via-emerald-500/10 to-green-600/10 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-500"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title[language as keyof typeof project.title]}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Floating Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-teal-400/20 backdrop-blur-md text-teal-400 rounded-full text-sm border border-teal-400/30 glow-text">
                  {project.category[language as keyof typeof project.category]}
                </span>
              </div>
            </div>

            <div className="relative p-6">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
                {project.title[language as keyof typeof project.title]}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description[language as keyof typeof project.description]}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/5 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-white/10 hover:border-teal-400/30 hover:text-teal-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => window.open(project.link, '_blank')}
                  className="flex-1 bg-transparent border-teal-400/30 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-500 rounded-full font-semibold group cursor-pointer"
                >
                  <Eye className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  <span className="group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {t.viewProject}
                  </span>
                </Button>
                <Button
                  size="icon"
                  onClick={() => window.open(project.link, '_blank')}
                  className="bg-transparent border border-teal-400/30 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-500 rounded-full group cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </Button>
              </div>
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="min-h-screen py-20 px-6"
            >
              <div className="container mx-auto max-w-6xl">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent glow-text"
                >
                  {t.experienceSkills}
                </motion.h2>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Experience Section - 2 columns */}
                  <div className="lg:col-span-2">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white flex items-center">
                        <Briefcase className="w-8 h-8 text-teal-400 mr-3" />
                        {t.professionalExperience}
                      </h3>

                      <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-emerald-500 to-green-600"></div>

                        <div className="space-y-8">
                          {t.experiences.map((exp, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 }}
                              className="relative flex items-start"
                            >
                              {/* Timeline Dot */}
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm z-10 shadow-lg shadow-teal-400/25">
                                <span className="text-xs">{exp.startYear.slice(-2)}</span>
                              </div>

                              {/* Content Card */}
                              <motion.div
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="ml-6 flex-1 glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group"
                              >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                  <div>
                                    <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                                      {exp.title}
                                    </h4>
                                    <p className="text-teal-400 font-semibold">{exp.company}</p>
                                  </div>
                                  <div className="mt-2 md:mt-0">
                                    <span className="px-3 py-1 bg-teal-400/20 text-teal-400 rounded-full text-sm border border-teal-400/30">
                                      {exp.startYear} - {exp.endYear || (language === "pt" ? "Atual" : "Present")}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{exp.description}</p>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Sidebar - Education & Certifications */}
                  <div className="lg:col-span-1 space-y-8">
                    {/* Education */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center">
                        <User className="w-6 h-6 text-teal-400 mr-3" />
                        {t.education}
                      </h3>
                      <div className="space-y-4">
                        {t.educationData.map((edu, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-4 rounded-xl backdrop-blur-md bg-white/5 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300"
                          >
                            <h4 className="font-bold text-white text-sm mb-1">{edu.degree}</h4>
                            <p className="text-teal-400 text-sm mb-2">{edu.institution}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-xs">{edu.year}</span>
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                                {edu.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center">
                        <Zap className="w-6 h-6 text-teal-400 mr-3" />
                        {t.certifications}
                      </h3>
                      <div className="space-y-4">
                        {t.certificationsData.map((cert, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-4 rounded-xl backdrop-blur-md bg-white/5 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group"
                          >
                            <h4 className="font-bold text-white text-sm mb-1 group-hover:text-teal-400 transition-colors">
                              {cert.name}
                            </h4>
                            <p className="text-teal-400 text-sm mb-2">{cert.issuer}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-xs">{cert.year}</span>
                              <span className="text-gray-500 text-xs font-mono">{cert.credential}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Technical Skills - Mantido como estava, mas com melhor espaçamento */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-16"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white flex items-center justify-center">
                    <Code className="w-8 h-8 text-teal-400 mr-3" />
                    {t.technicalSkills}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/5 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-white font-semibold text-sm md:text-base">{skill.name}</span>
                          <span className="text-teal-400 text-sm md:text-base font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: index * 0.1 + 1, duration: 1.5, ease: "easeOut" }}
                            className="bg-gradient-to-r from-teal-400 to-emerald-500 h-3 rounded-full shadow-lg shadow-teal-400/25"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === "contact" && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="min-h-screen py-20 px-6"
            >
              <div className="container mx-auto max-w-4xl">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent glow-text"
                >
                  {t.getInTouch}
                </motion.h2>

<div className="flex justify-center">
  {/* Contact Info & Socials */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="space-y-8 w-full max-w-md"
  >
    <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/5 border border-teal-400/20">
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">{t.contactInformation}</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-teal-400" />
          <span className="text-gray-300 text-sm md:text-base">eu@luanchicale.com.br</span>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-teal-400" />
          <span className="text-gray-300 text-sm md:text-base">+55 (11) 96214-0166</span>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="w-6 h-6 text-teal-400" />
          <span className="text-gray-300 text-sm md:text-base">São Paulo, SP</span>
        </div>
      </div>
    </div>

    <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/5 border border-teal-400/20">
      <h3 className="text-lg md:text-xl font-bold mb-4 text-white">{t.followMe}</h3>
      <div className="flex justify-center space-x-4">
        <motion.a
          href={socialLinks.email}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-black hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-300"
        >
          <Mail className="w-6 h-6" />
        </motion.a>
        <motion.a
          href={socialLinks.instagram}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
        >
          <Instagram className="w-6 h-6" />
        </motion.a>
        <motion.a
          href={socialLinks.linkedin}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          href={socialLinks.behance}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          <BehanceIcon />
        </motion.a>
      </div>
    </div>
  </motion.div>
</div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <style jsx>{`
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
          background: #00D4AA;
          border-radius: 50%;
          animation: float linear infinite;
          opacity: 0.7;
        }
        
        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(0, 212, 170, 0.5);
        }
        
        .glow-button {
          box-shadow: 0 0 20px rgba(0, 212, 170, 0.3);
        }
        
        .glass-card {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  )
}
