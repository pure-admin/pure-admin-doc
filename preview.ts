import open from "open";
import express from "express";

const app = express();
app.use(express.static("./docs/.vuepress/dist"));
app.listen(8890);
open(`http://localhost:8890`);
