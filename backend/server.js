import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const DATA_FILE = "./tasks.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());

// Serve frontend static files from ../frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ... rest of your API routes here ...

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));


