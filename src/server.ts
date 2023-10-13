import express from "express";
import { ENV } from "./env";

const app = express();

app.listen(ENV.serverPort, () =>
  console.log(`server started on port ${ENV.serverPort}`)
);
