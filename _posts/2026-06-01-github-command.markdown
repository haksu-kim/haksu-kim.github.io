---
layout: post
title:  "GitHub Pages로 기술 블로그 만들기(2) - 댓글 기능"
date:   2026-05-30 19:48:36 +0900
categories: Git
series: Github Pages 만들기
comments_count: 0
---

이번 편에서는 GitHub Pages에 댓글 기능을 추가하는 방법에 대해 기술하였습니다.

## utterances 앱 설치하기

댓글 기능은 Disqus 또는 Utterances 앱을 설치하여 글에 삽입할 수 있습니다.

해당 글에서는 Utterances를 사용하였습니다.

먼저 링크에 들어가서 Pages의 Repository에 Utterances를 설치합니다.

[https://utteranc.es/](https://utteranc.es/)

![1.png](/assets/images/2026-05-30-github-pages-3/1.png)

Comment 기능을 삽입할 Pages의 Repository를 지정하여 Install합니다.

![1-1.png](/assets/images/2026-05-30-github-pages-3/1-1.png)

Install 후 아래 설정을 진행합니다.

![2.png](/assets/images/2026-05-30-github-pages-3/2.png)

`repo:`에 Pages의 Repository 주소를 아래의 형식을 참고하여 기입합니다.

```bash
username/repository.name
```

![3.png](/assets/images/2026-05-30-github-pages-3/3.png)

script를 Copy하여 post.html에 삽입합니다.

![4.png](/assets/images/2026-05-30-github-pages-3/4.png)
