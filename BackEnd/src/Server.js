import express from 'express';

const app = express();
const PORT = 5001;

//middleware (to parse json body)
app.use(express.json())

//Routes
app.get("/note", (req, res) => {
    res.status(200).json({ message: "Hello, Express.js!" });
});
app.post("/note", (req, res) => {
    res.status(201).json({ message: "Data Received" })
});
app.put("/note/:id", (req, res) => {
    res.status(200).json({ message: "Data Received" })
});
app.delete("/note/:id", (req, res) => {
    res.status(200).json({ message: "Data Received" })
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})

