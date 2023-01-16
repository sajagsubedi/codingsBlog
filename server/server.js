const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");


connectToMongo();
const app = express();    
const port = 5000;

app.use(cors());
app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/blogs", require("./routes/blogs.js"));
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
