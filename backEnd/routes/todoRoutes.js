import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "There is 5 todos" });
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "New todo has been created" });
});

router.put("/", (req, res) => {
  res.status(200).json({ message: "todo 1 hase benn updated" });
});

router.delete("/", (req, res) => {
  res.status(200).json({ message: "todo 1 hase benn deleted" });
});

export default router;
