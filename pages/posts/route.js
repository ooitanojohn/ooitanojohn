import Link from 'next/link'

export default function Route() {
  return (
    <>
      <h1>route.js</h1>
      <Link href="/posts/"><a>index.jsへ</a></Link>
    </>
  )
}