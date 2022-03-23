
## Docker Build
docker build . -t testapi

## Docker run
docker run -p 80:8080 -d testapi

## Docker stop
docker stop containor_name

## Docker execute inside containor

docker exec -it containor_name  sh

## Load testing 
## Reference : https://davidmcintosh.medium.com/what-a-load-load-testing-apis-aea1ce5fba44

loadtest -n 1000 -c 1000 --rps 200 http://localhost:8080/status

loadtest -n 1000 -c 100 --rps 200 http://lb1-992514832.us-east-2.elb.amazonaws.com/

## Fib serious takes 1.8 sec for load testing
http://localhost:3000/fib/38

loadtest -n 100 -c 10 --rps 200 http://lbapi-1089735077.us-east-2.elb.amazonaws.com/fib/30

## mysql Ref CRUD
https://www.tutsmake.com/node-express-js-creating-a-restful-api-mysql-example/
