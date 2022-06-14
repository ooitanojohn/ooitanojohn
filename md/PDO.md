---
title: PDO
date: 2022/05/09
description:
tag: file
author: You
---

# PDO

## DB 接続を抽象化できる

- .env を変更するのみ
-

## 接続時

- setAttrbute()
- ATTR_ERRMODE
- ERRMODE_EXCEPTION

## エラーと例外

- エラー : 発生したら対処不能
- 例外 : 対処する 発生したらその後のコードは実行されない

### 例外処理 try-catch-finaly 構文

#### try

#### catch

- 引数に発生した例外が格納される
- PDOstatements

#### finaly

### bind 関連

- 代入値には sql の%%などの値を含める
