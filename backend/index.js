import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("API EGRESADOS");
});

app.listen(PORT, () => {
  console.log(`Backend escuchando en el puesto ${PORT}`);
});
