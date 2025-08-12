#!/bin/bash

docker build -t physio_fun .
docker stop physio_fun
docker rm physio_fun
docker run -d --name physio_fun --restart always -p 5173:80 physio_fun
