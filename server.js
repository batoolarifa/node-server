
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>EC2 Server</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #000;
            color: #fff;
            font-family: Arial, sans-serif;
            text-align: center;
          }

          h1 {
            font-size: 56px;
            margin-bottom: 16px;
          }

          p {
            font-size: 20px;
            color: #aaa;
          }
        </style>
      </head>

      <body>
        <div>
          <h1>My AWS EC2 Server</h1>
          <p>Hello from my Node.js server running on EC2!</p>
        </div>
      </body>
    </html>
  `);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
