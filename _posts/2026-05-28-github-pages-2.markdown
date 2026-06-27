---
layout: post
title:  "GitHub Pages로 기술 블로그 만들기 - Error 편"
date:   2026-05-28 19:48:36 +0900
categories: Git
series: Github Pages 만들기
comments_count: 0
---

이번 편에서는 GitHub Pages로 기술 블로그를 만들면서 겪었던 각종 에러에 대한 해결 방법을 기술하였습니다.

해당 글은 계속해서 업데이트됩니다.

### - The plainwhite theme could not be found Error

git push를 했음에도 GitHub 주소로 들어갔을 때 바뀐 화면이 나오지 않는다면, 사진을 참고하여 페이지 Repository의 Actions 탭을 확인합니다.

![1.png](/assets/images/2026-05-28-github-pages-2/1.png)

x 표시가 되어 있는 목록을 눌러보면,

(목록이 여러 개인 이유는 여러 번 push했기 때문입니다.)

![2.png](/assets/images/2026-05-28-github-pages-2/2.png)

간단히 확인해도 문제가 있음을 알 수 있습니다.

하단의 Annotations를 보면 문제의 내용을 확인할 수 있습니다.

![3.png](/assets/images/2026-05-28-github-pages-2/3.png)

```bash
github-pages 000 | Error: The plainwhite theme could not be found.
```

- config.yml 파일 맨 하단에 있는 theme를 주석 처리해 주면 됩니다.

![4.png](/assets/images/2026-05-28-github-pages-2/4.png)
