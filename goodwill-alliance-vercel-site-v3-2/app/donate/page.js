import Link from "next/link";
import { Footer, Header, donationUrl } from "../components";

export const metadata = {
  title: "Donate",
  description:
    "Support Goodwill Alliance Inc. and help us build resources for children, veterans, seniors, and people facing hardship.",
};

export default function DonatePage() {
  const hasDonationLink = Boolean(process.env.NEXT_PUBLIC_DONATE_URL);

  return (
    <main>
      <Header />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">SUPPORT GOODWILL ALLIANCE</p>
          <h1>Your generosity can help someone move forward.</h1>
          <p className="lead">
            Donations help Goodwill Alliance build resources and support for
            children, veterans, seniors, and people facing hardship.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container donation-layout">
          <div className="donation-card">
            <p className="eyebrow">MAKE A CONTRIBUTION</p>
            <h2>Donate securely online.</h2>
            <p className="body">
              Goodwill Alliance Inc. is a 501(c)(3) tax-exempt nonprofit
              organization. Donations are intended to support the organization’s
              charitable mission.
            </p>
            {hasDonationLink ? (
              <a className="button primary" href={donationUrl} target="_blank" rel="noopener noreferrer">
                Continue to Secure Donation Page
              </a>
            ) : (
              <div className="setup-notice">
                <strong>Donation processing is being set up.</strong>
                <p>
                  The secure donation link will appear here once our donation
                  processor is connected.
                </p>
              </div>
            )}
            <p className="fine-print">
              Goodwill Alliance Inc. • EIN 45-5111761
            </p>
          </div>
          <aside className="donation-side">
            <p className="eyebrow">WHERE YOUR SUPPORT GOES</p>
            <h3>Helping people who need a helping hand.</h3>
            <ul>
              <li>Children experiencing hardship</li>
              <li>Veterans who need additional support</li>
              <li>Seniors and older adults facing challenges</li>
              <li>Community initiatives as programs develop</li>
            </ul>
            <Link className="text-link" href="/our-work">Learn about our work →</Link>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
