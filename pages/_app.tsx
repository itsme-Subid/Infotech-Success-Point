import Head from "next/head";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import favicon from "./../public/icons/favicon.ico";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const GlobalStyle = createGlobalStyle`
:root {
  --light-color: 235, 236, 241;
  --dark-color: 49, 49, 49;
  --primary-color: 251, 237, 184;
  --primary-text-color: 233, 196, 151;
  --secondary-color: 86, 60, 40;
  --white-color: 255, 255, 255;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-poppins, sans-serif);
  outline: none;
}
body {
  position: relative;
  background: rgba(var(--light-color), 1);
  color: rgba(var(--dark-color), 1);
  overflow-x: hidden;
  transition: all 0.15s ease;
}
.container {
  margin-inline: auto;
  width: min(90%, 70rem);
}
.App {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
::-webkit-scrollbar {
  width: 0;
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.15s;
}
`;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const og = {
  title: "Infotech Success Point",
  describedTitle:
    "🖥️💻📚 Infotech Success Point: Premier computer learning center in Baidyabati, Sheoraphuli, and Bhadreswar regions.",
  description:
    "Infotech Success Point offers a comprehensive range of computer education and training courses to students in the Baidyabati, Sheoraphuli, and Bhadreswar regions. Our experienced instructors and state-of-the-art facilities ensure that our students receive the best possible education and training to succeed in the ever-changing field of technology.",
  image: favicon.src,
  url: "https://infotech-success-point.vercel.app/",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{og.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="description" content={og.description} />

        <link rel="canonical" href={og.url} />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Full-Stack Developer",
            "@id": ${og.url},
            "name": ${og.describedTitle},
            "url": ${og.url},
            "sameAs": [
              "https://www.instagram.com/itsme_subid/",
              "https://twitter.com/ItsmeSubid"
            ],
            "logo": {
              "@type": "ImageObject",
              "@id": ${og.url},
              "inLanguage": "en-US",
              "url": ${og.image},
              "contentUrl": ${og.image},
              "width": 1000,
              "height": 1000,
              "caption": "itsme-Subid"
            },
            "image": { "@id": ${og.url} }
          },
          {
            "@type": "WebPage",
            "@id": ${og.url},
            "url": ${og.url},
            "name": ${og.describedTitle},
            "isPartOf": {
              "@id": ${og.url}
            },
            "about": { "@id": ${og.url} },
            "description": ${og.description},
            "inLanguage": "en-US"
          }
        ]
      }
      `}
        </script>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={og.title} />
        <meta property="og:url" content={og.url} />
        <meta property="og:title" content={og.describedTitle} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={og.url} />
        <meta property="twitter:title" content={og.describedTitle} />
        <meta property="twitter:description" content={og.description} />
        <meta property="twitter:image" content={og.image} />
        <meta name="twitter:site" content="@itsme-Subid" />
        <meta name="twitter:creator" content="@itsme-Subid" />
        <meta name="theme-color" content="#fff" />
        <meta name="next-head-count" content="26" />
      </Head>
      <div className={poppins.variable}>
        <GlobalStyle />
        <Suspense>
          <motion.div variants={container} initial="hidden" animate="show">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </motion.div>
        </Suspense>
      </div>
    </>
  );
}
