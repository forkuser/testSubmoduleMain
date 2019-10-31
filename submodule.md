# submodule操作

## 新增submodule

```txt
git submodule add [-b <分支名>] [--name <名字>] <仓库地址> <submodule的path>
例子:
git submodule add -b dev --name submodule/testSubmodule git@github.com:forkuser/testSubmodule.git submodule/testSubmodule
git submodule add -b dev --name test git@github.com:forkuser/testSubmodule.git submodule/testSubmodule

```

## 初始化更新

```js
git submodule init
git submodule sync
git submodule foreach git checkout dev
git submodule foreach git pull origin dev
```

## 删除submodule

```txt
rm -rf <submodule的path>
git rm --cached <submodule的path>
rm -rf .git/modules/<submodule名字>
手动删除.gitmodules下面对应的那段
----
git submodule deinit -f <submodule的path>
或者
git config --remove-section submodule.<submodule名字>
----


例子:
rm -rf submodule/testSubmodule
git rm --cached submodule/testSubmodule
rm -rf .git/modules/submodule/testSubmodule

----
git submodule deinit -f submodule/testSubmodule
或者
git config --remove-section submodule.submodule/testSubmodule
----
```
