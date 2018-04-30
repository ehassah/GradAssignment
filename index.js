var server = require("diet");
// var extract = require("./extract");
// var wss = require("./websockets-server");
var app = server();
require("./websockets-server");
// var mime = require("mime");
app.listen("http://localhost:8000");

var static = require("diet-static")({
  path: app.path + "/app/"
});
app.view("file", static);

app.missing(function($){
  $.redirect("/error.html");
});

app.error(function($) {
  $.end($.statusCode + "\n" + $.statusMessage + "\n" + $.fail.error.message);
});

app.get("/", function($) {
  $.redirect("index.html");
});
