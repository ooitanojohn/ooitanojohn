// 毎回ページで読み込む設定 globalcssを読み込んだりする
import "../styles/destyle.css"
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
