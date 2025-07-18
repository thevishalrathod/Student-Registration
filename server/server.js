import express from "express";
import "./dbConnection.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

import UserRouter from "./routes/user.router.js";
app.use("/api/auth", UserRouter);

import AdminRouter from "./routes/admin.router.js";
app.use("/api/admin", AdminRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
