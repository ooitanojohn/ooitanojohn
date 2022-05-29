import Link from 'next/link'
import Head from 'next/head'
// _document設定ファイル分からん
export default function Index() {
  return (
    <>
      <Head>
        <title>lang index.js</title>
        <link rel="icon" href="/test1.jpg"></link>
      </Head>
      <h1>document設定用ファイル</h1>
      <Link href="/"><a>Index.jsへ</a></Link>
    </>
  )
}