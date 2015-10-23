# ResumeSearch
Project for searching in number of resume files

1. Run elastic search: make sure to install elasticsearch-mapper-attachments
       a) cd folder of elasticsearch 
       b) run bin/plugin install elasticsearch/elasticsearch-mapper-attachments/2.7.1
      c) (2.7.1) i.e. mapper version depends on version of elastic search, full list of version here :
       https://github.com/elastic/elasticsearch-mapper-attachments

2. Update the folder path of CV in 
https://github.com/varun86b4u/ResumeSearch/blob/master/v1/server/config/config.js
3. npm install and Start node server.
4. localhost:8080/index.html
5. This will show the message for the creating the index. Click the button.
6. Once index is done, it will show the search bar.
