import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
// import { ChangeThemeButton } from '../components/changeThemeButton'

// _document設定ファイル分からん
export default function Index() {
  return (
    <>
      <Head>
        <title>changeTheme</title>
        <link rel="icon" href="/test1.jpg"></link>
      </Head>
      <h1>darkmode</h1>
      <p>モード切り替え</p>
      <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
        {/* <ChangeThemeButton /> */}
      </span>
      <Link href="/lang/"><a className=''>langへ</a></Link>
      <Link href="/"><a>Index.jsへ</a></Link>
    </>
  )
}