/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Scale, 
  HandHeart, 
  FileText, 
  ShieldCheck, 
  ChevronRight, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5500000000000?text=Olá%20Dra.%20Carla%20Maia,%20vi%20seu%20site%20e%20gostaria%20de%20uma%20consultoria%20previdenciária.";

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light selection:bg-brand-bronze selection:text-white">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 border-b border-brand-bronze/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-stone-800/50 overflow-hidden border border-brand-bronze/20 transition-transform duration-300 hover:scale-110">
              <img 
                src="logo.png" 
                alt="Logo Carla Maia" 
                className="w-full h-full object-contain p-1" 
              />
            </div>
            <div>
              <span className="block font-serif text-xl font-bold tracking-tight text-brand-light">Carla Maia</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-bronze font-bold leading-none whitespace-nowrap">Advocacia Previdenciária</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#inicio" className="text-sm font-medium hover:text-brand-bronze transition-all duration-300 hover:-translate-y-0.5">Início</a>
            <a href="#servicos" className="text-sm font-medium hover:text-brand-bronze transition-all duration-300 hover:-translate-y-0.5">Serviços</a>
            <a href="#sobre" className="text-sm font-medium hover:text-brand-bronze transition-all duration-300 hover:-translate-y-0.5">Sobre</a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-brand-bronze transition-all duration-300 hover:-translate-y-0.5">Depoimentos</a>
            <a 
              href={whatsappLink} 
              className="px-6 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 text-sm font-bold shadow-lg shadow-[#25D366]/20 hover:-translate-y-1 hover:shadow-[#25D366]/30"
            >
              Consultoria Digital
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-light" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-brand-bronze/20 py-6 px-6 flex flex-col gap-4 shadow-2xl"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-serif">Início</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-serif">Serviços</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-serif">Sobre</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-serif">Depoimentos</a>
            <a 
              href={whatsappLink}
              className="mt-2 w-full py-4 rounded-xl bg-[#25D366] text-white text-center font-bold"
            >
              Falar com a Dra. Carla
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-bronze/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-bronze/5 rounded-full blur-[80px] -ml-32 -mb-32" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeIn} className="inline-block px-3 py-1 bg-brand-bronze/20 text-brand-bronze text-xs font-bold tracking-widest uppercase rounded-md mb-6">
                Consultoria 100% Digital • Atendimento Nacional
              </motion.span>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-serif text-brand-light leading-[1.1] mb-8">
                Sua trajetória merece uma <span className="italic text-brand-bronze">aposentadoria segura.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-brand-light/70 mb-10 max-w-lg leading-relaxed">
                Atendimento especializado em todo o Brasil. Deixe a burocracia com quem entende. Resolvemos seu BPC LOAS, Aposentadorias e Revisões de forma ágil e digital.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappLink}
                  className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Consultoria Grátis
                </a>
                <a 
                  href="#servicos"
                  className="px-8 py-4 rounded-full border border-brand-bronze/30 text-brand-light hover:bg-brand-bronze/10 transition-all flex items-center justify-center gap-2"
                >
                  Conhecer Serviços
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden border border-brand-bronze/20 shadow-2xl bg-brand-dark/40 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src="foto-carla.png" 
                    alt="Dra. Carla Maia" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -top-6 -right-6 w-full h-full border border-brand-bronze/10 rounded-[2rem] -z-10 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-brand-bronze p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-serif font-bold text-white leading-none">04+</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/90 font-bold leading-tight">Anos de<br />Experiência</div>
                  </div>
                </motion.div>
              </motion.div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="servicos" className="py-24 bg-brand-dark/50 border-y border-brand-bronze/10">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-brand-bronze text-sm font-bold tracking-[0.3em] uppercase">Áreas de Atuação</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 text-brand-light">Soluções Especializadas</h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "BPC / LOAS",
                desc: "Auxílio fundamental para idosos acima de 65 anos ou pessoas com deficiência em situação de vulnerabilidade.",
                icon: <HandHeart className="w-8 h-8" />
              },
              {
                title: "Aposentadorias",
                desc: "Planejamento e solicitação de aposentadoria por idade, tempo de contribuição, especial ou invalidez.",
                icon: <Scale className="w-8 h-8" />
              },
              {
                title: "Revisões",
                desc: "Análise técnica minuciosa para aumentar o valor do seu benefício previdenciário atual.",
                icon: <FileText className="w-8 h-8" />
              },
              {
                title: "Auxílio Doença",
                desc: "Suporte completo para quem está incapacitado temporariamente para o trabalho.",
                icon: <ShieldCheck className="w-8 h-8" />
              },
              {
                title: "Pensão por Morte",
                desc: "Garantia de segurança financeira para os dependentes em momentos de perda.",
                icon: <CheckCircle2 className="w-8 h-8" />
              },
              {
                title: "Consultoria Geral",
                desc: "Análise estratégica do seu histórico previdenciário para traçar o melhor caminho futuro.",
                icon: <MessageCircle className="w-8 h-8" />
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl group hover:border-brand-bronze/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-bronze/5 shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-bronze/10 flex items-center justify-center mb-6 text-brand-bronze group-hover:bg-brand-bronze group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-brand-light">{service.title}</h3>
                <p className="text-brand-light/60 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a href={whatsappLink} className="text-brand-bronze text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-brand-bronze/20 shadow-2xl relative z-10 bg-stone-800 group">
                <img src="foto-carla.png" 
                  alt="Dra. Carla Maia" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-brand-bronze/10 rounded-full -z-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <span className="text-brand-bronze text-sm font-bold tracking-[0.3em] uppercase">Conheça a Advogada</span>
              <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-4 text-brand-light">Carla Maia da Paixão</h2>
              <span className="block text-brand-bronze text-sm font-bold mb-8">OAB RJ 237440</span>
              <div className="space-y-6 text-brand-light/70 text-lg leading-relaxed">
                <p>
                  Com mais de 04 anos de atuação dedicada ao Direito Previdenciário, minha missão é transformar a vida de quem trabalhou duro a vida toda ou precisa de suporte em momentos de vulnerabilidade.
                </p>
                <p>
                  Priorizando a agilidade e a acessibilidade, estabelecemos um modelo de **atendimento 100% digital**, permitindo que brasileiros de qualquer região tenham acesso a uma advocacia de elite sem sair de casa.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Especialista em RPPS e RGPS",
                    "Pós-graduada em Direito Previdenciário",
                    "Consultoria especializada em todo o Brasil",
                    "Centenas de benefícios concedidos via digital"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-brand-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-bronze text-sm font-bold tracking-[0.3em] uppercase">Depoimentos</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-4 text-brand-light">Quem foi ajudado</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-16 rounded-[40px] relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bronze-gradient rounded-full flex items-center justify-center text-white shadow-xl">
                <MessageCircle className="w-6 h-6" />
              </div>
              
              <p className="text-2xl md:text-3xl font-serif italic text-brand-light leading-relaxed mb-8 text-center">
                "Profissional correta, eficiente, entrega tudo que promete... Excelente Advogada..."
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-bronze/20 flex items-center justify-center mb-4">
                  <span className="text-brand-bronze font-serif text-2xl font-bold">C</span>
                </div>
                <h4 className="text-xl font-serif text-brand-light">Cleber do Nascimento</h4>
                <p className="text-brand-bronze text-sm font-bold uppercase tracking-widest mt-1">51 anos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-950 relative overflow-hidden border-y border-brand-bronze/10">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Scale className="absolute top-10 left-10 w-64 h-64 rotate-12 text-brand-bronze" />
          <Scale className="absolute bottom-10 right-10 w-48 h-48 -rotate-12 text-brand-bronze" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tight">Atendimento Digital de Alto Padrão em Todo o Brasil.</h2>
            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Realizamos sua consultoria 100% digital, sem necessidade de deslocamento físico. Segurança, confidencialidade e agilidade onde você estiver.
            </p>
            <a 
              href={whatsappLink}
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg transition-all duration-300 shadow-2xl shadow-[#25D366]/20 hover:-translate-y-1 hover:shadow-[#25D366]/40 hover:bg-[#128C7E] group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Solicitar Análise Digital Grátis
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark pt-20 pb-10 border-t border-brand-bronze/10">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-stone-800/50 overflow-hidden border border-brand-bronze/20">
                <img src="logo.png" alt="Logo Carla Maia" className="w-full h-full object-contain p-1" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">Carla Maia da Paixão</span>
            </div>
            <p className="text-brand-light/50 max-w-sm mb-8 leading-relaxed">
              Escritório jurídico focado em resultados reais e na segurança do beneficiário do INSS. Ética, experiência e compromisso nacional.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-white mb-8">Canais Digitais</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href={whatsappLink} className="text-brand-light/60 text-sm hover:text-brand-bronze transition-colors">Atendimento via WhatsApp</a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-brand-bronze shrink-0" />
                <span className="text-brand-light/60 text-sm">advmaiapaixao@outlook.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-8">Atendimento Nacional</h4>
            <div className="space-y-2 text-brand-light/60 text-sm">
              <p className="text-white font-bold mb-2">Especializado em Todo o Brasil</p>
              <p>Consultoria 100% digital, sem necessidade de atendimento presencial.</p>
              <p className="pt-2 italic">Segurança e agilidade jurídica ao alcance de um clique.</p>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-6 pt-8 border-t border-brand-bronze/10 text-center">
          <p className="text-[10px] text-brand-light/30 uppercase tracking-[0.2em] mb-2 text-center w-full">
            © {new Date().getFullYear()} CARLA MAIA DA PAIXAO. Todos os direitos reservados. OAB RJ 237440
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={whatsappLink}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all cursor-pointer animate-pulse-soft"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}
