import { useEffect, useMemo, useState, type ReactNode } from "react";

function IconShell({ className, children }: { className?: string; children: ReactNode }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>;
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </IconShell>
  );
}

function Code2Icon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="m8 8-5 4 5 4" />
      <path d="m16 8 5 4-5 4" />
      <path d="m14 4-4 16" />
    </IconShell>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
    </IconShell>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="M9 19c-4 1.5-4-2-5-3" />
      <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.56 8.3c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 17.13V22" />
    </IconShell>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </IconShell>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconShell>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconShell>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </IconShell>
  );
}

function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="M21 11.5a8.5 8.5 0 0 1-13.82 6.74L3 21l1.77-4.18A8.5 8.5 0 1 1 21 11.5Z" />
    </IconShell>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="m19 15 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" />
    </IconShell>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className}>
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </IconShell>
  );
}

const projects = [
  {
    title: "Site Donuts",
    description:
      "Landing page com identidade visual marcante, apresentação de produtos e foco em conversão.",
    image: "/img/siteDonut.png",
    url: "https://site-oficial-xi.vercel.app/",
    tags: ["Landing Page", "UI", "Responsivo"],
    category: "Sites",
  },
  {
    title: "Alumi",
    description:
      "Site institucional desenvolvido para apresentar serviços de forma objetiva e profissional.",
    image: "/img/SiteAlumi.png",
    url: "https://alumi-pi.vercel.app/",
    tags: ["Institucional", "Front-end", "UI"],
    category: "Sites",
  },
  {
    title: "House Toy",
    description:
      "Projeto de vitrine digital para brinquedos, com navegação clara e layout responsivo.",
    image: "/img/brinquedos.png",
    url: "https://house-toy.vercel.app/",
    tags: ["E-commerce", "Responsivo", "CSS"],
    category: "Sites",
  },
   {
    title: "Autocenter",
    description:
      "Site ficticio de um autocenter com navegação clara e layout responsivo.",
    image: "/img/auto.png",
    url: "https://autocenter-beige.vercel.app/",
    tags: ["Institucional", "Front-end", "UI"],
    category: "Sites",
  },
  {
    title: "Dashboard de Defeitos da Linha",
    description:
      "Aplicação web estática para registrar, editar, filtrar e exportar defeitos da linha de produção e das submontagens.",
    image: "/img/dashboard-defeitos.png",
    url: "https://dashboard-defeito.vercel.app/",
    tags: ["JavaScript", "JSON", "HTML", "CSS"],
    category: "Aplicações",
  },
   {
    title: "FalaMuito",
    description:
      "Clone do whatsapp web, com cadastro e envio de mensagens, audio, imagem  em tempo real.",
    image: "/img/falamuito.png",
    url: "https://fala-muito-nisu.vercel.app/",
    tags: ["React", "TypeScript", "vite", "supabase"],
    category: "Aplicações",
  },
  {
    title: "Consulta de CEP",
    description:
      "Aplicação que consome uma API de CEP e preenche automaticamente informações de endereço.",
    image: "/img/cep.png",
    url: "https://completa-endere-opelo-cep.vercel.app/",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    category: "Aplicações",
  },

  {
    title: "Contador de Números",
    description:
      "Projeto de lógica de programação que calcula a frequência de algarismos dentro de um intervalo.",
    image: "/img/contanumero.png",
    url: "https://conta-numeros.vercel.app/",
    tags: ["JavaScript", "Algoritmos", "Lógica"],
    category: "Aplicações",
  },
  {
    title: "Jogo da Velha",
    description:
      "Jogo da velha desenvolvido em JavaScript, incluindo uma variação com tabuleiro ampliado.",
    image: "/img/jogoDaVelha.png",
    url: "https://jogo-da-velha-three-liard.vercel.app/",
    tags: ["JavaScript", "Game", "DOM"],
    category: "Aplicações",
  },
  {
    title: "Gerador de QR Code",
    description:
      "Ferramenta para gerar QR Codes personalizados por meio da API QuickChart.",
    image: "/img/qrCode.png",
    url: "https://qrcode-sooty-ten.vercel.app/",
    tags: ["JavaScript", "QuickChart", "API"],
    category: "Aplicações",
  },
  {
    title: "Login Animado",
    description:
      "Tela de autenticação responsiva com transições suaves e uma experiência visual moderna.",
    image: "/img/telaLogin.png",
    url: "https://login-animado-kappa.vercel.app/",
    tags: ["HTML", "CSS", "Animação"],
    category: "Interfaces",
  },
  
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "APIs REST",
  "Git",
  "GitHub",
  "Vercel",
  "React",
  "TypeScript",
  "node.js",
  "Supabase",
  "Render",
  "MongoDB",
  "cloudinary",
  "Design responsivo",
];

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

function PortfolioImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-950 to-slate-950">
        <Code2Icon className="h-14 w-14 text-cyan-300/60" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [showTop, setShowTop] = useState(false);

  const filters = ["Todos", "Aplicações", "Interfaces", "Sites"];

  const visibleProjects = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((project) => project?.category === filter),
    [filter]
  );

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("has-scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".scroll-reveal").forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [filter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_32%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Voltar ao início">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-violet-500 font-black text-slate-950 shadow-lg shadow-cyan-500/20">
              IP
            </span>
            <span className="font-semibold tracking-tight">
              Ismaile<span className="text-cyan-300">.dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:border-cyan-300/50 hover:bg-cyan-300/10 md:flex"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>

          <button
            type="button"
            className="rounded-xl border border-white/10 p-2 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="relative z-10">
        <section id="inicio" className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-5 pb-20 pt-32 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
          <div className="animate-[fadeInUp_0.7s_ease-out]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <SparklesIcon className="h-4 w-4" /> Desenvolvedor Front-end
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Transformo ideias em
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                experiências digitais.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Olá, sou Ismaile Pinheiro Rodrigues. Desenvolvo interfaces modernas,
              responsivas e acessíveis usando HTML, CSS e JavaScript.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Ver projetos <ExternalLinkIcon className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold transition hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-400/10"
              >
                Falar comigo <MessageCircleIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-md animate-[fadeInScale_0.7s_ease-out_0.15s_both]"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
                <PortfolioImage src="/img/sobremin.png" alt="Foto de Ismaile Pinheiro Rodrigues" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl">
                <p className="font-bold">Disponível para novos projetos</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                  <MapPinIcon className="h-4 w-4 text-cyan-300" /> Campo Largo, Paraná
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="border-y border-white/10 bg-white/[0.025] py-24">
          <div className="scroll-reveal mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Sobre mim</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Código limpo, interfaces claras e evolução constante.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                Sou desenvolvedor front-end com foco na criação de experiências digitais
                funcionais, bonitas e fáceis de usar. Gosto de transformar desafios em
                soluções objetivas e aprender algo novo em cada projeto.
              </p>
              <p>
                Fora do código, desenho para exercitar a criatividade e renovar as ideias.
                Essa combinação entre técnica e criatividade faz parte da forma como construo
                cada interface.
              </p>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="scroll-reveal max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Tecnologias</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Ferramentas que uso para criar</h2>
            <p className="mt-4 text-slate-300">
              Uma base sólida de desenvolvimento web, integração com APIs e publicação de projetos.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((technology, index) => (
              <div
                key={technology}
                style={{ animationDelay: `${index * 40}ms` }}
                className="scroll-reveal rounded-2xl border border-white/10 bg-white/[0.045] p-5 font-semibold shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07]"
              >
                <Code2Icon className="mb-4 h-6 w-6 text-cyan-300" />
                {technology}
              </div>
            ))}
          </div>
        </section>

        <section id="projetos" className="border-y border-white/10 bg-white/[0.025] py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="scroll-reveal max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Portfólio</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Projetos selecionados</h2>
                <p className="mt-4 text-slate-300">
                  Aplicações e sites que demonstram minha evolução em lógica, interfaces e integração com APIs.
                </p>
              </div>
              <div className="scroll-reveal flex flex-wrap gap-2" aria-label="Filtrar projetos">
                {filters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      filter === item
                        ? "bg-cyan-300 text-slate-950"
                        : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project) => (
                <article
                  key={project.title}
                  className="scroll-reveal group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <div className="aspect-video overflow-hidden border-b border-white/10 bg-slate-900">
                    <PortfolioImage src={project.image} alt={`Prévia do projeto ${project.title}`} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Abrir projeto ${project.title}`}
                        className="rounded-lg border border-white/10 p-2 text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-3 min-h-20 text-sm leading-6 text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="scroll-reveal overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.12] via-white/[0.04] to-violet-500/[0.12] p-8 text-center shadow-2xl shadow-cyan-950/30 sm:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Vamos conversar?</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Tem uma ideia ou oportunidade? Vamos construir algo incrível.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-slate-300">
              Estou aberto a projetos, colaborações e oportunidades na área de desenvolvimento front-end.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.link/gzrjad"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                <MessageCircleIcon className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href="mailto:seuemail@exemplo.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold transition hover:-translate-y-0.5 hover:border-violet-400/60"
              >
                <MailIcon className="h-5 w-5" /> Enviar e-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm text-slate-400 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Ismaile Pinheiro Rodrigues. Desenvolvido com dedicação.</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-white/10 p-2 hover:text-cyan-300">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/ismailepr" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-lg border border-white/10 p-2 hover:text-cyan-300">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-cyan-300 p-3 text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200"
          aria-label="Voltar ao topo"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;