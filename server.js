import http from "http";

const server = http.createServer((req, res) => {
  // Home route: /
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>My EC2 Server</title>
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

            .container {
              max-width: 600px;
            }

            h1 {
              font-size: 48px;
              margin-bottom: 10px;
            }

            p {
              color: #aaa;
              font-size: 18px;
            }

            a {
              display: block;
              margin: 14px 0;
              color: #fff;
              font-size: 20px;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>

        <body>
          <div class="container">
            <h1>My AWS EC2 Server</h1>

            <p>Available routes</p>

            <a href="/">/</a>
            <a href="/about">/about</a>
            <a href="/api">/api</a>
            <a href="/api/users">/api/users</a>
          </div>
        </body>
      </html>
    `);

    return;
  }

  // About route: /about
  if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
      <h1>About</h1>
      <p>This is a Node.js server running on AWS EC2.</p>
    `);

    return;
  }

  // API route: /api
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        message: "Hello from my API!",
        server: "AWS EC2",
        runtime: "Node.js"
      })
    );

    return;
  }

  // Users API: /api/users
  if (req.url === "/api/users" && req.method === "GET") {
    const users = [
      { id: 1, name: "Arifa" },
      { id: 2, name: "Ali" },
      { id: 3, name: "Sara" }
    ];

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(users));

    return;
  }

  // 404 route
  res.writeHead(404, { "Content-Type": "application/json" });

  res.end(
    JSON.stringify({
      message: "Route not found"
    })
  );
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
