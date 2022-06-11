import styles from './footer.module.css'
import Link from 'next/link'

// footerのレイアウト
function Footer(){
  return (
    <footer>
      <address className={styles.container}>2022 ooitanojohn</address>
    </footer>
  )
}

export default Footer