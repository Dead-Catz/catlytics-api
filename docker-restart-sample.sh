docker build --tag catlytics -f Dockerfile-main .
docker stop catlytics
docker rm -f catlytics
docker run -d -it --name catlytics --network catlytics -p 8300:8300 catlytics