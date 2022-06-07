import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PostLayout from '../../components/postLayout'


export async function getStaticProps() { // ページ移動時には実行されている
  const auth = "Accept: application/vnd.github.v3+json" +
    "Authorization: token" + process.env.GITHUB_TOKEN
  const git_url = process.env.GITHUB_BASEURL + process.env.GITHUB_API
  // ファイルシステムのかわりに、
  // 外部の API エンドポイントから投稿データを取得する
  const res = await fetch(git_url)
  const profile = await res.json()
  return {
    props: profile
  }
}

export default function Post(profile) {
  return (
    <>
      {console.log(profile)}
      <Head>
        <title>profile</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1>Profile</h1>
        <PostLayout>
          <ul>
            <li>hey! guys we have get for you</li>
            <li>GitHub {profile.created_at} ~ {profile.updated_at}</li>
            <li>my name is {profile.login}</li>
            <li>{profile.bio}</li>
            <li><p><Image src={profile.avatar_url} alt="github_avater" height={100} width={100}></Image></p></li>
          </ul>
        </PostLayout>
      </main>
      <Footer></Footer>
    </>
  )
}