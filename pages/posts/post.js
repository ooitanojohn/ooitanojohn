import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header'
import PostLayout from '../../components/postLayout'
import Footer from '../../components/footer'


export default function Post() { // 記事用レイアウト
  return (
    <>
      <Head>
        <title>Post</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1>Post</h1>
        <PostLayout>
          <p>記事タイトル</p>
        </PostLayout>
      </main>
      <Footer></Footer>
    </>
  )
}