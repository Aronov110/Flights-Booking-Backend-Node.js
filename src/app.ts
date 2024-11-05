import path from "node:path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import expressStatusMonitor from "express-status-monitor";
import helmet from "helmet";
import logger from "morgan";

import { flightRoutes } from "./routes/flightRoutes";

dotenv.config({
	path: path.join(
		`${process.cwd()}/config/`,
		`.env${process.env.NODE_ENV === "test" ? ".test" : ".dev"}`,
	),
});

const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(expressStatusMonitor());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flightRoutes);

export default app;
