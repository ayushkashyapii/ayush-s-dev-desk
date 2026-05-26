import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import browserIcon from "@/assets/desk/browser.ico";

const siteUrl = "https://ayushkashyap.me";
const siteTitle = "Ayush Kashyap | Software Engineer Portfolio";
const siteDescription =
  "Personal portfolio of Ayush Kashyap, a software engineer building interactive web apps, systems projects, terminal tools, games, and developer experiences.";
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayush Kashyap",
  url: siteUrl,
  jobTitle: "Software Engineer",
  email: "mailto:kashyap11ayush02@gmail.com",
  sameAs: [
    "https://github.com/AyushKashyapII",
    "https://www.linkedin.com/in/ayush-kashyap-9492422a8/",
    "https://x.com/AyushKashyapII",
  ],
  knowsAbout: ["Software Engineering", "Web Development", "React", "TypeScript", "Go", "Systems Programming"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "author", content: "Ayush Kashyap" },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "Ayush Kashyap, AyushKashyap, Ayush Kashyap portfolio, software engineer, web developer, React developer, TypeScript developer",
      },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:site_name", content: "Ayush Kashyap" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@AyushKashyapII" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
    ],
    links: [
      { rel: "canonical", href: siteUrl },
      { rel: "icon", type: "image/x-icon", href: browserIcon },
      { rel: "shortcut icon", type: "image/x-icon", href: browserIcon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Kalam:wght@400;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
