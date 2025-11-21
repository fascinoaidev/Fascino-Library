import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login.js";
import micrositeRoutes from "./routes/microsite.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "FascinoLib Backend API",
    version: "1.0.0",
    endpoints: {
      health: "GET /api/health",
      login: "POST /api/login",
      getMicrosite: "GET /api/microsite/:id",
      updateMicrosite: "PUT /api/microsite/:id",
    },
  });
});

// Routes
app.use("/api/login", loginRoutes);
app.use("/api/microsite", micrositeRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

