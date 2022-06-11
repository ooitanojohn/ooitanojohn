import { Octokit } from '@octokit/rest'

const octokit = new Octokit({ // 設定情報のインスタンス化
  auth: process.env.GITHUB_TOKEN,
  userAgent: 'ooitanojohn-blog',
  timeZone: 'Asia/Tokyo',
  baseUrl: 'https://api.github.com'
});

export async function getGitProfileData() { // プロフィールを取ってくる
  // octokit/restライブラリ
  const profile = await octokit.request('/users/ooitanojohn')// クエリをここで書く
  interface profile{ // 型定義
    data: {
      login: string
      bio: string
      avatar_url: string
      created_at: string
      updated_at: string
    }
  }
  return profile
}

export async function getGitRepoData() {
  const repositories = await octokit.request('GET /user/repos', {
    visibility: 'public',
    affiliation: 'owner',
    per_page:10
  })//公開リポジトリ一覧取得

  // console.log(typeof repositories)
  interface repositories{
    data: {
      name: string
      description:string
      html_url:string
      created_at: string
      updated_at: string
      pushed_at: string
    }
  }
  return repositories
}