import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>Animal Politik</title>
          <meta name='title' content='Animal Politik' />
          <meta
            name='description'
            content='Animal Politik | We are living in the fever dream of maniacs — it might as well have a
        good soundtrack.'
          />
          <link
            rel='shortcut icon'
            type='image/ico'
            href='/favicons/favicon.ico'
          />
          <meta name='theme-color' content='#FE7272' key='theme-color' />
          <meta property='og:locale' content='en_US' key='og-locale' />
          <meta property='og:type' content='website' key='og-type' />
          <meta property='og:title' content='Animal Politik' key='og-title' />
          <meta
            property='og:description'
            content='Animal Politik | We are living in the fever dream of maniacs — it might as well have a
        good soundtrack.'
          />
          <meta
            property='og:url'
            content='https://animalpolitik.netlify.app'
            key='og-url'
          />
          <meta
            property='og:image'
            content='https://raw.githubusercontent.com/timmybytes/animal-politik-nextjs/main/public/OG_Image.png'
            key='og-img'
          />
          <meta
            property='og:image:type'
            content='image/png'
            key='og-img-type'
          />
          <meta
            property='og:image:alt'
            content='Animal Politik logo'
            key='og-img-alt'
          />
          <meta property='og:image:width' content='1200' key='og-img-width' />
          <meta property='og:image:height' content='600' key='og-img-height' />
          <meta
            property='twitter:card'
            content='summary_large_image'
            key='twitter-card'
          />
          <meta
            property='twitter:image'
            content='https://raw.githubusercontent.com/timmybytes/animal-politik-nextjs/main/public/OG_Image.png'
            key='twitter-img'
          />
          <meta
            property='twitter:creator'
            content='@nimalpolitik'
            key='twitter-creator'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
