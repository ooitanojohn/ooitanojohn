import Link from 'next/link'

export default function Index(params) {
  return (
    <>
      <h1>index.js</h1>
      <Link href="/posts/route"><a>route.jsへ</a></Link>
      <Link href="/posts/api"><a>api.jsへ</a></Link>
      <Link href="/"><a>Index.jsへ</a></Link>
    </>
  )
}