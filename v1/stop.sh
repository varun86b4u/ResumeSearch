echo "Please wait... stopping server."
kill -9 `cat /tmp/process*.pid`
rm /tmp/process*.pid
echo "Server stopped Successfully."