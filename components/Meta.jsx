import { Head } from 'next/document';
import React from 'react';

const Meta = () => {
  return (
    <Head>
      <meta
        name="title"
        content="JesúsYG - All things Web | Developer + Designer"
      />
      <meta
        name="description"
        content="A Full-stack developer working with Web technologies. Loves to build highly scalable and maintainable web applications and back-ends."
      />
      <link rel="stylesheet" href="/fonts/fonts.css" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/images/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/images/icons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-config"
        content="/images/icons/browserconfig.xml"
      />
      <meta name="theme-color" content="#001615" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sreyaj.dev" />
      <meta
        property="og:title"
        content="JesúsYG - All things Web | Developer + Designer"
      />
      <meta
        property="og:description"
        content="A Full-stack developer working with Web technologies. Loves to build highly scalable and maintainable web applications and back-ends."
      />
      <meta
        property="og:image"
        content="https://sreyaj.dev/images/sreyaj-meta.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sreyaj.dev/" />
      <meta
        property="twitter:title"
        content="JesúsYG - All things Web | Developer + Designer"
      />
      <meta
        property="twitter:description"
        content="A Full-stack developer working with Web technologies. Loves to build highly scalable and maintainable web applications and back-ends."
      />
      <meta
        property="twitter:image"
        content="https://sreyaj.dev/images/sreyaj-meta.jpg"
      />
    </Head>
  );
};

export default Meta;
