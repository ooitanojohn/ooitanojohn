---
title: 'ip アドレス確認 && sshで転送'
date: '2022-06-07'
description:
tag: file
author: You
---

# 家 PC で git の API 検証していた sh ファイルを ssh で転送したくなったので

## いつもはメールとか slack とか onenote とかで転送していた

## エンジニアっぽくないな？？？

### ということでローカル PC 同士通信してファイル送ろう!

### ip addr show で確認

- 10 個も出てきた
- 1: lo: <LOOPBACK,UP,LOWER_UP>
- 2: bond0: <BROADCAST,MULTICAST,MASTER>
- 3: dummy0: <BROADCAST,NOARP>
- 4: sit0@NONE: <NOARP>
- 5: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP>
- 6: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP>
- 7: br-97179edade05: <NO-CARRIER,BROADCAST,MULTICAST,UP>
- 8: br-a2a9ff909a7c: <BROADCAST,MULTICAST,UP,LOWER_UP>
- 10: vethb563797@if9: <BROADCAST,MULTICAST,UP,LOWER_UP>

#### よく分からないが 5 つめ使ってみる
