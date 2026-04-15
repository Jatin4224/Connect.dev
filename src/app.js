import express from "express";

const app = express();
app.use(express.json());

import healthcheckRoute from "./routes/healthcheck.route.js";

app.use("/api/v1/healthcheck", healthcheckRoute);
export default app;
