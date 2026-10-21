import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactLinks from "../../ContactLinks";

const data = {
  design: { title: "Design projects", subtitle: "Identities, visual systems and playful problem solving.", projects: [
    { title: "Intern_init", type: "Event identity · Visual system", image: "/images/intern.png", description: "A bright identity for a student internship event—built to feel energetic, open and impossible to miss." },
    { title: "Crawl", type: "Brand exploration · Illustration", image: "/images/crawl.png", description: "A character-led visual world for a night-time live music bar, with an expressive illustration style at its heart." },
    { title: "Intern_init / in the wild", type: "Applications · Merchandise", image: "/images/intern-merch.png", description: "The identity stretches across tickets, posters, digital surfaces and wearable pieces." },
  ] },
  studies: { title: "Study cases", subtitle: "Ideas, worlds and characters made while learning by doing.", projects: [
    { title: "Lost Sparkle", type: "Game concept · Character design", image: "/images/sparkle.png", description: "A one-week game concept exploring a charming world through characters, environments, interface and a complete visual identity." },
    { title: "Mountain Ryokan", type: "Game concept · Illustration", image: "/images/ryokan.png", description: "An unrealised indie-game concept inspired by the atmosphere of a mountain inn, developed during a college internship." },
    { title: "Fumiko Hinagiri", type: "Character design · Visual storytelling", image: "/images/cyberpunk.png", description: "A cyberpunk band character explored from early sketches to a richly detailed final artwork." },
  ] },
  personal: { title: "Personal works", subtitle: "A place for exploration, experiments and making just because.", projects: [
    { title: "Digital playground", type: "Illustration · Personal", image: "/images/personal.png", description: "An evolving mix of colour, mood and character-focused illustration." },
    { title: "Sketchbook", type: "Illustration · Personal", image: "/images/personal2.png", description: "Fragments from an ongoing personal art practice." },
    { title: "Character studies", type: "Illustration · Personal", image: "/images/personal3.png", description: "More characters, studies and small visual stories." },
    { title: "Color studies", type: "Illustration · Personal", image: "/images/personal4.png", description: "Another page from the visual notebook." },
  ] },
} as const;

type Category = keyof typeof data;
export function generateStaticParams() { return Object.keys(data).map((category) => ({ category })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> { const { category } = await params; return { title: `${data[category as Category]?.title ?? "Work"} — Victoria Sharapova` }; }

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!(category in data)) notFound();
  const collection = data[category as Category];
  return <main className={`work-page work-${category}`}>
    <header className="site-header"><Link className="wordmark" href="/">VICKY<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/#work">All work</Link><Link href="/#about">About</Link><a href="mailto:Sharapova.svr@gmail.com">Contact ↗</a></nav></header>
    <div className="work-heading"><Link className="back-link" href="/#work">← BACK TO WORK</Link><h1 data-motion="left">{collection.title}</h1><p data-motion="right">{collection.subtitle}</p></div>
    <div className="projects-grid">{collection.projects.map((project, i) => <article className="project-card" key={project.title} data-motion={i % 2 === 0 ? "right" : "left"}><div className="project-image"><Image src={project.image} alt={`${project.title} by Victoria Sharapova`} fill unoptimized sizes="(max-width: 700px) 94vw, 65vw" priority={i === 0} /></div><div className="project-info"><span className="eyebrow">{project.type}</span><h2>{project.title}</h2><p>{project.description}</p></div></article>)}</div>
    <div className="work-end"><span>SEEN ENOUGH? THERE&apos;S MORE.</span><Link href="/#work">Explore other collections ↗</Link></div><footer className="site-footer"><ContactLinks /><div><span>© VICTORIA SHARAPOVA</span></div></footer>
  </main>;
}
