'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function HomePageComponent() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link href="#whatsapp-demo" className="hover:text-blue-600 transition-colors">WhatsApp Demo</Link></li>
              <li><Link href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
        <WhatsAppDemoSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Transform Your Workflow</h1>
          <p className="text-xl mb-8">Streamline your process, boost productivity, and achieve more with our innovative platform.</p>
          <Button size="lg">Start Free Trial</Button>
        </motion.div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image src="/GaloAI.jpg" width={600} height={400} alt="Hero Image" className="rounded-lg shadow-xl" />
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { title: 'Real-time Collaboration', description: 'Work together seamlessly with your team in real-time.' },
    { title: 'Advanced Analytics', description: 'Gain insights with powerful analytics and reporting tools.' },
    { title: 'Secure & Reliable', description: 'Your data is protected with enterprise-grade security.' },
  ]

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatsAppDemoSection() {
  return (
    <section id="whatsapp-demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience Our WhatsApp Integration</h2>
        <div className="flex justify-center">
          <motion.div
            className="w-[300px] h-[600px] bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#075E54] text-white p-4 flex items-center">
              <Image
                src="/GaloAI.jpg"
                width={40}
                height={40}
                alt="Galo AI"
                className="rounded-full mr-3"
              />
              <h3 className="text-lg font-semibold">Galo AI</h3>
            </div>
            <div className="bg-[#ECE5DD] h-[calc(100%-4rem)] p-4 overflow-y-auto">
              <WhatsAppMessages />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppMessages() {
  const [currentConversation, setCurrentConversation] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [displayedText, setDisplayedText] = useState('')

  const conversations = [
    [
      { text: "Hola Tomi! ¿Cómo planeamos el día de hoy? ¿O la semana?", sender: "user" },
      { text: "¡Hola! Hoy tenés que hacer esto, esto y esto.", sender: "galo" },
      { text: "Listo, agendado. Yo te hago acordar, ya lo agregué a tu calendario. Ah, y acordate de pagarle a Juan lo que le debías, que quedó pendiente de la semana pasada.", sender: "user" },
      { text: "¡Listo! Pagado.", sender: "user" },
    ],
    [
      { text: "(Envía un audio reenviado)", sender: "user" },
      { text: "Hola Tomi, ¿cómo va? Perdón, sé que estás en clase pero justo estoy manejando. ¿Sabés si dieron las notas de Marketing?\n-- Transcripto por Galo AI --", sender: "galo" },
    ],
    [
      { text: "¿Cómo va a estar el tráfico mañana temprano en Lugones para ir al centro?", sender: "user" },
      { text: "¡Ya lo analizo en Waze y te digo! Hoy está cargado. Desde tu casa, aproximadamente tenés 45 minutos hasta la universidad. Acordate de salir con tiempo. ¿Querés que te haga acordar?", sender: "galo" },
      { text: "Sí, porfa.", sender: "user" },
      { text: "Listo, te aviso mañana 1 hora antes de que tengas que salir.", sender: "galo" },
    ],
  ]

  useEffect(() => {
    const typeMessage = async () => {
      const message = conversations[currentConversation][currentMessage]
      for (let i = 0; i <= message.text.length; i++) {
        setDisplayedText(message.text.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 50))
      }
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (currentMessage < conversations[currentConversation].length - 1) {
        setCurrentMessage(currentMessage + 1)
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setDisplayedText('')
        setCurrentMessage(0)
        setCurrentConversation((currentConversation + 1) % conversations.length)
      }
    }

    typeMessage()
  }, [conversations]); // {{ edit_1 }}

  return (
    <div className="space-y-2">
      <AnimatePresence mode="wait">
        {conversations[currentConversation].slice(0, currentMessage + 1).map((message, index) => (
          <motion.div
            key={`${currentConversation}-${index}`}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`max-w-[70%] p-2 rounded-lg ${
              message.sender === "user" ? "bg-[#DCF8C6]" : "bg-white flex items-start"
            }`}>
              {message.sender === "galo" && (
                <Image
                  src="/GaloAI.jpg"
                  width={24}
                  height={24}
                  alt="Galo AI"
                  className="rounded-full mr-2 flex-shrink-0"
                />
              )}
              <div>
                {index === currentMessage ? displayedText : message.text}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: 'John Doe', role: 'CEO, TechCorp', quote: 'This platform has revolutionized how we work. Highly recommended!' },
    { name: 'Jane Smith', role: 'Designer, CreativeCo', quote: 'The intuitive interface and powerful features have boosted our productivity.' },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>We're dedicated to providing innovative solutions that transform how businesses operate.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}