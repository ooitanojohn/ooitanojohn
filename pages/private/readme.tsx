import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Octokit } from '@octokit/rest'; // octokit import cdnもある どっちがよき？
import { GetStaticProps, GetStaticPaths } from 'next'

const octokit = new Octokit({ // 設定情報のインスタンス化
  auth: process.env.GITHUB_TOKEN,
  userAgent: 'ooitanojohn-blog',
  timeZone: 'Asia/Tokyo',
  baseUrl: 'https://api.github.com'
});

export const getStaticProps: GetStaticProps = async () => { // ページ移動時には実行されている
  // octokit/restライブラリ
  const profile = await octokit.request('/users/ooitanojohn') // クエリをここで書く
  // console.log(profile.data)
  return {
    props: {
      profile:(profile.data  as {
        login: string
        bio: string
        avatar_url: string
        created_at: string
        updated_at: string
      })
    }
  }
}

export default function Readme({ profile } : {
  profile: {
    login: string
    bio: string
    avatar_url: string
    created_at: string
    updated_at: string
  }
}) {
  return (
    <>
      <Head>
        <title>profile</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1>Profile</h1>
           <ul>
            <li>GitHub {profile.created_at} ~ {profile.updated_at}</li>
            <li>my name is {profile.login}</li>
            <li>{profile.bio}</li>
            <li><p><Image src={profile.avatar_url} alt="github_avater" height={100} width={100}></Image></p></li>
          </ul>
      </main>
      <Footer></Footer>
    </>
  )
}

