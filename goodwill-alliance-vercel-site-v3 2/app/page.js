import Image from "next/image";
import Link from "next/link";
import { DonateButton, Footer, Header } from "./components";

export default function Home() {
  return <main><Header />
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <p className="eyebrow">GOODWILL ALLIANCE • 501(c)(3) PUBLIC CHARITY</p>
      <h1>Practical help. Stronger communities.</h1>
      <p className="lead">Goodwill Alliance helps people facing hardship through essential goods and services, community-based programs, and partnerships with organizations that share our commitment to helping people in need.</p>
      <div className="actions"><DonateButton /><Link className="button secondary" href="/our-work">Explore Our Work</Link></div>
    </div><div className="hero-card"><Image src="/goodwill-alliance-logo.jpeg" alt="Goodwill Alliance logo" width={520} height={520} priority className="hero-logo" /></div></div></section>

    <section className="trust-strip"><div className="container trust-grid">
      <div><strong>501(c)(3)</strong><span>IRS-recognized public charity</span></div>
      <div><strong>Community focused</strong><span>Helping people facing hardship</span></div>
      <div><strong>Growing our impact</strong><span>Programs, essentials & partnerships</span></div>
    </div></section>

    <section className="section"><div className="container narrow"><p className="eyebrow">OUR MISSION</p><h2>Turning goodwill into meaningful assistance.</h2>
      <p className="body-large">Goodwill Alliance works to strengthen communities and assist people facing hardship by providing essential goods and services, developing community-based programs, and collaborating with nonprofit and community organizations.</p>
      <p className="body">Our efforts include support for seniors, veterans, children and families, along with food and essential needs and, when resources allow, urgent or special community needs. We focus on our communities while remaining open to helping beyond our immediate area when circumstances call for it.</p>
      <Link className="text-link" href="/about">Learn more about Goodwill Alliance →</Link></div></section>

    <section className="section soft"><div className="container"><div className="section-heading"><div><p className="eyebrow">AREAS OF FOCUS</p><h2>Meeting needs in practical ways.</h2></div><p>Our programs will develop as funding, partnerships, and community needs evolve.</p></div>
      <div className="cards">
        <article className="card"><div className="icon">01</div><h3>Seniors & Veterans</h3><p>Developing assistance and community support for older adults and veterans facing hardship or unmet needs.</p></article>
        <article className="card"><div className="icon">02</div><h3>Food & Essentials</h3><p>Helping connect people and families in need with food, essential goods, and practical assistance.</p></article>
        <article className="card"><div className="icon">03</div><h3>Community Programs</h3><p>Organizing community-based initiatives and working with nonprofits and local organizations to expand the help available.</p></article>
      </div><div className="center-action"><Link className="button secondary" href="/our-work">See All Areas of Work</Link></div>
    </div></section>

    <section className="section"><div className="container about-callout"><div><p className="eyebrow">GROWING OUR REACH</p><h2>Building on past efforts to help more people.</h2></div><div><p className="body">Goodwill Alliance has undertaken charitable efforts in prior years and is now working to expand its programs, partnerships, and capacity to serve people in need.</p><p className="body">Our goal is to build sustainable community initiatives while staying responsive to needs that arise.</p><DonateButton children="Support Goodwill Alliance" /></div></div></section>

    <section className="donate-section"><div className="container donate-inner"><div><p className="eyebrow">GET INVOLVED</p><h2>Help us put goodwill into action.</h2><p>Your support can help us develop programs, provide essential assistance, and strengthen partnerships that serve people in need.</p></div><DonateButton className="button light" children="Donate to Goodwill Alliance" /></div></section>
    <Footer />
  </main>;
}
