import Link from 'next/link'

export default function Route() {
  return (
    <>
      <h1>api.js</h1>
      <Link href="/posts/"><a>index.jsへ</a></Link>
      <Link href="/api/hello"><a>hello API呼び出し</a></Link>

    </>
  )
}