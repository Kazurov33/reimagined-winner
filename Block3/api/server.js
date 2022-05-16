const path = require("path");

const app = require("./config/app");
const prisma = require("./config/prisma");

prisma.$on("error", (e) => {
  console.error(e);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../app/build/index.html"));
});

app.all("*", async (req, res) => {
  if (res.statusCode != 200 && res.statusCode != 204) {
    if (res.headersSent == false) {
      res.send("System error, please contact the administrator");
    }
  }
});
