import Image from "next/image";
import Link from "next/link";

export const donationUrl = process.env.NEXT_PUBLIC_DONATE_URL || "#donation-link-needed";

export function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Goodwill Alliance home">
          <Image
            src="/goodwill-alliance-logo.jpeg"
            alt="Goodwill Alliance logo"
            width={54}
            height={54}
            className="brand-logo"
          />
          <span>Goodwill Alliance</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/our-work">Our Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link className="nav-donate" href="/donate">Donate</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Goodwill Alliance</div>
          <p>A 501(c)(3) nonprofit organization.</p>
          <p>EIN: 45-5111761</p>
          <p><a href="mailto:goodwillalliance@gmail.com">goodwillalliance@gmail.com</a></p>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/our-work">Our Work</Link>
          <Link href="/about">About</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Goodwill Alliance Inc. All rights reserved.
      </div>
    </footer>
  );
}

export function DonateButton({ children = "Donate Now", className = "button primary" }) {
  return (
    <Link className={className} href="/donate">
      {children}
    </Link>
  );
}
