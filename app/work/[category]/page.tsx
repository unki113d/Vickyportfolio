import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactLinks from "../../ContactLinks";
import ProjectCarousel from "../../ProjectCarousel";

const gallery = (project: string, items: [string, string][]) =>
  items.map(([src, description]) => ({ src, alt: `${project}: ${description}` }));

const data = {
  design: {
    title: "Design projects",
    subtitle: "Identities, visual systems and playful problem solving.",
    projects: [
      {
        title: "Intern_init",
        type: "Event identity · Visual system",
        images: gallery("Intern_init", [
          ["/images/intern.png", "The central event identity"],
          ["/images/gallery/intern-visual-identity.webp", "Visual identity presentation"],
          ["/images/gallery/intern-digital-application.webp", "Digital event application"],
          ["/images/gallery/intern-pass-design.webp", "Visitor, staff and artist passes"],
        ]),
        description: "A visual identity for a student internship fair, designed to make company booths feel welcoming, lively and more personal than a typical recruitment event.",
      },
      {
        title: "Crawl",
        type: "Bar design concept · Visual identity",
        images: gallery("Crawl", [
          ["/images/crawl.png", "Illustrated character artwork"],
          ["/images/gallery/crawl-identity.webp", "Crawl wordmark and illustration"],
          ["/images/gallery/crawl-menu-illustration.webp", "Menu illustration"],
          ["/images/gallery/crawl-shirt-design.webp", "Merchandise concepts"],
          ["/images/gallery/crawl-illustration.webp", "Character illustration"],
          ["/images/gallery/crawl-merchandise.webp", "Merchandise in use"],
          ["/images/gallery/crawl-character-study.webp", "Character design study"],
          ["/images/gallery/crawl-character-art.webp", "Finished character artwork"],
          ["/images/gallery/crawl-artboard.webp", "Crawl design board"],
        ]),
        description: "A visual identity concept for a night-time live music bar, with custom illustrations for its menu, merchandise and brand materials.",
      },
      {
        title: "Event applications",
        type: "Applications · Merchandise",
        images: gallery("Event applications", [
          ["/images/intern-merch.png", "Event merchandise"],
          ["/images/gallery/intern-laptop-application.webp", "Website shown on a laptop"],
          ["/images/gallery/intern-event-display.webp", "Outdoor event display"],
          ["/images/gallery/intern-merch-model.webp", "Merchandise and apparel"],
          ["/images/gallery/intern-merchandise.webp", "Branded clothing"],
        ]),
        description: "The Intern_init identity applied across tickets, posters, digital assets and merchandise.",
      },
      {
        title: "Typography studies",
        type: "Posters · Typography",
        images: gallery("Typography studies", [
          ["/images/gallery/poster-study-light.webp", "Light poster composition"],
          ["/images/gallery/poster-study-dark.webp", "Dark poster composition"],
          ["/images/gallery/poster-background-blue.webp", "Blue typographic study"],
          ["/images/gallery/poster-background-warm.webp", "Warm gradient poster"],
          ["/images/gallery/poster-background-violet.webp", "Violet gradient poster"],
          ["/images/gallery/poster-texture.webp", "Experimental texture study"],
        ]),
        description: "A series of expressive poster experiments exploring texture, typography and contrast.",
      },
      {
        title: "Education app illustrations",
        type: "Illustration · Character design",
        images: gallery("Education app illustrations", [
          ["/images/gallery/education-app-cat.webp", "Cat mascot with an orange"],
          ["/images/gallery/education-app-cat-variant.webp", "Alternate cat mascot pose"],
          ["/images/gallery/education-app-holiday-cat.webp", "Holiday mascot illustration"],
          ["/images/gallery/education-app-gift-cat.webp", "Mascot with a gift"],
          ["/images/gallery/education-app-winter-cat.webp", "Winter holiday mascot"],
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
          ["/images/sparkle.png", "Illustrated game cover"],
          ["/images/gallery/lost-sparkle-world.webp", "Game world and locations"],
          ["/images/gallery/lost-sparkle-characters.webp", "Character lineup"],
          ["/images/gallery/lost-sparkle-logo.webp", "Game logo"],
          ["/images/gallery/lost-sparkle-loading.webp", "Loading screen"],
          ["/images/gallery/lost-sparkle-journal.webp", "In-game journal interface"],
          ["/images/gallery/lost-sparkle-room.webp", "Illustrated bedroom scene"],
          ["/images/gallery/lost-sparkle-interface.webp", "Game interface exploration"],
          ["/images/gallery/lost-sparkle-room-art.webp", "Interior environment illustration"],
        ]),
        description: "A game concept developed through its characters, environments, interface and visual identity.",
      },
      {
        title: "Mountain Ryokan",
        type: "Game concept · Illustration",
        images: gallery("Mountain Ryokan", [
          ["/images/ryokan.png", "Mountain inn key illustration"],
          ["/images/gallery/ryokan-process-board.webp", "Early scene and character exploration"],
          ["/images/gallery/ryokan-key-art.webp", "Finished inn illustration"],
          ["/images/gallery/ryokan-sketch.webp", "Environment sketch"],
          ["/images/gallery/ryokan-scene-study.webp", "Scene composition studies"],
          ["/images/gallery/ryokan-final-art.webp", "Final interior artwork"],
          ["/images/gallery/ryokan-interior-sketch.webp", "Interior concept sketch"],
          ["/images/gallery/ryokan-character-concept.webp", "Character concept"],
          ["/images/gallery/ryokan-final-scene.webp", "Finished story scene"],
        ]),
        description: "An indie-game concept inspired by the atmosphere of a mountain inn, developed during a college internship.",
      },
      {
        title: "Fumiko Hinagiri",
        type: "Character design · Visual storytelling",
        images: gallery("Fumiko Hinagiri", [
          ["/images/cyberpunk.png", "Fumiko, Zane and Selene character lineup"],
          ["/images/gallery/fumiko-process.webp", "Early character sketches"],
          ["/images/gallery/fumiko-board.webp", "Fumiko design board"],
          ["/images/gallery/fumiko-artwork.webp", "Finished Fumiko artwork"],
          ["/images/gallery/fumiko-artwork-2.webp", "Fumiko character artwork"],
          ["/images/gallery/fumiko-lineup.webp", "Character lineup and poses"],
          ["/images/gallery/zane-board.webp", "Zane character design board"],
          ["/images/gallery/zane-artwork.webp", "Zane finished artwork"],
          ["/images/gallery/zane-artwork-2.webp", "Zane alternate artwork"],
          ["/images/gallery/selene-board.webp", "Selene character design board"],
          ["/images/gallery/selene-artwork.webp", "Selene finished artwork"],
        ]),
        description: "A cyberpunk band explored through its characters, from early sketches to finished artwork and visual identity.",
      },
    ],
  },
  personal: {
    title: "Personal works",
    subtitle: "A place for exploration, experiments and making just because.",
    projects: [
      {
        title: "Digital playground",
        type: "Illustration · Personal",
        images: gallery("Digital playground", [
          ["/images/personal.png", "Panoramic personal illustration"],
          ["/images/gallery/personal-panorama.webp", "Wide personal artwork"],
          ["/images/gallery/personal-character-illustration.webp", "Fantasy character illustration"],
          ["/images/gallery/personal-portrait-study.webp", "Portrait study"],
        ]),
        description: "An evolving mix of colour, mood and character-focused illustration.",
      },
      {
        title: "Sketchbook",
        type: "Illustration · Personal",
        images: gallery("Sketchbook", [
          ["/images/personal2.png", "Sketchbook artwork"],
          ["/images/gallery/personal-object-studies.webp", "Everyday object studies"],
        ]),
        description: "Fragments from an ongoing personal art practice.",
      },
      {
        title: "Character studies",
        type: "Illustration · Personal",
        images: gallery("Character studies", [
          ["/images/personal3.png", "Character study"],
          ["/images/gallery/personal-character-model.webp", "Character model sheet"],
        ]),
        description: "More characters, studies and small visual stories.",
      },
      {
        title: "Color studies",
        type: "Illustration · Personal",
        images: gallery("Color studies", [
          ["/images/personal4.png", "Color and shape study"],
          ["/images/gallery/personal-lucky-cat-a.webp", "Lucky cat illustration"],
          ["/images/gallery/personal-lucky-cat-b.webp", "Alternate lucky cat illustration"],
        ]),
        description: "Another page from the visual notebook.",
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
    <header className="site-header"><Link className="wordmark" href="/">Victoria<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/#work">All work</Link><Link href="/#about">About</Link><a href="mailto:Sharapova.svr@gmail.com">Contact ↗</a></nav></header>
    <div className="work-heading"><Link className="back-link" href="/#work">← BACK TO WORK</Link><h1 data-motion="left">{collection.title}</h1><p data-motion="right">{collection.subtitle}</p></div>
    <div className="projects-grid">{collection.projects.map((project, i) => <article className="project-card" key={project.title} data-motion={i % 2 === 0 ? "right" : "left"}><ProjectCarousel title={project.title} images={project.images} /><div className="project-info"><span className="eyebrow">{project.type}</span><h2>{project.title}</h2><p>{project.description}</p></div></article>)}</div>
    <div className="work-end"><span>SEEN ENOUGH? THERE&apos;S MORE.</span><Link href="/#work">Explore other collections ↗</Link></div><footer className="site-footer"><ContactLinks /><div><span>© VICTORIA SHARAPOVA</span></div></footer>
  </main>;
}
