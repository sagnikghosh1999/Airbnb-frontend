import { ContextProvider } from 'context/store';
import { AppProps } from 'next/app';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import 'mapbox-gl/dist/mapbox-gl.css';
// styles
import '../styles/globals.css';
import '../styles/reactDateRange.css';

const progressBar = new ProgressBar({
  size: 1,
  color: '#FF385C',
  className: 'z-50',
  delay: 50,
});

Router.events.on('routeChangeStart', progressBar.start);
Router.events.on('routeChangeComplete', progressBar.finish);
Router.events.on('routeChangeError', progressBar.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
