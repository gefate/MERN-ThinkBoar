import express from "express";

const app = express();

import notesRouter from "./routes/todoRoutes.js";

app.use("/api/v1/todo", notesRouter);

app.listen(4000, (req, res) => {
  console.log("Server is running on port 4000");
});
