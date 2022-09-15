import { FC } from 'react';
import Head from 'next/head';
import MyDocument from 'pages/_document';

interface IAppHeadProps {
  title?: string;
  description?: string;
}

const defaultProps: IAppHeadProps = {
  title: 'Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences',
  description:
    'Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb.',
};

const AppHead: FC<IAppHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon.ico" type="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

AppHead.defaultProps = defaultProps;

export default AppHead;
