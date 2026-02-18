import express from "express";
import helmet from "helmet";
import cors from "cors";
import compilerRoutes from "./routes/compiler.routes";
import snippetRoutes from "./routes/snippet.routes";

const app = express();


app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(helmet());
app.use(express.json());

app.use("/api/compiler", compilerRoutes);
app.use("/api/snippet", snippetRoutes);

export default app;