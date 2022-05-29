import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta name="jaco-blog" content="MyBlog"></meta>
      </Head>
      <body className='dark:bg-grey-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


export default MyDocument