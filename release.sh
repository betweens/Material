t pull --rebase

npm run build

rm -rf ../../www/material/*

echo '删除成功';

mv ./build/* ../../www/material/

echo '拷贝成功';

echo '部署成功';i
