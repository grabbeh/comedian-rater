import Document, { Html, Head, Main, NextScript } from 'next/document'

class MainDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link
            rel='preload'
            href='/fonts/NerkoOne-Regular.ttf'
            as='font'
            crossOrigin=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MainDocument
