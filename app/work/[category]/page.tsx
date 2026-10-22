import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactLinks from "../../ContactLinks";
import PersonalGallery from "../../PersonalGallery";
import ProjectCarousel from "../../ProjectCarousel";

const gallery = (project: string, items: [string, string][]) =>
  items.map(([src, description]) => ({ src, alt: `${project}: ${description}` }));

const personalGalleryImages = [
  { src: "/images/personal-gallery/01-pink-flower.webp", alt: "Pink flower character illustration", width: 2618, height: 3965 },
  { src: "/images/personal-gallery/02-objects.webp", alt: "Illustrated camera, soda and healing balm", width: 2425, height: 1905 },
  { src: "/images/personal-gallery/03-forest-character.webp", alt: "Sleeping forest character illustration", width: 2050, height: 1921 },
  { src: "/images/personal-gallery/04-pink-chibi.webp", alt: "Pink chibi character illustration", width: 1984, height: 2290 },
  { src: "/images/personal-gallery/05-players-model.webp", alt: "Players model character sheet", width: 2479, height: 1593 },
  { src: "/images/personal-gallery/06-maneki-neko.webp", alt: "Maneki-neko illustration", width: 1946, height: 2368 },
  { src: "/images/personal-gallery/07-cat-charm.webp", alt: "Cat charm illustration", width: 1947, height: 2369 },
  { src: "/images/personal-gallery/08-blue-fashion.webp", alt: "Blue fashion illustration", width: 4532, height: 1133 },
  { src: "/images/personal-gallery/09-portrait.webp", alt: "Portrait study", width: 1870, height: 2392 },
] as const;

const data = {
  design: {
    title: "Design projects",
    subtitle: "Identities, visual systems and playful problem solving.",
    projects: [
      {
        title: "Intern_init",
        type: "visual identity · Branding",
        images: gallery("Intern_init", [
          ["/images/intern-init/01-cover.webp", "The central Intern_init event identity"],
          ["/images/intern-init/02-about-project.webp", "Project overview"],
          ["/images/intern-init/03-posters.webp", "Poster applications"],
          ["/images/intern-init/04-visual-identity.webp", "Visual identity system"],
          ["/images/intern-init/05-passes.webp", "Guest, staff and artist passes"],
          ["/images/intern-init/06-laptop.webp", "Event website on a laptop"],
          ["/images/intern-init/07-social.webp", "Social media application"],
          ["/images/intern-init/08-merchandise.webp", "Merchandise applications"],
        ]),
        description: "A visual identity for a student internship fair, designed to make company booths feel welcoming, lively and more personal than a typical recruitment event.",
      },
      {
        title: "Crawl",
        type: "Bar design concept · Visual identity",
        images: gallery("Crawl", [
          ["/images/crawl/01-menu-mockup.webp", "Cyan snack menu mockup"],
          ["/images/crawl/02-concept-slide.webp", "Crawl concept slide"],
          ["/images/crawl/03-menu-layout.webp", "Snack and drinks menu layout"],
        ]),
        description: "[WIP] a visual identity concept for a night-time live music bar, with custom illustrations for its menu, merchandise and brand materials.",
      },
      {
        title: "Event posters",
        type: "Posters · Typography",
        images: gallery("Event posters", [
          ["/images/event-posters/01-poster-1.webp", "Blue gradient poster"],
          ["/images/event-posters/02-poster-2.webp", "Textured green and blue poster"],
          ["/images/event-posters/03-poster-3.webp", "Dark oval poster"],
          ["/images/event-posters/04-poster.webp", "Distorted typography poster"],
        ]),
        description: "A study series of expressive poster experiments exploring texture, typography and contrast.",
      },
      {
        title: "Education app illustrations",
        type: "Illustration · Character design",
        images: gallery("Education app illustrations", [
          ["/images/education-app/01-1080x1080-1.webp", "Mascot with an orange and ornament"],
          ["/images/education-app/02-1080x1080.webp", "Holiday mascot decorating a tree"],
          ["/images/education-app/03-1080x1080-3.webp", "Mascot holding an orange"],
          ["/images/education-app/04-1080x1080-2.webp", "Winter mascot on a sled"],
        ]),
        description: "Bright character illustrations created for a children’s education app.",
      },
    ],
  },
  studies: {
    title: "Study cases",
    subtitle: "Ideas, worlds and characters made while learning by doing.",
    projects: [
      {
        title: "Lost Sparkle",
        type: "Game concept · Character design",
        images: gallery("Lost Sparkle", [
          ["/images/lost-sparkle/01-cover.webp", "Illustrated game cover"],
          ["/images/lost-sparkle/02-bedroom.webp", "Illustrated bedroom scene"],
          ["/images/lost-sparkle/03-character-sketches.webp", "Character sketches"],
          ["/images/lost-sparkle/04-character-lineup.webp", "Character lineup"],
          ["/images/lost-sparkle/05-character-turnaround.webp", "Character turnaround"],
          ["/images/lost-sparkle/06-world-scene.webp", "Game world and locations"],
        ]),
        description: "A project I made within one week as my final project for 3rd year studying in college. My goal was to create a visual concept for a game of my choice.",
      },
      {
        title: "SYNTA//hex",
        type: "Character design · Visual storytelling",
        images: gallery("SYNTA//hex", [
          ["/images/synta-hex/01-fumiko.webp", "Fumiko character concept"],
          ["/images/synta-hex/02-zane.webp", "Zane character concept"],
          ["/images/synta-hex/03-selene.webp", "Selene character concept"],
          ["/images/synta-hex/04-zane-art.webp", "Zane concept art"],
          ["/images/synta-hex/05-fumiko-art.webp", "Fumiko concept art"],
          ["/images/synta-hex/06-selene-art.webp", "Selene concept art"],
        ]),
        description: "My graduation project at college, where I developed the setting for a game and later created character concept art and illustrations featuring them.",
      },
      {
        title: "Mountain Ryokan",
        type: "Logo · Illustration · Concept art",
        images: gallery("Mountain Ryokan", [
          ["/images/ryokan.webp", "Mountain inn key illustration"],
          ["/images/mountain-ryokan/02-logo-explorations.webp", "Logo explorations"],
          ["/images/mountain-ryokan/03-character-concept.webp", "Character concept and color studies"],
        ]),
        description: "An indie-game concept inspired by the atmosphere of a japanese mountain inn, that I was participating in during a college internship.",
      },
    ],
  },
  personal: {
    title: "Personal works",
    subtitle: "A place for exploration, experiments and making just because.",
    projects: [
      {
        title: "Personal gallery",
        type: "Illustration · Personal",
        images: gallery("Personal gallery", personalGalleryImages.map(({ src, alt }) => [src, alt])),
        description: "A collection of personal illustrations, character studies and visual experiments.",
      },
    ],
  },
} as const;

type Category = keyof typeof data;
export function generateStaticParams() { return Object.keys(data).map((category) => ({ category })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> { const { category } = await params; return { title: `${data[category as Category]?.title ?? "Work"} — Victoria Sharapova` }; }

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!(category in data)) notFound();
  const collection = data[category as Category];
  return <main className={`work-page work-${category}`}>
    <header className="site-header"><Link className="wordmark" href="/" aria-label="Vixcci, home">vixcci<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/#work">All work</Link><Link href="/#about">About</Link><a href="mailto:Sharapova.svr@gmail.com">Contact ↗</a></nav></header>
    <div className="work-heading"><Link className="back-link" href="/#work">← BACK TO WORK</Link><h1 data-motion="left">{collection.title}</h1><p data-motion="right">{collection.subtitle}</p></div>
    {category === "personal" ? <PersonalGallery images={personalGalleryImages} /> : <div className="projects-grid">{collection.projects.map((project, i) => <article className="project-card" key={project.title} data-motion={i % 2 === 0 ? "right" : "left"}><ProjectCarousel title={project.title} images={project.images} /><div className="project-info"><span className="eyebrow">{project.type}</span><h2>{project.title}</h2><p>{project.description}</p></div></article>)}</div>}
    <div className="work-end"><span>SEEN ENOUGH? THERE&apos;S MORE.</span><Link href="/#work">Explore other collections ↗</Link></div><footer className="site-footer"><ContactLinks /><div><span>© VICTORIA SHARAPOVA</span></div></footer>
  </main>;
}
