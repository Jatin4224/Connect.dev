import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
import healthcheckRoute from "./routes/healthcheck.route.js";
import authRouter from "./routes/auth.route.js";
import profileRouter from "./routes/profile.route.js";
app.use("/api/v1/healthcheck", healthcheckRoute);
app.use("/api/v1/", authRouter);
app.use("/api/v1/", profileRouter);
export default app;
