import { getMicrositeData, setMicrositeData } from "../models/micrositeData.js";

export const getMicrosite = (req, res) => {
  const { id } = req.params;

  const data = getMicrositeData(id);

  if (!data) {
    return res.status(404).json({ error: "Microsite not found" });
  }

  res.json(data);
};

export const updateMicrosite = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  // Validate required fields
  if (!data) {
    return res.status(400).json({ error: "Data is required" });
  }

  const updated = setMicrositeData(id, data);
  res.json(updated);
};

