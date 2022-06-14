---
title: PDF Copy Script
date: 2022/05/09
description: PDF → TXT → 整形してphpファイル
tag: file
author: You
---

# 写経を楽にしたい

# 作業手順

# dir 作成

シェルスクリプトで考える
pdf にまとめてディレクトリが記述されている

mkdir と touch
mkdir は被っているとエラー

# pdf を text ファイルに

コンソールで text ファイルに変換する
apt install poppler-utils
pdftotext -layout -nopgbrk "PDF ファイル"

ailas に登録

# テキストから php ファイルに変換

- 変換時にいらない要素 (行頭の数字と」を kara に変換
- ファイルごとに区切って切り取り貼り付けをどう楽にする？
- ファイル先頭の文字は(
  ファイル名.php
  Page 1/2
  Pted: 2022/04/24 17:10:01
  Printed for: )で確定
- ページの終わりは</html>

# 2 ページに渡るファイル pdf
