# [blogの制作にあたり git-flowをちゃんと使用する](https://dev.classmethod.jp/articles/introduce-git-flow/)

## localで master develop feature
  - チュートリアルの内容はdevelopで開発して 機能追加でfeatureに切り替えて作成する
  - masterをfetchする
  - develop ⇔ featureで開発後merge
  - developで確認後 ⇔ releaseにmerge
  - git merge br
  - git co
## remote で master release hotfix
  - developで開発したものをreleaseにmergeしてreleaseブランチにpush
  - releaseにfetchしたものをdevelopにmerge

  - [remote commit 取り消し](https://techtechmedia.com/cancel-remote-commit-git/#:~:text=%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%81%AB%E8%AA%A4%E3%81%A3%E3%81%A6%E3%83%97%E3%83%83%E3%82%B7%E3%83%A5%E3%81%97%E3%81%A6%E3%81%97%E3%81%BE%E3%81%A3%E3%81%9F%EF%BC%81,-%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%81%AB%E3%83%97%E3%83%83%E3%82%B7%E3%83%A5&text=%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%81%A8%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AE%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88,%E3%81%93%E3%81%A8%E3%81%A7%E8%A7%A3%E6%B6%88%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82)

  ## [ローカルのブランチ名変更](https://qiita.com/suin/items/96c110b218d919168d64)
    ## revert log show etc..
  - [revert](https://qiita.com/chihiro/items/2fa827d0eac98109e7ee)
  - [merge取り消し](https://qiita.com/chihiro/items/5dd671aa6f1c332986a7)