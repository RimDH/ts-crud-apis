import express from "express";
import userRoutes from "./routes/user.routes";
import errorHandler from "./middlewares/error.middleware";
const app = express();

app.use(express.json()); //built-in middleware that parses incoming JSON request bodies
app.use("/api/users", userRoutes); //mounts all user-related routes under the /api/users base path.
app.use(errorHandler); //this registers a global error-handling middleware

export default app;
