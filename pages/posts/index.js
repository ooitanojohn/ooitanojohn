import Link from 'next/link'

export default function Index(params) {
  return (
    <>
      <h1>テスト用のページだよ index.js</h1>
      <a href="http://ooitanojohn.wp.xdomain.jp/">外部リンクを貼るときはaタグのみ</a>
      <Link href="/posts/route"><a className='a_test_class'>route.jsへ</a></Link>
      <Link href="/posts/img"><a className='a_test_class'>img.jsへ</a></Link>
      <Link href="/posts/api"><a>api.jsへ</a></Link>
      <Link href="/"><a>Index.jsへ</a></Link>
    </>
  )
}