import 'flexboxgrid';
import Head from 'next/head';
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../styles/base.scss';
import '../styles/helpers.scss';

// https://fonts.googleapis.com/icon?family=Material+Iconsimport AuthProvider from '../context/AuthProvider';
function mVoterApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default mVoterApp;
