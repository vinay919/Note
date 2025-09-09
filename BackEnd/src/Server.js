import express from 'express';

import notesRoutes from "./routes/notesRoutes.js";

const app = express();
const PORT = 5001;

//middleware (to parse json body)
app.use(express.json())

//Routes
app.use("/api/notes", notesRoutes)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})

