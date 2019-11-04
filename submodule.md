# submodule操作

## 新增submodule

```js
git submodule add [-b <分支名>] [--name <名字>] <仓库地址> <path>
// 例子:
git submodule add -b dev --name submodule/testSubmodule git@github.com:forkuser/testSubmodule.git submodule/testSubmodule
git submodule add -b dev --name test git@github.com:forkuser/testSubmodule.git submodule/testSubmodule

```

## 初始化更新

```js
git submodule init
git submodule sync
git submodule update --remote --recursive
// 如果已有远程分支但是没有本地分支
git submodule foreach git checkout -b dev origin/dev
// 如果没有远程分支也没有本地分支
git submodule foreach git checkout -b dev
// 如果已有本地分支
git submodule foreach git checkout dev
git submodule foreach git pull origin dev
```

## 删除submodule

```js
rm -rf <submodule的path>
git rm --cached <submodule的path>
rm -rf .git/modules/<submodule名字>
手动删除.gitmodules下面对应的那段
git submodule deinit -f <submodule的path>
// git config --remove-section submodule.<submodule名字>



// 例子:
rm -rf submodule/testSubmodule
git rm --cached submodule/testSubmodule
rm -rf .git/modules/submodule/testSubmodule
git submodule deinit -f submodule/testSubmodule
// git config --remove-section submodule.submodule/testSubmodule
```
