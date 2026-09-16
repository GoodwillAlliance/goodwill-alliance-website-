import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://goodwillalliance.org"),
  title: {
    default: "Goodwill Alliance | Helping People Who Need a Helping Hand",
    template: "%s | Goodwill Alliance",
  },
  description:
    "Goodwill Alliance Inc. is a 501(c)(3) nonprofit organization focused on helping children, veterans, seniors, and people facing hardship.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Goodwill Alliance",
    description:
      "Helping people who need a helping hand. Goodwill Alliance Inc. is a 501(c)(3) nonprofit organization.",
    url: "https://goodwillalliance.org",
    siteName: "Goodwill Alliance",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
