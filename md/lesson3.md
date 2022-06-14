---
title: 'issue'
date: '2022-06-07'
description:
tag: file
author: You
---

# 画像,css,meta

- Next.js には CSS と Sass のサポートが組み込まれています
  - [css の doc](https://nextjs.org/docs/basic-features/built-in-css-support)

## [このレッスンで学ぶこと](https://qiita.com/thesugar/items/01896c1faa8241e6b1bc#%E3%81%93%E3%81%AE%E3%83%AC%E3%83%83%E3%82%B9%E3%83%B3%E3%81%A7%E5%AD%A6%E3%81%B6%E3%81%93%E3%81%A8)

- ### 静的なファイル（画像など）を Next.js に追加する方法
  - Next.js は画像などの静的なファイルを、トップレベルの public ディレクトリ 配下でサーブする
  - vscode は/public から打たないと保管してくれないので打ってから消す
  - 外に<p>タグで囲めるよ</p>
  - #### public ディレクトリには robots.txt や Google Site Verification、その他あらゆる静的なアセットを有効に配置することができます
    - [robot.txt SEO google のクロール対策に使う](https://developers.google.com/search/docs/advanced/robots/intro?hl=ja)
    - [google site Verification](https://shiseihanbai.biz/contents/learning-seo-3steps)
- ### 各ページの <head> 内に入るものをカスタマイズする方法
  - <head> タグに変更を加える方法 <Head>コンポーネントをlayoutとかで作るのかも
  - [lang 属性を加えるといったように <html> をカスタマイズしたい場合は、カスタムの Document コンポーネントを作成することで実現](https://nextjs.org/docs/advanced-features/custom-document)
  - pages/\_document.js にテンプレ作れるらしい 日本語切り替えとか darkmode とかどこで実装？？
  - HTml body 設定を変更する場合のファイル == posts/\_document.js
- ### CSS モジュールを使ってスタイルされた再利用可能な React コンポーネントを作成する方法
  - いくつかの CSS の書き方
    - <style jsx></style> で page/*js内に直接書く
- ### pages/\_app.js の中にグローバル CSS を追加する方法
  - どのページでも実行されるため肥大化するのはよくない
  - destyle.css などはここで読み込もう
- ### ページごとに Layout を変更する場合 components に getLayout する
  - コンポーネント名は変えれないがファイル名は変える
  - https://weseek.co.jp/tech/733/
