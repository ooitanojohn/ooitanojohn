import Head from 'next/head'
import Header from '../../components/header'
import PostLayout from '../../components/postLayout'
import Footer from "../../components/footer"
import { getAllPostIds, getPostData } from '../../lib/md'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  postData
}: {
    postData: {
    title: string
    date: string
    description: string
    tag: string
    contentHtml: string
    }
}) { // 記事用レイアウト
  return (
    <>
      {/* {console.log(postData)} */}
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <PostLayout>
          <p>{postData.title}</p>
          <p>{postData.date}</p>
          <p>{postData.description}</p>
          <p>{postData.tag}</p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </PostLayout>
      </main>
      <Footer></Footer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => { // mdから読み取った idとしてとりうる値のリストを返す
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}