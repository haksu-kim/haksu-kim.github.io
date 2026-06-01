---
layout: post
title:  "Github Pages로 기술 블로그 만들기 - Error편"
date:   2026-05-28 19:48:36 +0900
categories: Git
series: Github Pages 만들기
comments_count: 0
---

이번 편에서는 Github Pages로 기술 블로그 만들면서 겪었던 각종 에러에 대한 해결법을 기술했습니다.

해당 글은 계속해서 업데이트 됩니다!

### - The plainwhite theme could not be found Error

git push를 했음에도 깃허브 주소로 들어가면 바뀐 화면이 나오지 않을 때, 사진을 참고하여 페이지 repo의 Actions 탭을 확인한다.

![1.png](/assets/images/2026-05-28-github-pages-2/1.png)

x표시 되어 있는 목록을 눌러보면,

(목록이 여러 개인 이유는 여러번 push해서 그렇다.)

![2.png](/assets/images/2026-05-28-github-pages-2/2.png)

대충 봐도 문제가 있음을 알 수 있다.

하단에 Annotations를 보면 문제의 내용을 알 수 있다.

![3.png](/assets/images/2026-05-28-github-pages-2/3.png)

```bash
github-pages 000 | Error: The plainwhite theme could not be found.
```

- config.yml 파일 맨 하단에 theme를 주석 처리 해주면 된다.

![4.png](/assets/images/2026-05-28-github-pages-2/4.png)
