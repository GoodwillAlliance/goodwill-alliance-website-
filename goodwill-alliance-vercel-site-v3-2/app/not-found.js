import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">GOODWILL ALLIANCE</p>
      <h1>Page not found.</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="button primary" href="/">Return Home</Link>
    </main>
  );
}
