"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Camera,
  Check,
  Clapperboard,
  FileSpreadsheet,
  FileText,
  Instagram,
  Mail,
  Menu,
  MonitorPlay,
  Moon,
  Palette,
  PenTool,
  Phone,
  Sparkles,
  X
} from "lucide-react";

const socials = {
  facebook: "https://www.facebook.com/share/1GwhySWQaW/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/ohh.itz_ma_hin?psln=a3FjeWJiZnJlZjNw",
  email: "mailto:naturewithmahin12@gmail.com",
  phone: "tel:01961102047"
};

const skills = [
  { title: "Video Editing", text: "Shaping raw footage into clear, compelling stories.", icon: MonitorPlay },
  { title: "Photography", text: "Finding honest, memorable moments in every frame.", icon: Camera },
  { title: "Videography", text: "Building mood, movement and meaning through motion.", icon: Clapperboard },
  { title: "Photo Editing", text: "Refining images with a thoughtful, polished eye.", icon: Sparkles },
  { title: "Microsoft Excel", text: "Organizing ideas and information with precision.", icon: FileSpreadsheet },
  { title: "Microsoft Word", text: "Crafting clean, considered documents and layouts.", icon: FileText },
  { title: "Adobe Photoshop", text: "Exploring image-making through layers and detail.", icon: Palette },
  { title: "Graphic Design", text: "Creating clear, expressive visuals with purpose.", icon: PenTool }
];

const projects = [
  { title: "Light / Motion", category: "Video Editing", type: "Motion study", image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85" },
  { title: "Between Frames", category: "Videography", type: "Cinematic study", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85" },
  { title: "Soft Contrast", category: "Photo Editing", type: "Image treatment", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85" },
  { title: "The Edit", category: "Video Editing", type: "Motion study", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85" },
  ...Array.from({ length: 19 }, (_, index) => ({
    title: `Photography ${String(index + 1).padStart(2, "0")}`,
    category: "Photography",
    type: "Original photograph",
    image: `/images/photography/photo-${String(index + 1).padStart(2, "0")}.jpg`
  }))
];

const categories = ["All", "Video Editing", "Photography", "Videography", "Photo Editing"];

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-violet hover:bg-violet hover:text-ink">
      <Icon size={18} strokeWidth={1.7} />
    </a>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="noise min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="display text-xl font-bold tracking-[-.04em]" onClick={closeMenu}>mahin<span className="text-violet">.</span></a>
          <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[76px] flex-col gap-6 border-b border-white/10 bg-ink px-6 py-7 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
            {["About", "Skills", "Work", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="text-sm text-white/60 transition hover:text-white">{item}</a>
            ))}
            <a href="#contact" onClick={closeMenu} className="w-fit rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-violet hover:text-violet">Let&apos;s talk <ArrowRight className="ml-2 inline" size={15} /></a>
          </nav>
          <button className="text-white md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <section id="top" className="grid-lines relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:pt-28">
        <div className="relative z-10">
          <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.3em] text-violet"><span className="h-px w-10 bg-violet" />Creative portfolio / 2024</p>
          <h1 className="display max-w-3xl text-[clamp(3.7rem,9vw,8rem)] font-medium leading-[.9] tracking-[-.075em]">Turning ideas<br /><span className="gradient-text">into visual</span><br />stories<span className="text-violet">.</span></h1>
          <p className="mt-9 max-w-lg text-base leading-7 text-white/60">Creative video editor, photographer and visual storyteller. I bring a curious eye and a careful process to every frame.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#work" className="group rounded-full bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-violet">View my work <ArrowDownRight className="ml-6 inline transition group-hover:rotate-45" size={17} /></a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3.5 text-sm text-white transition hover:border-white">Contact me</a>
          </div>
          <div className="mt-14 flex items-center gap-3"><span className="mr-2 text-xs uppercase tracking-widest text-white/35">Find me</span><SocialLink href={socials.facebook} label="Facebook" icon={FacebookMark} /><SocialLink href={socials.instagram} label="Instagram" icon={Instagram} /></div>
        </div>
        <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-violet/40" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-violet/10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-2xl shadow-violet/10">
            <Image src="/images/mahin-portrait.jpg" alt="Portrait of Mahin" fill priority className="object-cover object-center grayscale-[15%]" sizes="(max-width: 1024px) 90vw, 470px" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><div><p className="display text-2xl font-medium">Mahin</p><p className="mt-1 text-xs uppercase tracking-[.18em] text-white/50">Visual storyteller</p></div><span className="float rounded-full border border-white/20 bg-ink/40 p-3"><Moon size={17} className="text-violet" /></span></div>
          </div>
          <span className="absolute -right-8 top-1/2 hidden -rotate-90 text-[10px] uppercase tracking-[.35em] text-white/30 sm:block">Scroll to explore</span>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><p className="text-xs uppercase tracking-[.3em] text-violet">01 / About me</p><div><h2 className="display max-w-3xl text-4xl leading-tight tracking-[-.04em] md:text-6xl">The best stories are found in the <span className="text-white/40">details.</span></h2><p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">I&apos;m Mahin, a creative professional with a passion for visual storytelling. From the first spark of an idea to the final polished frame, I enjoy turning everyday moments into visual experiences that feel intentional, honest and alive.</p><p className="mt-5 max-w-2xl leading-7 text-white/45">My work moves between video editing, photography, videography and image-making. I also bring a practical, detail-focused approach to the digital tools that support great creative work.</p><div className="mt-9 flex items-center gap-2 text-sm text-violet"><Check size={17} /> Open to creative collaborations</div></div></div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-white/[.02] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-5 text-xs uppercase tracking-[.3em] text-violet">02 / What I do</p><h2 className="display text-4xl tracking-[-.04em] md:text-6xl">Skills &amp; <span className="text-white/35">tools.</span></h2></div><p className="max-w-xs text-sm leading-6 text-white/45">A balance of creative instinct, visual craft and practical digital fluency.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{skills.map(({ title, text, icon: Icon }, index) => <div key={title} className={`glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-violet/60 ${index === 0 ? "lg:col-span-2" : ""}`}><div className="mb-12 flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet/10 text-violet"><Icon size={20} strokeWidth={1.5} /></span><span className="text-xs text-white/25">0{index + 1}</span></div><h3 className="display text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{text}</p></div>)}</div></div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-28 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-5 text-xs uppercase tracking-[.3em] text-violet">03 / Selected work</p><h2 className="display text-4xl tracking-[-.04em] md:text-6xl">A few things I&apos;ve <span className="text-white/35">made.</span></h2></div><p className="max-w-sm text-sm leading-6 text-white/45">Explore Mahin&apos;s original photography alongside selected visual studies.</p></div><div className="my-12 flex flex-wrap gap-2">{categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-xs transition ${filter === category ? "bg-paper text-ink" : "border border-white/15 text-white/50 hover:border-white/40 hover:text-white"}`}>{category}</button>)}</div><div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project, index) => { const isPlaceholder = project.image.startsWith("http"); return <button key={project.title} onClick={() => setSelected(project)} className="project-card group text-left"><div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 ${index === 1 ? "sm:mt-12" : ""}`}><Image src={project.image} alt={`${project.title}${isPlaceholder ? " placeholder" : ""} project`} fill className="project-image object-cover" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/25" /><span className="absolute right-4 top-4 rounded-full bg-ink/70 p-2 opacity-0 transition group-hover:opacity-100"><ArrowUpRightIcon /></span></div><p className="mt-4 text-xs uppercase tracking-[.2em] text-violet">{project.category}</p><h3 className="display mt-2 text-2xl">{project.title}</h3><p className="mt-1 text-sm text-white/40">{project.type}{isPlaceholder ? " · Placeholder" : ""}</p></button>; })}</div></section>

      <section className="px-6 py-12 lg:px-10"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2"><a href={socials.instagram} target="_blank" rel="noreferrer" className="glass group rounded-3xl p-8 transition hover:border-violet/60"><Instagram className="text-violet" size={25} /><p className="mt-16 text-xs uppercase tracking-[.25em] text-white/40">Follow along</p><div className="mt-3 flex items-end justify-between"><h3 className="display text-3xl">Instagram</h3><ArrowUpRightIcon className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div></a><a href={socials.facebook} target="_blank" rel="noreferrer" className="group rounded-3xl bg-[#4267B2] p-8 transition hover:bg-[#5278c4]"><FacebookMark className="text-white" /><p className="mt-16 text-xs uppercase tracking-[.25em] text-white/60">Connect with me</p><div className="mt-3 flex items-end justify-between"><h3 className="display text-3xl">Facebook</h3><ArrowUpRightIcon className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div></a></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-10"><div className="relative overflow-hidden rounded-[2rem] border border-violet/25 bg-violet/10 px-7 py-16 text-center md:px-16"><div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-violet/20 blur-3xl" /><div className="relative"><p className="mb-5 text-xs uppercase tracking-[.3em] text-violet">04 / Get in touch</p><h2 className="display mx-auto max-w-3xl text-5xl leading-[.95] tracking-[-.06em] md:text-7xl">Have a story<br /><span className="text-violet">to tell?</span></h2><p className="mx-auto mt-7 max-w-md leading-7 text-white/55">For creative conversations, collaborations or just to say hello, send me an email, call me or find me on social.</p><div className="mt-9 flex flex-wrap items-center justify-center gap-3"><SocialLink href={socials.facebook} label="Facebook" icon={FacebookMark} /><SocialLink href={socials.instagram} label="Instagram" icon={Instagram} /><SocialLink href={socials.email} label="Email Mahin" icon={Mail} /><SocialLink href={socials.phone} label="Call Mahin" icon={Phone} /></div><div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/55"><a href={socials.email} className="transition hover:text-white">naturewithmahin12@gmail.com</a><span className="hidden text-white/20 sm:inline">|</span><a href={socials.phone} className="transition hover:text-white">01961102047</a></div></div></div></section>

      <footer className="border-t border-white/10 px-6 py-9 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/40 md:flex-row md:items-center"><div><a href="#top" className="display text-xl text-white">mahin<span className="text-violet">.</span></a><p className="mt-2 text-xs">Video Editor · Photographer · Visual Storyteller</p></div><div className="flex flex-wrap items-center gap-5"><a href="#about" className="transition hover:text-white">About</a><a href="#work" className="transition hover:text-white">Work</a><a href="#contact" className="transition hover:text-white">Contact</a><span>© {new Date().getFullYear()} Mahin</span></div></div></footer>

      {selected && <div role="dialog" aria-modal="true" aria-label={`${selected.title} project preview`} className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm" onClick={() => setSelected(null)}><div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#111217]" onClick={(event) => event.stopPropagation()}><button onClick={() => setSelected(null)} aria-label="Close project preview" className="absolute right-4 top-4 z-10 rounded-full bg-ink/70 p-2 text-white"><X size={18} /></button><div className="relative aspect-video"><Image src={selected.image} alt="" fill className="object-cover" sizes="90vw" /></div><div className="p-6"><p className="text-xs uppercase tracking-[.2em] text-violet">{selected.category}{selected.image.startsWith("http") ? " · Placeholder" : ""}</p><h3 className="display mt-2 text-3xl">{selected.title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{selected.image.startsWith("http") ? <>This is a placeholder project preview. Replace the image and details with your own work in <code className="text-violet">components/Portfolio.js</code>.</> : "Original photography by Mahin."}</p></div></div></div>}
    </main>
  );
}

function ArrowUpRightIcon({ className = "" }) {
  return <ArrowDownRight size={18} className={`rotate-[-45deg] ${className}`} />;
}

function FacebookMark({ className = "" }) {
  return <span className={`display text-xl font-bold ${className}`}>f</span>;
}
