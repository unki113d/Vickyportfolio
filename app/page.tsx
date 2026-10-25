import Image from "next/image";
import Link from "next/link";
import ContactLinks from "./ContactLinks";
import DynamicPhrase from "./DynamicPhrase";

const collections = [
  { title: "Design projects", note: "Identities, visual systems & bold little worlds", image: "/images/intern.webp", href: "/work/design", className: "design" },
  { title: "Study cases", note: "Games, characters & ideas in progress", image: "/images/sparkle.webp", href: "/work/studies", className: "studies" },
  { title: "Personal works", note: "Illustration, experiments & things made for joy", image: "/images/personal-gallery/08-blue-fashion.webp", href: "/work/personal", className: "personal" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Vixcci, home">vixcci<span>✳︎</span></Link>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="mailto:Sharapova.svr@gmail.com">Contact ↗</a></nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
        <div className="hero-kicker">ILLUSTRATOR / GRAPHIC DESIGNER</div>
        <div className="hero-photo-wrap"><div className="polaroid"><div className="polaroid-photo"><Image src="/images/victoria-portrait.jpg" alt="Victoria Sharapova" fill priority unoptimized sizes="(max-width: 700px) 72vw, 34vw" /></div></div><span className="hero-spark spark-a" aria-hidden="true">✳︎</span><span className="hero-spark spark-b" aria-hidden="true">✴︎</span></div>
        <div className="hero-copy"><span className="eyebrow">HELLO! I&apos;M</span><h1 id="hero-title">Victoria<br /><em>Sharapova</em></h1><p>I draw characters, build visual worlds and turn ideas into expressive design. Welcome to my corner of the internet.</p><a className="pill-link" href="#work">Explore my work <span aria-hidden="true">↘</span></a></div>
      </section>

      <section className="collection-section" id="work" aria-labelledby="work-title">
        <div className="section-intro"><h2 id="work-title" data-motion="up">A little bit<br />of <em>everything</em></h2></div>
        <div className="collection-list">{collections.map((item, index) => <Link href={item.href} className={`collection-card ${item.className}`} key={item.title} data-motion={index === 0 ? "left" : index === 1 ? "right" : "up"}><div className="collection-image"><Image src={item.image} alt="" fill unoptimized sizes="(max-width: 700px) 88vw, 46vw" /></div><div className="collection-meta"><h3>{item.title}</h3><p>{item.note}</p></div><span className="collection-arrow" aria-hidden="true">↗</span></Link>)}</div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title"><h2 id="about-title" data-motion="left"><span className="about-primary">Always curious</span><br /><DynamicPhrase /></h2></section>

      <footer className="site-footer"><ContactLinks /><div><span>© VICTORIA SHARAPOVA</span></div></footer>
    </main>
  );
}
