import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002


//middleware (to parse json body)
app.use(express.json())
app.use(cors())

//Routes
app.use("/api/notes", notesRoutes)

// first connect to DB and then start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    })
})





