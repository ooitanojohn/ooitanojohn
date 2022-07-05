import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header'
import Footer from "../../components/footer"
import { GetStaticProps,GetStaticPaths } from 'next'
import { getAllGitRepoData,getPageGitRepoData } from '../../lib/git'
import { Pagination } from '../../components/pagination'

export default function Works({ repositories,totalCount }: {
  repositories: {
    name: string
    description: string
    html_url: string
    created_at: string
    updated_at: string
    pushed_at: string
  }[],
  totalCount: Number
}
) {
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
            {repositories.map(({name,description, html_url,created_at,updated_at,pushed_at}) => (
            <li key={html_url}>
              <Link href={`${html_url}`}><a>
                製作開始: {created_at} 最終更新日: {updated_at}
                  <span> [{name}] { description } </span>
              </a></Link>
            </li>
          ))}
        </ul>
        <Pagination totalCount={totalCount} DIR='/repos/'/>
      </main>
      <Footer></Footer>
    </>
  )
}

const PER_PAGE = 5;
export const getStaticPaths: GetStaticPaths = async () => {
  const repositories = await getAllGitRepoData() // 全件数を取る
  const totalCount = Object.keys(repositories.data).length

  const pages = Math.ceil(totalCount / PER_PAGE);
  let i = 1;
  let paths = [ // staticPathの構造
  ]
  while(pages >= i) {
    paths.push({ params: {page:`${i}`} })
    i++;
  }
  // console.log(paths)
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const repositories = await getPageGitRepoData(params.page) // pageの内容
  const all = await getAllGitRepoData() // 全件取得
  const totalCount = Object.keys(all.data).length
  return {
    props: {
      repositories: repositories.data,
      totalCount:totalCount
    }
  }
}