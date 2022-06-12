import Head from 'next/head'
import Link from '../../node_modules/next/link'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { GetStaticProps } from 'next'
import { getGitRepoData } from '../../lib/git'

export default function Works({ repositories }: {
  repositories: {
    name: string
    description:string
    html_url:string
    created_at: string
    updated_at: string
    pushed_at: string
  }[]
}) {
  return (
    <>
      {/* {console.log(repositories)} */}
      <Head>
        <title>create</title>
        <link rel="icon" href="/favicon.ico" /> {/* icon */}
      </Head>
      <Header></Header>
      <main>
        <h1>create</h1>
        <ul>
            {repositories.map(({ html_url, name, created_at, updated_at, description }) => (
            <li key={html_url}>
              <Link href={`${html_url}`}><a>
                製作開始: {created_at} 最終更新日: {updated_at}
                <span> [{name}] {description} </span>
              </a></Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer></Footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const repositories = await getGitRepoData()
  console.log(repositories.data)
  return {
    props: {
      repositories: repositories.data
    }
  }
}