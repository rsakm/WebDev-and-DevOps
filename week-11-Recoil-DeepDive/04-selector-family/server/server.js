import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

const todos = {
  1: { id: 1, title: "Learn Recoil", completed: false },
  2: { id: 2, title: "Build Todo App", completed: true },
  3: { id: 3, title: "Write Blog Post", completed: false },
};

app.get("/todo", (req, res) => {
  const id = req.query.id;
  const todo = todos[id];

  if (todo) {
    res.json({ todo });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
