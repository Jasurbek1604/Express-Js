import express from "express";
import path from "path";
import { requestTime, logger } from "./middlewears.js";
import serverRoutes from "./routes/servers.js";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static(path.resolve(__dirname, "static")));
app.use(requestTime);
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "ejs"));

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "static", "index.html"));
  res.render("index", { title: "Home Page", active: "home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page", active: "about" });
});

app.use(serverRoutes);

// app.get("/download", (req, res) => {
//   console.log(req.requestTime);
//   res.download(path.resolve(__dirname, "static", "index.html"));
// });

// app.get("/info", (req, res) => {
//   console.log(req.url);
//   res.sendFile(path.resolve(__dirname, "static", "info.html"));
// });

app.listen(PORT, () => {
  console.log(`Server has been start on ${PORT} port...`);
});
