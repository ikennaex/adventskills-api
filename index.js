const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const workerRoutes = require("./routes/workerRoutes");
const connectDB = require("./config/dbConnection");
require('dotenv').config();

// database connection 
connectDB() 

// middelware
app.use(express.json());
// cors middleware
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5174", "http://localhost:5173", "https://advent-skills.onrender.com", "https://www.adventskills.com.ng"],
  })
);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/workers", workerRoutes);

// run server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


