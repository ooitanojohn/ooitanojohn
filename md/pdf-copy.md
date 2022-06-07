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
pdfにまとめてディレクトリが記述されている

mkdirとtouch
mkdirは被っているとエラー

# pdf を textファイルに
コンソールでtextファイルに変換する
apt install poppler-utils
pdftotext -layout -nopgbrk "PDFファイル"

ailasに登録

# テキストからphpファイルに変換
- 変換時にいらない要素 (行頭の数字と」をkaraに変換
- ファイルごとに区切って切り取り貼り付けをどう楽にする？
- ファイル先頭の文字は(
  ファイル名.php
  Page 1/2
  Pted: 2022/04/24 17:10:01
  Printed for: )で確定
- ページの終わりは</html>
# 2ページに渡るファイル pdf

