---
title: 'build & Test'
date: '2022-06-07'
description:
tag: file
author: You
---

# build && start

- ## 取り合えずビルドしてみた

  - ### Warning: Do not use <img>. Use Image from 'next/image' instead. See: https://nextjs.org/docs/messages/no-img-element
  - <img>タグを<Image>タグに修正しろと</Image>
  - ### Need to disable some ESLint rules
  - [ESlint ルールを無効にしろ](https://nextjs.org/docs/basic-features/eslint#disabling-rules)
    - .eslintrc.json に追記した
    - 調べたよ [ESlint が暴れてる](https://stackoverflow.com/questions/43177074/how-to-fix-this-violation-of-this-react-no-unescaped-entitie-of-eslint-rule)
    - 消して再 build したら err 出なかった。謎
    - [フォント最適化](https://nextjs.org/docs/messages/no-page-custom-font)
      - build した所、関係なかったっぽい

- ## 再ビルド

  - Checking validity of types
  - info - Creating an optimized production build
  - info - Compiled successfully
  - info - Collecting page data
  - info - Generating static pages (6/6)
  - info - Finalizing page optimization

  ## エラー無し

  ## pages

  - Page Size First Load JS
  - ┌ ● / 5.88 kB 80.3 kB
  - ├ └ css/c7063804ca20089a.css 459 B
  - ├ /\_app 0 B 72 kB
  - ├ ○ /404 193 B 72.2 kB
  - ├ λ /api/hello 0 B 72 kB
  - ├ ○ /posts 486 B 74.9 kB
  - ├ ○ /posts/api 374 B 74.8 kB
  - └ ○ /posts/route 340 B 74.7 kB
  - - First Load JS shared by all 72 kB
  - ├ chunks/framework-5f4595e5518b5600.js 42 kB
  - ├ chunks/main-81f4fb35f4507347.js 28.7 kB
  - ├ chunks/pages/\_app-69da446bea935969.js 493 B
  - ├ chunks/webpack-69bfa6990bb9e155.js 769 B
  - └ css/1564ce9a72cc3472.css 215 B

  - λ (Server) server-side renders at runtime (uses getInitialProps or getServerSideProps)
  - ○ (Static) automatically rendered as static HTML (uses no initial props)
  - ● (SSG) automatically generated as static HTML + JSON (uses getStaticProps)

## 初回に読み込まれて

- - First Load JS shared by all 72 kB
- ├ chunks/framework-5f4595e5518b5600.js 42 kB
- ├ chunks/main-81f4fb35f4507347.js 28.7 kB
- ├ chunks/pages/\_app-69da446bea935969.js 493 B
- ├ chunks/webpack-69bfa6990bb9e155.js 769 B
- └ css/1564ce9a72cc3472.css 215 B

## static

- 今回自分が作った jsx は全て静的ファイルとして生成されている

## server

- hello.js は中身が一つしかないけど
- [getInitialProps って何](https://blog.logrocket.com/getinitialprops-vs-getserversideprops-nextjs/)
  - 古いから getServerSideProps でいいよ

## SSG

- / top ページは md 読み込んでる

## start してみた

- For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. Run 'yarn add sharp', and Next.js will use it automatically for Image Optimization.
  Read more: https://nextjs.org/docs/messages/sharp-missing-in-production
- 画像最適化して～
- npm i sharp
