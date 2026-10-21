export default function ContactLinks() {
  return (
    <nav className="contact-icons" aria-label="Contact options">
      <a
        className="contact-icon"
        href="https://t.me/molokovika"
        target="_blank"
        rel="noreferrer"
        aria-label="Telegram"
        title="Telegram"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 2 11 13" />
          <path d="m22 2-7 20-4-9-9-4 20-7Z" />
        </svg>
      </a>
      <a
        className="contact-icon"
        href="mailto:Sharapova.svr@gmail.com"
        aria-label="Email Victoria Sharapova"
        title="Email"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </nav>
  );
}
