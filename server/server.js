import cors from "cors";
import express from "express";
import { connectDB } from "./utils/db.js";
import { PORT } from "./config/env.js";

const app = express();
 
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE','OPTIONS','PATCH'],
    credentials: true, 
};

app.use(cors(corsOptions))

app.use(express.json());

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});