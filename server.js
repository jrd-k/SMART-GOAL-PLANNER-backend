// server.js
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const server = jsonServer.create();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set default middlewares (logger, CORS, etc)
server.use(jsonServer.defaults());

// Set up the db.json path
const router = jsonServer.router(path.join(__dirname, "db.json"));
server.use(jsonServer.bodyParser);
server.use("/goals", router);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
