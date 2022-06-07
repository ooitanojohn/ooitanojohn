import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { getSortedPostsData } from '../lib/md' // md解析

export async function getStaticProps() { // ファイルからmd取得
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Index({ allPostsData }) {
  return (
    <>
      <Head>
        <title>ooitanojohn</title> {/*title*/}
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1 className='display-none'>ooitanojohn is blog</h1>
        <Link href="./posts/post"><a>記事一覧タイトル</a></Link>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </main >
      <Footer></Footer>
    </>
  )
}
{/* 繰り返す 記事一覧コンポーネント */ }
