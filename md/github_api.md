---
title: 'issue'
date: '2022-06-07'
description:
tag: file
author: You
---

# GitHub API

## curl でいろいろ取ってくる

- curl https://api.github.com/users/username でプロフィール
- curl に -i オプションで取得時の情報色々見える
- -u でトークンを利用して呼び出し回数制限を増やす 呼び出し時に直接 token 入れてあ炊くのはセキュリティ上良くないから変数に入れて叩こうね
- curl -u:token https://api.github.com/users/user_name で private な情報を取得出来るよ

```sh 呼び出しスクリプト
curl \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  $GITHUB_BASEURL$GITHUB_API
```

## [js は@octokit/rest を入れるのが楽そう](https://maku.blog/p/7r6gr3d/)
