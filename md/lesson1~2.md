---
title: 'issue'
date: '2022-06-07'
description:
tag: file
author: You
---

## [復習](https://qiita.com/thesugar/items/01896c1faa8241e6b1bc)

- ### ルーティング
  - nextjs におけるページとは
  - pages ディレクトリに存在するファイルからエクスポートされる react コンポーネント
  - pages/index.js は / に pages/posts/posts.js は /posts/posts としてルーティング
  - pages/posts/index.js は /posts としてルーティングされる
- ### ページ内の記述
  - page は jsx 記法で書き,react コンポーネントを使う
  - link コンポーネント
    - react ではリンクに<a>では無く<link>を使う
      - <link>コンポーネントを使用する為 import する
      - <Link href=""><a></a></Link>と<a>タグを内包するように記述
    - return で複数行記述する場合は<></>で内包する
- ### 利点 1 クライアントサイドのページナビゲーション

  - クライアントサイドのナビゲーションとは、ページ遷移が JavaScript を使って 行われることを意味し、ブラウザによって行われるデフォルトのページ遷移よりも高速
  - ブラウザの開発者ツールで css を変更後 a リンクでページ遷移しても css が保持されている
  - #### アクセスログ リクエストメソッドは全て GET
    - ##### 初アクセス posts/ の場合 読み込み順
      - ###### .next/static/chunks フォルダ
      - webpack → main → react-refresh
      - ###### .next/static/chunks/pages
        - \_app → posts
      - ###### .next/static/development
        - buildManifest → ssgManifest → \_middlewareManifest
        - \_devPagesMainfest.json
      - ###### .next/
        - webpack-hmr ?
      - ###### favicon.ico
  - #### / に遷移してみる
    - \_next/static/development_devMiddlewareManifest.json
    - \_next/static/chunks/pages/index
    - \_next/data/development/index.json
    - images/profile.jpg
  - #### 再び posts/に遷移
    - 読み込みは発生しない (リクエストメソッドも送られない クライアントに保持されている？)
  - #### route.js,API.js に遷移
    - route.js api.js のみが読み込まれる

- ### 利点 2 コード分割とプリフェッチング

  - Next.js は自動的にコード分割を行うので、各ページはそのページに必要なものだけを読み込みます。つまり、トップのページがレンダリングされたときに、他のページのコードが最初からサーブされるわけではないということ
  - 数百ものページを持つアプリであってもトップページは素早く読み込まれることが保証される

  - #### 素 html,php と SPA との比較
    - 素 html.php は a,form などでページ遷移する度にリクエストレスポンスが行われている
    - SPA は最低限の html ファイルに動作ごとにブラウザの js ファイルから API を fetch して HTML を書き換えていく(DOM を構築差分をレンダリング)
    - 全ての js ファイルを読み込んでいる？ ajax との違いは？
  - #### [(素 react)SPA との比較で良く書かれている事](https://shimablogs.com/spa-ssr-ssg-difference#toc9)
    - SSR(初回の API アクセス自はブラウザ → サーバー → APIfetch → サーバーでレンダリング(html を作成?) → html を表示)
      - 2 回目以降は SPA と形式
    - SSG(ビルド時に API からデータを取得して HTML ファイルを生成する)
      - ビルド時とは deploy した更新した時の事？
  - #### [プリフェッチングとは](https://www.google.com/search?q=%E3%83%97%E3%83%AA%E3%83%95%E3%82%A7%E3%83%83%E3%83%81&sxsrf=ALiCzsYakKgCc10HMoAf8LXZKYqKCuc26A:1653818018350&tbm=isch&source=iu&ictx=1&vet=1&fir=RTD-dJV4LTECDM%252CPgLIJs0s-MbCzM%252C_%253BmVNx4BYTusdFZM%252CBUrLO3zz-upJaM%252C_&usg=AI4_-kQL0iIhKyPvESYyv80KKHHvjl5jnw&sa=X&ved=2ahUKEwjR1YacuIT4AhVXmFYBHWucA9YQ_h16BAgiEAE&biw=1920&bih=937&dpr=1#imgrc=RTD-dJV4LTECDM)
    - 本番環境でのビルドにおいては、Link コンポーネントがブラウザのビューポートに表示されると、Next.js は自動的にリンク先のページのコードをバックグラウンドでプリフェッチします。リンクをクリックするときまでには、目的のページのコードはバックグラウンドで読み込まれ終わっており、ページ遷移はほぼ瞬時に行われる
    - つまり SPA が全てのファイルを初回アクセス時に読み込んでいるのに対して
      next.js はファイル構成によって読み込みの仕方を切り替えて負担を軽減する,ssg で生成できるページがあれば SEO にも強くなる

- #### [next.js がしてくれる事](https://qiita.com/thesugar/items/01896c1faa8241e6b1bc#%E3%82%B5%E3%83%9E%E3%83%AA%E3%83%BC)
  - Next.js は、コード分割、クライアントサイドのナビゲーション、（本番環境における）プリフェッチングによって、最良のパフォーマンスのためにアプリを自動的に最適化する
    - アプリのビルド、デプロイ、更新時に勝手にしてくれる || 自分で選択できる
  - pages ディレクトリ配下のファイルがルーティングになり、ビルトインの Link コンポーネントを利用することができます。**ルーティング用のライブラリは必要ありません!**
    - node,laravel などだと route.php 書いて呼び出し関数書いて~ってしてたのが必要ない
    - pages に書けばいいだけ! ee
