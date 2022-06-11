import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'

// 記事のレイアウト
function Header() {
  return (
    <header className={styles.container} >
      <nav>
        <ul className={styles.d_flex}>
          <li><Link href="/"><a>home</a></Link></li>
          <li><Link href="/private/readme"><a>readme</a></Link></li>
          <li><Link href="/dist/works"><a>create</a></Link></li>
          <li><Link href="/test/test"><a>test</a></Link></li>
        </ul>
      </nav>
      <h1>ooitanojohn</h1>
      <p><Image src="/images/profile.jpg" alt="top画像" width={100} height={100} /></p>
    </header>
  )
}

export default Header