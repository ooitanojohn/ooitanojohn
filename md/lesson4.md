---
title: プリレンダリングとデータフェッチング
date: 2022/05/09
description: ビルド時にデータを取得することで静的生成したいならgetStaticProps
tag: next.js
author: You
---

# プリレンダリングとデータフェッチング

## ビルド時にデータを取得することで静的生成したいなら getStaticProps

```js
export default function Home(props) { ... }

export async function getStaticProps() {
    // ファイルシステムや API、DB などから外部データを取得する
    const data = ...

    // `props` キーに対応する値が `Home` コンポーネントに渡される
    return {
        props: ...
    }
}
```
