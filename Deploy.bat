git add .
git commit -m "onekey deploy"
git push
curl --header "Content-Type: application/json" --request POST --data "{}" http://flow-openapi.aliyun.com/pipeline/webhook/12ukphIqqkEXcodlKdFc

