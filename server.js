// var http = require("http")
// var fs = require("fs")
// const { REPL_MODE_STRICT } = require("repl")

// http.createServer(function (request, response) {

//     switch (request.url) {
//       case "/":
//         fs.readFile("landingpg.html", (err, data) => {
//             if (err) {
//                 response.writeHead(404, {'content-type': 'text/plain'})
//                 response.write('file nya ga muncul T-T')
//                 response.end()
//                 return
//             }

//             response.writeHead(200, {'content-type': 'text/html'})
//             response.write(data)
//             response.end
//         })
//         break
//       case "/quiz":
//         fs.readFile("quiz/index.html", (err, data) => {
//             if (err) {
//                 response.writeHead(404, {'content-type': 'text/plain'})
//                 response.write('file nya ga muncul T-T')
//                 response.end()
//                 return
//             }

//             response.writeHead(200, {'content-type': 'text/html'})
//             response.write(data)
//             response.end
//         })
//         break
//       case "/pomodoro-timer":
//         fs.readFile("pomodoro/index.html", (err, data) => {
//             if (err) {
//                 response.writeHead(404, {'content-type': 'text/plain'})
//                 response.write('file nya ga muncul T-T')
//                 response.end()
//                 return
//             }

//             response.writeHead(200, {'content-type': 'text/html'})
//             response.write(data)
//             response.end
//         })
//         break
//       default:
//         response.writeHead(404, { "Content-Type": "text/plain" })
//         response.end("404: Halaman tidak ditemukan")
//         return
//     }

//     // fs.readFile(filePath, (err, data) => {
//     //   if (err) {
//     //     response.writeHead(500, { "Content-Type": "text/plain" })
//     //     response.end("500: Error server")
//     //   } else {
//     //     response.writeHead(200, { "Content-Type": "text/html" })
//     //     response.end(data)
//     //   }
//     // });
//   })
//   .listen(8000)

// console.log("Server running on http://localhost:8000")

const express = require('express')
const path = require('path')
const app = express()
const PORT = 8000

app.use(express.static(__dirname));
app.use('/quiz', express.static(path.join(__dirname, 'quiz')));
app.use('/pomodoro', express.static(path.join(__dirname, 'pomodoro')));

app.get('/', (req, res) => {
  // res.writeHead(200, {"content-type": "text/html"})
  res.sendFile(path.join(__dirname, 'landingpg.html'));
});

app.get('/quiz', (req, res) => {
  // res.writeHead(200, {"content-type": "text/html"})
  res.sendFile(path.join(__dirname, 'quiz/quiz.html'));
});

app.get('/pomodoro-timer', (req, res) => {
  // res.writeHead(200, {"content-type": "text/html"})
  res.sendFile(path.join(__dirname, 'pomodoro/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


