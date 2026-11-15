
const http = require("http");

const PORT = 3000;

let users = [
  { id: 1, name: "Mohammad Mahdi Farahmand", email: "mahdi@example.com" }
];

let tasks = [
  { id: 1, title: "Complete Activity 3", completed: false },
  { id: 2, title: "Complete Activity 4", completed: false }
];

function send(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(data === null ? "" : JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname.split("/").filter(Boolean);
  const resource = parts[1];
  const id = parts[2] ? Number(parts[2]) : null;

  if (req.method === "GET" && url.pathname === "/health") {
    return send(res, 200, { status: "OK", message: "Server is running" });
  }

  if (!["tasks", "users"].includes(resource) || parts[0] !== "api") {
    return send(res, 404, { error: "Route not found" });
  }

  const collection = resource === "tasks" ? tasks : users;

  if (req.method === "GET" && !id) {
    return send(res, 200, collection);
  }

  if (req.method === "GET" && id) {
    const item = collection.find(x => x.id === id);
    return item
      ? send(res, 200, item)
      : send(res, 404, { error: "Resource not found" });
  }

  if (["POST", "PUT"].includes(req.method)) {
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
      let data;

      try {
        data = JSON.parse(body);
      } catch {
        return send(res, 400, { error: "Invalid JSON" });
      }

      if (!data || typeof data !== "object" || Array.isArray(data)) {
        return send(res, 400, { error: "Invalid request body" });
      }

      if (req.method === "POST") {
        if (!data.name && !data.title) {
          return send(res, 400, { error: "Name or title is required" });
        }

        const item = {
          id: Math.max(0, ...collection.map(x => x.id)) + 1,
          ...data
        };

        collection.push(item);
        return send(res, 201, item);
      }

      const index = collection.findIndex(x => x.id === id);

      if (index === -1) {
        return send(res, 404, { error: "Resource not found" });
      }

      collection[index] = { ...collection[index], ...data, id };
      return send(res, 200, collection[index]);
    });

    return;
  }

  if (req.method === "DELETE" && id) {
    const index = collection.findIndex(x => x.id === id);

    if (index === -1) {
      return send(res, 404, { error: "Resource not found" });
    }

    collection.splice(index, 1);
    return send(res, 204, null);
  }

  return send(res, 405, { error: "Method not allowed" });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
