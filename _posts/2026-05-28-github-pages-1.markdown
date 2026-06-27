---
layout: post
title:  "GitHub Pages로 기술 블로그 만들기 (1)"
date:   2026-05-28 00:03:36 +0900
categories: Git
series: Github Pages 만들기
comments_count: 0
---

이번 편에서는 GitHub Pages로 기술 블로그를 만드는 방법에 대해 기술하였습니다.

프로젝트를 진행하면서 배운 내용을 정리하고 기록할 공간이 필요했습니다. 특히 React, Java, Python 같은 기술을 공부하다 보니 단순히 코드만 작성하는 것이 아니라, 문제 해결 과정 같은 내용을 꾸준히 기록하는 것이 중요하다고 느꼈습니다. 그래서 무료로 운영할 수 있고 개발자들이 많이 사용하는 GitHub Pages 기반 기술 블로그를 만들게 되었습니다. 해당 블로그에서는 SourceTree, Fork 같은 IDE를 사용하지 않고 기본 명령어 연습을 겸해 CLI를 사용할 예정입니다.

# GitHub Pages란?

GitHub에서 제공하는 정적 웹사이트 호스팅 서비스입니다.

HTML, CSS, Markdown 파일 등을 GitHub Repository에 업로드하면 자동으로 웹사이트 형태로 배포해 줍니다.

대표적인 장점은:

- 무료 사용 가능

- Markdown 기반 글 작성 가능

- 포트폴리오로 활용 가능

- 커스텀 자유도 높음

등이 있습니다.

# GitHub 블로그 생성하기

## - 구축하기

### 1. Repository 만들기

GitHub에서 새로운 Repository를 생성합니다.

Repository 이름은 반드시 아래 형식이어야 합니다.

```bash
ex) haksu-kim.github.io
username.github.io
```

Repository 생성 시 "Add a README file" 옵션은 체크하지 않아도 됩니다.

### 2. clone 하기

Code를 누르면 해당 Repository의 HTTPS 주소를 복사할 수 있습니다.

![2.png](/assets/images/2026-05-28-github-pages-1/2.png)

복사한 주소를 사용하여 터미널에서 clone 받을 로컬 경로로 이동한 뒤 아래 명령어를 입력합니다.

```bash
git clone ADDRESS
```

### 3. clone한 로컬 경로에서 HTML 파일 생성

GitHub Pages 동작 확인용으로 clone한 폴더에서 index.html 파일을 생성합니다.

해당 파일을 기반으로 기술 블로그를 작성합니다.

Jekyll 테마를 사용하면 처음부터 index.html을 생성하지 않아도 되지만, 연습을 위해 생성해 보겠습니다.

### 4. 원격 Repository에 push

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

```bash
-m [메시지] : 커밋 메시지와 함께 커밋
```

## - 블로그 테마 설치하기

GitHub 블로그는 보통 Jekyll 기반 테마를 사용합니다.

Hexo, Hugo 같은 정적 사이트 생성기도 있었지만, GitHub Pages와의 호환성과 자료량 때문에 Jekyll을 선택하였습니다.

Jekyll은 정적 사이트 생성기로, Ruby를 기반으로 만들어져 있습니다.

Markdown을 사용해서 포스트를 작성하면 HTML로 변환하여 정적 사이트를 만들어 줍니다.

### 1. 로컬에 Jekyll 설치

clone한 로컬 경로에서 실행합니다.

```bash
gem install jekyll bundler
```


```bash
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
```
_이러한 에러가 발생한다면 Homebrew를 사용해 설치해야 합니다._

---

#### \* Homebrew Ruby 설치

```bash
brew install ruby
```

#### \* 환경변수 설정

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
```

- Homebrew가 설치되어 있지 않다면 Homebrew 편을 참고해 주세요.

#### \* 적용

```bash
source ~/.zshrc
```

#### \* 적용 체크

```bash
which ruby
ruby -v
```

/opt/homebrew/opt/ruby/bin/ruby와 비슷하게 나오면 성공입니다.

이어서 다시 로컬에 Jekyll을 설치합니다.

---

### 2. Jekyll 생성

생성 전에 clone한 폴더 내에 있는 index.html을 제거합니다.

폴더 내에 어떤 파일도 존재하지 않아야 Jekyll을 생성할 때 문제가 발생하지 않습니다.

```bash
jekyll new ./
```

### 3. bundle install

```bash
bundle install
```

### 4. Jekyll을 로컬서버에 띄우기

```bash
bundle exec jekyll serve
```

```bash
Server address: http://127.0.0.1:4000/
```

![로컬 서버 실행 화면](/assets/images/2026-05-28-github-pages-1/local-server.png)

### 5. 원격 Repository에 push

```bash
git add .
git commit -m "commit message"
git push
```

![3.png](/assets/images/2026-05-28-github-pages-1/3.png)

push 직후에는 바로 적용되지 않을 수 있습니다. 보통 1~5분 정도 걸립니다.

## - Jekyll 테마 적용하기

### 1. 테마 선택

1) 테마 사이트

- [jekyllthemes.org](jekyllthemes.org)

- [jamstackthemes.dev](jamstackthemes.dev)

- [jekyllthemes.io](jekyllthemes.io)

- [jekyll-themes.com](jekyllthemes.io)

한글로 작성했을 때의 가독성과 서체 등을 고려하여 선택하면 좋습니다.

### 2. 다운로드

![4.png](/assets/images/2026-05-28-github-pages-1/4.png)

### 3. 다운로드받은 파일을 로컬 Repository에 붙여 넣기

![5.png](/assets/images/2026-05-28-github-pages-1/5.png)

### 4. 블로그 내 정보로 수정하기

1) config.yml 열기

![6.png](/assets/images/2026-05-28-github-pages-1/6.png)

2) POST 추가

_posts 폴더 내에 Markdown 형식으로 글을 작성하면 됩니다.

파일명은 EX) 2026-05-27-first.post.md처럼 규칙을 정해 놓고 생성하는 것을 추천드립니다.

### 5. 원격 Repository에 push

```bash
git add .
git commit -m "commit message"
git push
```
