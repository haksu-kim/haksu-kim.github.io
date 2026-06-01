---
layout: post
title:  "Git Bash 명령어 정리"
date:   2026-06-01 19:48:36 +0900
categories: Git
series: Git Bash 명령어
comments_count: 0
---

이번 편에서는 Git Bash에서 사용하는 명령어를 기능별로 정리하였습니다.

명령어는 기능별로 나누어 정리하였으며, 각 항목은 다음 순서로 작성하였습니다.

- 명령어의 용도
- 기본 사용법
- 자주 사용하는 옵션
- 사용 예시
- 주의사항

---

## Git help

Git 명령어의 사용법이나 옵션을 확인할 때 사용합니다.

```bash
git help [명령어]
```

### 자주 사용하는 예시

```bash
git help config
git help status
git help commit
```

---

## 기본 설정 (config)

Git의 기본적인 환경을 설정하는 명령어입니다.

작성자 이름, 이메일, 줄바꿈 방식, pull 방식 등을 설정할 수 있습니다.
여기서 설정하는 사용자 정보는 Git 커밋 기록에 남는 정보이며, GitHub 로그인 정보와 반드시 같을 필요는 없습니다.

```bash
git config [옵션] [설정항목] [값]
```

### 자주 사용하는 옵션

| 옵션 | 설명 |
|---|---|
| `--global` | 전역 설정을 의미하며, 현재 컴퓨터의 모든 Git 저장소에 적용됩니다. |
| `--list` | 현재 Git 설정 목록을 확인합니다. |
| `--unset [항목이름]` | 설정된 항목을 삭제합니다. |
| `--unset-all [항목이름]` | 중복으로 설정된 항목을 모두 삭제합니다. |

### 자주 사용하는 명령어

| 명령어 | 설명 |
|---|---|
| `git --version` | Git 버전을 확인합니다. |
| `git config --global user.name "username"` | Git 사용자 이름을 설정합니다. |
| `git config --global user.email "email@example.com"` | Git 사용자 이메일을 설정합니다. |
| `git config --global core.autocrlf input` | Mac OS에서 권장되는 개행 문자 설정입니다. |
| `git config --global core.autocrlf true` | Windows에서 권장되는 개행 문자 설정입니다. |
| `git config --global pull.rebase true` | `git pull` 실행 시 merge 대신 rebase를 기본 동작으로 설정합니다. |
| `git config --list` | 현재 Git 설정 목록을 확인합니다. |

### 사용 예시

```bash
git config --global user.name "username"
git config --global user.email "email@example.com"
git config --list
```

---

## 초기화 (init)

Git 버전 관리를 시작하거나, 원격 저장소를 복제하고 연결할 때 사용하는 명령어입니다.

| 명령어 | 설명 |
|---|---|
| `git init` | 현재 디렉토리를 새로운 Git 저장소로 초기화합니다. |
| `git clone [저장소 URL]` | 원격 저장소를 내 컴퓨터로 복제합니다. |
| `git remote` | 현재 연결된 원격 저장소 이름을 확인합니다. |
| `git remote -v` | 현재 연결된 원격 저장소의 URL을 확인합니다. |
| `git remote add [원격 저장소 이름] [저장소 URL]` | 원격 저장소를 추가합니다. |

### 사용 예시

```bash
git init
git remote add origin https://github.com/username/repository.git
git remote -v
```

### Git 버전 관리 해제

Git 버전 관리를 해제하려면 `.git` 폴더를 삭제합니다.

#### Mac OS / Git Bash

```bash
rm -rf .git
```

#### Windows CMD

```bash
rd /s /q .git
```

#### Windows PowerShell

```powershell
Remove-Item -Recurse -Force .git
```

> `.git` 폴더를 삭제하면 현재 폴더의 Git 기록이 제거됩니다.
> 원격 저장소 자체가 삭제되는 것은 아니지만, 로컬 폴더는 더 이상 Git 저장소로 인식되지 않습니다.

---

## 추적 (Track) / 스냅샷 관리

Git에서 버전을 관리할 파일을 선택하고, 커밋할 변경사항을 준비하는 과정입니다.

Git에서는 파일을 수정한 뒤 바로 커밋하는 것이 아니라, 먼저 스테이징 영역에 올린 후 커밋합니다.

| 명령어 | 설명 |
|---|---|
| `git status` | 현재 브랜치의 변경사항을 확인합니다. |
| `git add [파일명]` | 특정 파일을 스테이징 영역에 추가합니다. |
| `git add .` | 현재 디렉토리의 모든 변경 파일을 스테이징 영역에 추가합니다. |
| `git restore --staged [파일명]` | 특정 파일을 스테이징 영역에서 제거합니다. |
| `git restore --staged .` | 스테이징 영역에 올라간 모든 파일을 제거합니다. |
| `git mv [기존 파일명] [새 파일명]` | Git이 추적 중인 파일의 이름을 변경합니다. |
| `git rm -r --cached [파일명]` | 파일은 삭제하지 않고 Git 추적 목록에서만 제거합니다. |
| `git clean -fdn` | 삭제 가능한 추적되지 않은 파일 목록을 미리 확인합니다. |
| `git clean -fd` | 추적되지 않은 파일을 실제로 삭제합니다. |

### 사용 예시

```bash
git status
git add .
git restore --staged index.html
```

> `git clean -fd`는 Git이 추적하지 않는 파일을 실제로 삭제합니다.
> 실행 전에는 반드시 `git clean -fdn`으로 삭제 대상을 먼저 확인하는 것이 좋습니다.

---

## 커밋 (commit)

스테이징 영역에 올라간 변경사항을 하나의 버전으로 기록하는 명령어입니다.

커밋은 Git에서 변경 이력을 남기는 가장 기본적인 단위입니다.

| 명령어 | 설명 |
|---|---|
| `git commit -m "커밋 메시지"` | 스테이징 된 변경사항을 커밋 메시지와 함께 저장합니다. |
| `git commit` | 기본 편집기를 열어 커밋 메시지를 작성한 뒤 커밋합니다. |
| `git commit -am "커밋 메시지"` | 추적 중인 파일을 스테이징하고 바로 커밋합니다. |
| `git commit --amend` | 가장 최근 커밋을 수정합니다. |

### 사용 예시

```bash
git add .
git commit -m "Add login page"
```

> `git commit -am`은 새로 생성된 파일에는 적용되지 않습니다.
> 새 파일은 먼저 `git add`로 스테이징해야 합니다.

---

## 변경사항 비교 (diff)

파일의 변경 내용을 비교할 때 사용하는 명령어입니다.

| 명령어 | 설명 |
|---|---|
| `git diff` | 아직 스테이징하지 않은 변경사항을 확인합니다. |
| `git diff --staged` | 스테이징 된 변경사항을 확인합니다. |
| `git diff [커밋ID1] [커밋ID2]` | 두 커밋 사이의 변경사항을 비교합니다. |

### 사용 예시

```bash
git diff
git diff --staged
```

---

## 로그 확인 (log)

커밋 기록을 확인하는 명령어입니다.

| 명령어 | 설명 |
|---|---|
| `git log` | 전체 커밋 기록을 확인합니다. |
| `git log --oneline` | 커밋 기록을 한 줄로 간단하게 확인합니다. |
| `git log --graph --oneline --all` | 브랜치 흐름을 그래프 형태로 확인합니다. |

### 사용 예시

```bash
git log --oneline
git log --graph --oneline --all
```

---

## 브랜치 (branch)

브랜치는 작업 흐름을 나누기 위해 사용하는 기능입니다.

새로운 기능 개발, 버그 수정, 테스트 작업 등을 기존 코드와 분리해서 진행할 수 있습니다.

| 명령어 | 설명 |
|---|---|
| `git branch` | 현재 로컬 브랜치 목록을 확인합니다. |
| `git branch [브랜치명]` | 새 브랜치를 생성합니다. |
| `git switch [브랜치명]` | 해당 브랜치로 이동합니다. |
| `git switch -c [브랜치명]` | 새 브랜치를 생성하고 바로 이동합니다. |
| `git branch -d [브랜치명]` | 브랜치를 삭제합니다. |
| `git branch -D [브랜치명]` | 병합되지 않은 브랜치를 강제로 삭제합니다. |

### 사용 예시

```bash
git switch -c feature/login
git branch
```

> `git branch -D`는 병합되지 않은 브랜치도 강제로 삭제합니다.
> 삭제 전 필요한 작업이 남아 있는지 확인하는 것이 좋습니다.

---

## 병합 (merge)

다른 브랜치의 작업 내용을 현재 브랜치에 합치는 명령어입니다.

| 명령어 | 설명 |
|---|---|
| `git merge [브랜치명]` | 지정한 브랜치의 변경사항을 현재 브랜치에 병합합니다. |

### 사용 예시

```bash
git switch main
git merge feature/login
```

> 같은 파일의 같은 부분을 여러 브랜치에서 수정한 경우 충돌이 발생할 수 있습니다.
> 충돌이 발생하면 파일을 직접 수정한 뒤 다시 스테이징하고 커밋해야 합니다.

```bash
git add .
git commit -m "Resolve merge conflict"
```

---

## 원격 저장소 작업 (fetch, pull, push)

원격 저장소와 로컬 저장소의 변경사항을 주고받을 때 사용하는 명령어입니다.

| 명령어 | 설명 |
|---|---|
| `git fetch` | 원격 저장소의 변경사항을 가져오지만, 현재 브랜치에는 바로 반영하지 않습니다. |
| `git pull` | 원격 저장소의 변경사항을 가져와 현재 브랜치에 반영합니다. |
| `git push` | 로컬 커밋을 원격 저장소에 업로드합니다. |
| `git push origin [브랜치명]` | 지정한 브랜치를 원격 저장소에 업로드합니다. |
| `git push -u origin [브랜치명]` | 로컬 브랜치와 원격 브랜치를 연결하면서 push합니다. |

### 사용 예시

```bash
git push -u origin main
git pull
```

> `git pull`은 원격 저장소의 변경사항을 현재 브랜치에 바로 반영합니다.
> 작업 중인 변경사항이 있다면 먼저 커밋하거나 stash 하는 것이 좋습니다.

---

## 되돌리기 (restore, reset, revert)

Git에서 변경사항이나 커밋을 되돌릴 때 사용하는 명령어입니다.

| 명령어 | 설명 |
|---|---|
| `git restore [파일명]` | 아직 스테이징하지 않은 파일의 수정 내용을 되돌립니다. |
| `git reset [커밋ID]` | 지정한 커밋으로 브랜치 위치를 되돌립니다. |
| `git reset --soft [커밋ID]` | 커밋만 되돌리고 변경사항은 스테이징 영역에 유지합니다. |
| `git reset --mixed [커밋ID]` | 커밋만 되돌리고 변경사항은 작업 디렉토리에 유지합니다. |
| `git reset --hard [커밋ID]` | 커밋과 작업 디렉토리의 변경사항을 모두 되돌립니다. |
| `git revert [커밋ID]` | 기존 커밋을 삭제하지 않고, 해당 커밋의 변경사항을 취소하는 새 커밋을 생성합니다. |

> `git reset --hard`는 작업 중인 변경사항까지 삭제할 수 있으므로 매우 주의해야 합니다.
> 이미 원격 저장소에 올라간 커밋을 되돌릴 때는 `reset`보다 `revert`를 사용하는 것이 안전합니다.

---

## 임시 저장 (stash)

아직 커밋하지 않은 변경사항을 잠시 보관할 때 사용하는 명령어입니다.

| 명령어 | 설명 |
|---|---|
| `git stash` | 현재 작업 중인 변경사항을 임시 저장합니다. |
| `git stash list` | 저장된 stash 목록을 확인합니다. |
| `git stash pop` | 가장 최근 stash를 적용하고 목록에서 삭제합니다. |
| `git stash apply` | 가장 최근 stash를 적용하지만 목록에서는 삭제하지 않습니다. |
| `git stash drop` | 가장 최근 stash를 삭제합니다. |

### 사용 예시

```bash
git stash
git pull
git stash pop
```

---

## 태그 (tag)

특정 커밋에 이름을 붙일 때 사용하는 명령어입니다.

주로 버전 표시를 위해 사용합니다.

| 명령어 | 설명 |
|---|---|
| `git tag` | 태그 목록을 확인합니다. |
| `git tag [태그명]` | 현재 커밋에 태그를 생성합니다. |
| `git tag -a [태그명] -m "태그 메시지"` | 메시지가 포함된 태그를 생성합니다. |
| `git push origin [태그명]` | 특정 태그를 원격 저장소에 업로드합니다. |
| `git push origin --tags` | 모든 태그를 원격 저장소에 업로드합니다. |

### 사용 예시

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## 자주 사용하는 명령어 흐름

### 새 프로젝트를 Git으로 관리할 때

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [저장소 URL]
git push -u origin main
```

### 기존 프로젝트에서 작업할 때

```bash
git pull
git switch -c feature/example
git add .
git commit -m "Add example feature"
git push -u origin feature/example
```

### 작업 내용을 확인하고 커밋할 때

```bash
git status
git diff
git add .
git diff --staged
git commit -m "Update files"
```

---

## 마무리

Git 명령어는 처음에는 많아 보이지만, 실제로 자주 사용하는 명령어는 어느 정도 정해져 있습니다.

처음에는 `status`, `add`, `commit`, `push`, `pull`, `branch`, `switch` 위주로 익숙해지고, 이후 `reset`, `revert`, `stash`, `rebase` 같은 명령어를 상황에 맞게 익히면 됩니다.