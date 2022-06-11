---
title: 'build & Test'
date: '2022-06-07'
description:
tag: file
author: You
---

# ファイルシステムのかわりに、
  - 外部の API エンドポイントから投稿データを取得する
  - const git_url = "https://api.github.com/users/ooitanojohn"
  - const res = await fetch(git_url)
  - const profile = await res.json()
  - console.log(profile)