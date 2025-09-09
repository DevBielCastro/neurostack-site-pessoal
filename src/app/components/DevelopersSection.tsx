"use client";

// Dados da equipe atualizados com a "Proposta de Valor" de cada um.
const teamMembers = [
  {
    name: "Gabriel Castro",
    role: "Majority Partner & Back-End Developer",
    videoSrc: "/assets/dev-gabriel-castro.mp4",
    valueProposition: "Com um back-end robusto, garantimos que seu negócio tenha as melhores soluções de automação, escalabilidade e segurança. Construímos a base sólida que seu projeto precisa para crescer sem limites."
  },
  {
    name: "Vytor Gabriel",
    role: "Front-End Developer",
    videoSrc: "/assets/dev-vytor-gabriel.mp4",
    valueProposition: "Criamos interfaces fluidas e intuitivas que encantam usuários e transformam cliques em clientes. Cada detalhe visual é pensado para proporcionar a melhor experiência e refletir a qualidade da sua marca."
  },
  {
    name: "W. Moura",
    role: "Digital Marketing Manager",
    videoSrc: "/assets/social-Midia-w-moura.mp4",
    valueProposition: "Planejamento de marketing e audiovisual para tornar seu negócio mais visto. Criamos a narrativa que conecta sua marca ao público certo, gerando engajamento e resultados concretos."
  },
  {
    name: "Abraão Lucas",
    role: "Back-End Developer",
    videoSrc: "/assets/dev-abraao-lucas.mp4",
    valueProposition: "Estruturamos a espinha dorsal do seu projeto com bancos de dados eficientes e APIs seguras. A performance e a integridade dos seus dados são nossa prioridade máxima."
  },
  {
    name: "Janderson Gomes",
    role: "Full Stack Developer",
    videoSrc: "/assets/dev-janderson-gomes.mp4",
    valueProposition: "Da interface ao servidor, oferecemos soluções completas. Unimos design e lógica para entregar produtos digitais coesos, funcionais e prontos para o mercado."
  },
];

export default function DevelopersSection() {
  return (
    <section id="developers" className="container py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Uma Equipe, <span className="text-ns-primary">Múltiplas Soluções</span>
        </h2>
        <p className="mt-4 text-lg text-ns-text/80">
          Cada especialista da nossa equipe agrega um valor único ao seu projeto. Veja como transformamos desafios em resultados.
        </p>
      </div>

      {/* Container da Timeline */}
      <div className="relative">
        {/* A Linha Vertical da Timeline (visível apenas em telas maiores) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-ns-card"></div>

        <div className="space-y-20 md:space-y-28">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
              
              {/* Coluna de Texto */}
              <div className={`text-center md:text-left ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <h3 className="text-3xl font-bold text-white">{member.name}</h3>
                <p className="text-ns-primary font-semibold mb-4">{member.role}</p>
                <p className="text-ns-text/80 leading-relaxed">{member.valueProposition}</p>
              </div>

              {/* Coluna do Vídeo */}
              <div className={`relative ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                 {/* Círculo de conexão com a timeline (visível apenas em telas maiores) */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-ns-primary rounded-full z-10"
                     style={index % 2 !== 0 ? { right: '-2.2rem' } : { left: '-2.2rem' }}>
                </div>
                <div className="w-full md:w-2/3 mx-auto">
                  <video
                    src={member.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    // (ALTERADO) object-contain mostra o vídeo inteiro, sem cortar.
                    className="w-full aspect-[3/4] object-contain rounded-2xl shadow-2xl shadow-black/30"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}