// HTml body設定を変更する場合のファイル
import { Html, Head, Main, NextScript } from 'next/document'
// lang 設定を日本語に bodyにclass=default-layout
export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      <body className='default-layout'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// import Document, { Html, Head, Main, NextScript } from 'next/document'

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang='en'>
//         <Head>
//           <link
//             href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

// export default MyDocument