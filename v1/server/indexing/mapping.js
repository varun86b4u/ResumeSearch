
var mapping =   {
    "properties" : {
      "file" : {
        "type" : "attachment",
        "fields" : {
          "title" : { "store" : "yes" },
          "file" : { "term_vector":"with_positions_offsets", "store":"yes" },
          "content_type":{ "store" : "yes" },
          "content_length":{ "store" : "yes" },
          "name":{ "store" : "yes" },
           "date" : {"store" : "yes"}
        }
      }
    }
  }


module.exports = mapping;
