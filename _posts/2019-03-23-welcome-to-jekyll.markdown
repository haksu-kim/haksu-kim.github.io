---
layout: post
title:  "Github Pages로 기술 블로그 만들기 (1)"
date:   2026-05-28 00:03:36 +0900
categories: Git
---
프로젝트를 진행하면서 배운 내용을 정리하고 기록할 공간이 필요했다. 특히 React, JAVA, Python 같은 기술을 공부하다 보니 단순히 코드만 작성하는 것이 아니라, 문제 해결 과정 같은 내용을 꾸준히 기록하는 것이 중요하다고 느꼈다. 그래서 무료로 운영할 수 있고 개발자들이 많이 사용하는 Github Pages 기반 기술 블로그를 만들게 되었다. 해당 블로그는 Sourcetree, fork같은 IDE를 사용하지 않고 기본 명령어 연습 겸 CLI를 사용할 것이다.

```javascript
const Razorpay = require('razorpay');

let rzp = Razorpay({
	key_id: 'KEY_ID',
	secret: 'name'
});

// capture request
rzp.capture(payment_id, cost)
	.then(function (data) {
		return 2;
	})
```

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
