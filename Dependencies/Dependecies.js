import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const allowedOrigins = [
  "http://localhost:5173",
  "http://10.0.0.86:5173",
  "http://localhost:3000",
  "http://localhost:5000",
];

app.use(cors({ origin: allowedOrigins }));
app.use(helmet());
app.use(cookieParser());

 
export default app;
