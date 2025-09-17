var http = require("http")
var fs = require("fs")
var path = require("path")

http.createServer(function (request, response) {
    let filePath = ""

    switch (request.url) {
      case "/":
        filePath = "landingpg.html"
        break;
      case "/quiz":
        filePath = "quiz/index.html"
        break;
      case "/pomodoro-timer":
        filePath = "pomodoro/index.html"
        break;
      default:
        response.writeHead(404, { "Content-Type": "text/plain" })
        response.end("404: Halaman tidak ditemukan")
        return
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "text/plain" })
        response.end("500: Error server")
      } else {
        response.writeHead(200, { "Content-Type": "text/html" })
        response.end(data)
      }
    });
  })
  .listen(8000)

console.log("Server running on http://localhost:8000")
