// Simple login controller - no real auth yet
export const login = (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  // No real authentication yet - just return success
  res.json({
    success: true,
    message: "Login successful",
    user: {
      email,
      id: "user-123", // Temporary user ID
    },
  });
};

