import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple Node.js Backend Running");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
