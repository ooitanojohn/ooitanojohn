import styles from './postLayout.module.css'

// 記事のレイアウト
function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default Layout