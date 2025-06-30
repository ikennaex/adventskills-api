const express = require("express");
const {
  getWorker,
  postWorker,
  getWorkerById,
  editWorkerById,
} = require("../controllers/workerController");
const router = express.Router();

router.route("/").get(getWorker).post(postWorker);

router.route("/:id").get(getWorkerById).put(editWorkerById);

module.exports = router;
