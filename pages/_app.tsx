// 毎回ページで読み込む設定 globalcssを読み込んだりする
import "../styles/destyle.css"
import "../styles/globals.css";
import { AppProps} from 'next/app'

function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
