# 现已通过GitHub Actions自动部署，提交只需 'git push' 即可
# 若不想使用自动部署，可以直接运行命令 'npm run deploy' 本地自动提交部署

# 确保脚本抛出遇到的错误
set -e

git init
git add *
git commit -m 'deploy'
git push -f git@github.com:minuet-red/blog.git main
