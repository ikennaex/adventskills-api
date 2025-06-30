const workermodel = require("../models/worker");

const postWorker = async (req, res) => {
  const {
    name,
    dob,
    gender,
    stateoforigin,
    stateofresidence,
    lga,
    religion,
    maritalstatus,
    noofchildren,
    address,
    phonenumber,
    nextofkin,
    nextofkinphonenumber,
    role,
    experience,
    livein,
    relocate,
    schedule,
    education,
    nameofschool,
    yearcompleted,
    previousemployer,
    previousemployeraddress,
    previousemployerphonenumber,
  } = req.body;

  try {
    const response = await workermodel.create({
      name,
      dob,
      gender,
      stateoforigin,
      stateofresidence,
      lga,
      religion,
      maritalstatus,
      noofchildren,
      address,
      phonenumber,
      nextofkin,
      nextofkinphonenumber,
      role,
      experience,
      livein,
      relocate,
      schedule,
      education,
      nameofschool,
      yearcompleted,
      previousemployer,
      previousemployeraddress,
      previousemployerphonenumber,
    });
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getWorker = async (req, res) => {
  try {
    const response = await workermodel.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getWorkerById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await workermodel.findById(id);
    if (!response) return res.status(404).json({ message: "Worker not found" });
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error" });
  }
};

const editWorkerById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedWorker = await workermodel.findByIdAndUpdate(
      id,
      { approved: true },
      { new: true }
    );

    if (!updatedWorker) {
      return res.status(404).json({ message: "Worker not found" });
    }

    res.status(200).json(updatedWorker);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  postWorker,
  getWorker,
  editWorkerById,
  getWorkerById,
};
