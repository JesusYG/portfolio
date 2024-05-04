import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JesusYG - All things Web | Developer + Designer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
