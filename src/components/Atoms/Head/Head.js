import NextHead from "next/head";

const title = "Juan Barrios - Front End Developer";
const URL = process.env.NEXT_PUBLIC_URI;
const description =
  "Obtén el mejor servicio para la app o página web qué necesites, y recibe la mejor calidad con el mejor precio.";
const ogImage = "/images/hero.jpg";

const Head = () => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content="developer, juan, barrios, front, end, services, servicio, web, internet, pages, best, app, site, need, quality, price, color, design, ui, ux, google, react, next, javascript, redux, native, sass, html, css, node, express, graphql, firebase, strapi, mongo, postgres, git"
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no" />
    {/* PWA primary color */}
    <meta name="theme-color" content="#3e4756" />

    {/* Helps prevent duplicate content issues */}
    <link rel="canonical" href={URL} />

    {/* Name of web application (only should be used if the website is used as an app) */}
    <meta name="application-name" content={title} />

    {/* Control the behavior of search engine crawling and indexing */}
    <meta name="robots" content="index,follow" />
    {/* All Search Engines */}
    <meta name="googlebot" content="index,follow" />
    {/* Google Specific */}

    {/* Tells Google not to show the sitelinks search box */}
    <meta name="google" content="nositelinkssearchbox" />

    {/* Tells Google not to provide a translation for this document */}

    <meta name="google" content="notranslate" />

    <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
    <link rel="shortcut icon" href="/favicon.ico" />

    <meta property="og:site_name" content={title} />
    <meta property="og:type" content="website" />
    <meta name="og:url" content={URL} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="omg:image" content={ogImage} />
    <meta property="og:image:alt" content={title} />
    <meta name="omg:image:width" content="1280" />
    <meta name="omg:image:height" content="853" />
    <meta name="twitter:site" content={URL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage} />
  </NextHead>
);

export default Head;
