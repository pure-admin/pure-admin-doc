#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

initDist(){
  echo $1 > base.js
  npm run build
  cd docs/.vuepress/dist
}

initDist "module.exports = '/pure-admin-doc/'"
echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:xiaoxian521/pure-admin-doc.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://xiaoxian521:${GITHUB_TOKEN}@github.com/xiaoxian521/pure-admin-doc.git
  git config --global user.name "xiaoxian521"
  git config --global user.email "1923740402@qq.com"
fi

initGit(){
  git init
  git add -A
  git commit -m "${msg}"
}
initGit
git push $githubUrl origin gh-pages -f # 推送到github

cd -
rm -rf docs/.vuepress/dist