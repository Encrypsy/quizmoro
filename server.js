var http = require("http")
var fs = require("fs")
const { REPL_MODE_STRICT } = require("repl")

http.createServer(function (request, response) {

    switch (request.url) {
      case "/":
        fs.readFile("landingpg.html", (err, data) => {
            if (err) {
                response.writeHead(404, {'content-type': 'text/plain'})
                response.write('file nya ga muncul T-T')
                response.end()
                return
            }

            response.writeHead(200, {'content-type': 'text/html'})
            response.write(data)
            response.end
        })
        break
      case "/quiz":
        fs.readFile("quiz/index.html", (err, data) => {
            if (err) {
                response.writeHead(404, {'content-type': 'text/plain'})
                response.write('file nya ga muncul T-T')
                response.end()
                return
            }

            response.writeHead(200, {'content-type': 'text/html'})
            response.write(data)
            response.end
        })
        break
      case "/pomodoro-timer":
        fs.readFile("pomodoro/index.html", (err, data) => {
            if (err) {
                response.writeHead(404, {'content-type': 'text/plain'})
                response.write('file nya ga muncul T-T')
                response.end()
                return
            }

            response.writeHead(200, {'content-type': 'text/html'})
            response.write(data)
            response.end
        })
        break
      default:
        response.writeHead(404, { "Content-Type": "text/plain" })
        response.end("404: Halaman tidak ditemukan")
        return
    }

    // fs.readFile(filePath, (err, data) => {
    //   if (err) {
    //     response.writeHead(500, { "Content-Type": "text/plain" })
    //     response.end("500: Error server")
    //   } else {
    //     response.writeHead(200, { "Content-Type": "text/html" })
    //     response.end(data)
    //   }
    // });
  })
  .listen(8000)

console.log("Server running on http://localhost:8000")
