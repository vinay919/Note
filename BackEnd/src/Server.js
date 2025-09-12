import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002

connectDB();

//middleware (to parse json body)
app.use(express.json())

//Routes
app.use("/api/notes", notesRoutes)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})




