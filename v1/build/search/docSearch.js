/*! resume 2015-11-19 */
var esIndex=require("../es/esIndex"),config=require("../config/config"),searchDocuments=function(a,b,c,d,e){esIndex.searchTextInDocs(config.es.indexName,config.es.indexType,a,b,c,d,function(a,b){e(a,b)})};module.exports={searchDocuments:searchDocuments};