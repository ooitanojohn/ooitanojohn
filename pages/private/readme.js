import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PostLayout from '../../components/postLayout'
import { Octokit } from '@octokit/rest'; // octokit import cdnもある どっちがよき？

const octokit = new Octokit({ // 設定情報のインスタンス化
  auth: process.env.GITHUB_TOKEN,
  userAgent: 'ooitanojohn-blog',
  timeZone: 'Asia/Tokyo',
  baseUrl: 'https://api.github.com'
});

export async function getStaticProps() { // ページ移動時には実行されている
  // octokit/restライブラリ
  const profile = await octokit.request('/users/ooitanojohn') // クエリをここで書く
  // console.log(profile)
  return {
    props: profile.data
  }
}


export default function Post(profile) {
  return (
    <>
      {/* {console.log(profile)} */}
      <Head>
        <title>profile</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1>Profile</h1>
        <PostLayout>
          <ul>
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