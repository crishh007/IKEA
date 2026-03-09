const express = require("express");
const router = express.Router();
const Project = require("../models/project");

router.post("/", async (req, res) => {
  const project = new Project(req.body);
  const saved = await project.save();
  res.json(saved);
});

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;