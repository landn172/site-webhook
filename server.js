var http = require("http");
var fs = require("fs");
var createHandler = require("github-webhook-handler");
var spawn = require("child_process").spawn;

var handlerPromse = new Promise(resolve => {
  fs.readFile("/home/lord.txt", "utf8", (err, data) => {
    if (err) throw err;
    resolve(data);
  });
}).then(lordSecret => {
  console.log("lordSecret:"+ lordSecret);
  return createHandler({ path: "/lord", secret: lordSecret });
});

http
  .createServer(function(req, res) {
    handlerPromse.then(handler => {
      handler(req, res, function(err) {
        res.statusCode = 404;
        res.end("no such location");
      });
    });
  })
  .listen(7777);

handlerPromse.then(handler => {
  handler.on("error", function(err) {
    console.error("Error:", err.message);
  });

  handler.on("push", function(event) {
    console.log(
      "Received a push event for %s to %s",
      event.payload.repository.name,
      event.payload.ref
    );
    switch (event.path) {
      case "/lord":
        runCommand("sh", ["./lord_auto_build.sh"], function(txt) {
          console.log(txt);
        });
        break;
      default:
        // do sth else or nothing
        break;
    }
  });
});

function rumCommand(cmd, args, callback) {
  var child = spawn(cmd, args);
  var response = "";
  child.stdout.on("data", function(buffer) {
    resp += buffer.toString();
  });
  child.stdout.on("end", function() {
    callback(resp);
  });
}
