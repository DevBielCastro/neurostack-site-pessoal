"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Briefcase, Palette, Megaphone, Server, Layers, Play, Pause, Volume2, VolumeX, ArrowRight, X } from 'lucide-react';

// (ALTERAÇÃO) Adicionada a propriedade 'bio' para o texto do modal
const teamMembers = [
  {
    name: "Gabriel Castro",
    role: "Majority Partner & Back-End Developer",
    IconComponent: Briefcase,
    videoSrc: "/assets/dev-gabriel-castro.mp4",
    valueProposition: "Com um back-end robusto, garantimos que seu negócio tenha as melhores soluções de automação, escalabilidade e segurança. Construímos a base sólida que seu projeto precisa para crescer sem limites.",
    specialties: ["Node.js", "Python", "Arquitetura de Sistemas", "DevOps"],
    bio: "Gabriel Castro é sócio majoritário e diretor de estratégia da NeuroStack, onde lidera a visão de produto, operações e a execução técnica. Com foco em back-end e automação, ele projeta e implementa arquiteturas escaláveis e seguras usando Python, Node.js, Docker e bancos relacionais — além de integrar soluções práticas como gateways de pagamento (ex.: Mercado Pago) para casos reais de negócio. Autor de projetos públicos no GitHub (entre eles repositórios de Django e soluções backend), Gabriel une governança, tecnologia e gestão para transformar projetos em produtos de alto impacto."
  },
  {
    name: "Vytor Gabriel",
    role: "Front-End Developer",
    IconComponent: Palette,
    videoSrc: "/assets/dev-vytor-gabriel.mp4",
    valueProposition: "Criamos interfaces fluidas e intuitivas que encantam usuários e transformam cliques em clientes. Cada detalhe visual é pensado para proporcionar a melhor experiência e refletir a qualidade da sua marca.",
    specialties: ["React", "UI/UX Design", "Animations", "Responsive Design"],
    bio: "Vytor Gabryel é desenvolvedor web com foco em front-end e experiência do usuário. Hábil em HTML, CSS e JavaScript, ele cria interfaces fluidas e acessíveis que priorizam conversão e usabilidade. Atualmente amplia sua atuação no back-end com Node.js e Express, contribuindo para produtos completos que entregam valor do design à infraestrutura."
  },
  {
    name: "W. Moura",
    role: "Digital Marketing Manager",
    IconComponent: Megaphone,
    videoSrc: "/assets/social-Midia-w-moura.mp4",
    valueProposition: "Planejamento de marketing e audiovisual para tornar seu negócio mais visto. Criamos a narrativa que conecta sua marca ao público certo, gerando engajamento e resultados concretos.",
    specialties: ["SEO", "Social Media", "Content Strategy", "Analytics"],
    bio: "Texto genérico sobre W. Moura. Detalhe aqui a sua expertise em estratégias de marketing digital, criação de conteúdo e como você utiliza dados para aumentar a visibilidade e o engajamento dos clientes."
  },
  {
    name: "Abraão Lucas",
    role: "Back-End Developer",
    IconComponent: Server,
    videoSrc: "/assets/dev-abraao-lucas.mp4",
    valueProposition: "Estruturamos a espinha dorsal do seu projeto com bancos de dados eficientes e APIs seguras. A performance e a integridade dos seus dados são nossa prioridade máxima.",
    specialties: ["Database Architecture", "API Development", "Cloud Services", "Security"],
    bio: "Texto genérico sobre Abraão Lucas. Explique aqui o seu foco em construir sistemas de back-end seguros e eficientes, garantindo que a infraestrutura por trás das aplicações seja robusta e escalável."
  },
  {
    name: "Janderson Gomes",
    role: "Full Stack Developer",
    IconComponent: Layers,
    videoSrc: "/assets/dev-janderson-gomes.mp4",
    valueProposition: "Da interface ao servidor, oferecemos soluções completas. Unimos design e lógica para entregar produtos digitais coesos, funcionais e prontos para o mercado.",
    specialties: ["Full Stack Development", "Project Management", "System Integration", "Technical Consulting"],
    bio: "Texto genérico sobre Janderson Gomes. Descreva a sua capacidade de atuar em todas as frentes do desenvolvimento, conectando o front-end e o back-end para criar soluções digitais completas e integradas."
  },
];

type VideoPlayerProps = {
  src: string;
  isInView: boolean;
};

// Componente para controle de vídeo
const VideoPlayer = ({ src, isInView }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(console.error);
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full md:w-4/5 mx-auto group">
      <video
        ref={videoRef}
        src={src}
        loop
        muted={isMuted}
        playsInline
        className="w-full aspect-[3/4] object-contain rounded-2xl shadow-2xl shadow-black/30 transition-all duration-500 group-hover:shadow-ns-primary/20"
        poster="/assets/video-placeholder.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={togglePlay}
          className="p-2 bg-ns-bg/80 rounded-full text-white hover:bg-ns-primary transition-colors"
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={toggleMute}
          className="p-2 bg-ns-bg/80 rounded-full text-white hover:bg-ns-primary transition-colors"
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
};

// (NOVO) Componente para o Modal de Biografia
const BioModal = ({ member, onClose }: { member: typeof teamMembers[0], onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-w-2xl w-full bg-ns-card border border-ns-border rounded-2xl shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-ns-primary/10 rounded-full border border-ns-primary">
            <member.IconComponent size={24} className="text-ns-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-ns-primary font-semibold">{member.role}</p>
          </div>
        </div>
        <p className="mt-6 text-ns-text/80 leading-relaxed">{member.bio}</p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ns-text/70 hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X size={20} />
        </button>
      </motion.div>
    </motion.div>
  );
};


const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function DevelopersSection() {
  const [modalMember, setModalMember] = useState<(typeof teamMembers[0]) | null>(null);

  useEffect(() => {
    document.body.style.overflow = modalMember ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalMember]);

  return (
    <>
      <section id="team" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-ns-primary/5 to-transparent -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-ns-primary/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-ns-text/80 bg-clip-text text-transparent">
              Conheça Nossa <span className="text-ns-primary">Equipe de Especialistas</span>
            </h2>
            <p className="mt-6 text-xl text-ns-text/80 max-w-3xl mx-auto">
              Cada membro da nossa equipe traz expertise única para transformar sua visão em realidade digital. 
              Conheça os talentos por trás das soluções que impulsionam negócios.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-ns-primary to-ns-primary/30"></div>
            <div className="space-y-32">
              {teamMembers.map((member, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
                
                return (
                  <motion.div
                    key={member.name}
                    ref={ref}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative"
                  >
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-20 h-20 bg-ns-bg rounded-full border-4 border-ns-primary z-20 shadow-lg shadow-ns-primary/30">
                      <div className="flex items-center justify-center w-12 h-12 bg-ns-primary/10 rounded-full">
                        <member.IconComponent size={28} className="text-ns-primary" />
                      </div>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16 ${index % 2 !== 0 ? 'md:direction-rtl' : ''}`}>
                      <motion.div 
                        className={`text-center md:text-left ${index % 2 !== 0 ? 'md:order-2 md:pr-8' : 'md:pl-8'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{member.name}</h3>
                        <div className="inline-flex items-center px-4 py-2 bg-ns-primary/10 rounded-full mb-6">
                          <member.IconComponent size={18} className="text-ns-primary mr-2" />
                          <span className="text-ns-primary font-semibold">{member.role}</span>
                        </div>
                        <p className="text-ns-text/80 text-lg leading-relaxed mb-6">{member.valueProposition}</p>
                        <div className="mb-8">
                          <h4 className="text-white font-semibold mb-3">Especialidades:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-ns-card/50 text-ns-text/80 rounded-full text-sm border border-ns-border"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* (ALTERAÇÃO) Botão unificado que abre o modal */}
                        <motion.button
                          onClick={() => setModalMember(member)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center px-6 py-3 bg-ns-primary text-ns-bg font-semibold rounded-lg hover:bg-ns-primary/90 transition-colors"
                        >
                          Saiba Mais
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.button>
                      </motion.div>
                      <motion.div 
                        className={`relative ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <VideoPlayer src={member.videoSrc} isInView={isInView} />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <motion.div 
            className="text-center mt-24 p-8 bg-ns-card/30 rounded-2xl border border-ns-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para transformar seu projeto?</h3>
            <p className="text-ns-text/80 mb-6 max-w-2xl mx-auto">
              Nossa equipe multidisciplinar está pronta para criar a solução perfeita para suas necessidades.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-ns-primary text-ns-bg font-bold rounded-lg hover:bg-ns-primary/90 transition-colors"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* (NOVO) Renderização do modal fora da seção principal */}
      <AnimatePresence>
        {modalMember && <BioModal member={modalMember} onClose={() => setModalMember(null)} />}
      </AnimatePresence>
    </>
  );
}