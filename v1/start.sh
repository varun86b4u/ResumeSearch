#! /usr/bin/env bash
echo "Please wait... starting server."
nohup elasticsearch &
echo $! > /tmp/process1.pid
nohup node server.js &
echo $! > /tmp/process2.pid

while ! echo exit | nc localhost 9200; do sleep 10; done
while ! echo exit | nc localhost 8080; do sleep 10; done
echo "server started, Use link for accessing the app http://localhost:8080/index.html"
