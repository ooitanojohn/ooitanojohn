import Head from 'next/head'
import Header from '../../components/header'
import PostLayout from '../../components/postLayout'
import Footer from '../../components/footer'
import { getAllPostIds, getPostData } from '../../lib/md'

export async function getStaticPaths() { // mdから読み取った idとしてとりうる値のリストを返す
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) { // 記事用レイアウト
  return (
    <>
      {/* {console.log(postData)} */}
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1>Post</h1>
        <PostLayout>
          <p>{postData.title}</p>
          <p>{postData.date}</p>
          <p>{postData.description}</p>
          <p>{postData.tag}</p>
          <p>{postData.date}</p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </PostLayout>
      </main>
      <Footer></Footer>
    </>
  )
}

