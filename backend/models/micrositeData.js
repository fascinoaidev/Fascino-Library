// In-memory storage for microsite data
// In production, this would be replaced with a database

const micrositeStore = {};

export const getMicrositeData = (id) => {
  return micrositeStore[id] || null;
};

export const setMicrositeData = (id, data) => {
  micrositeStore[id] = {
    ...data,
    id,
    updatedAt: new Date().toISOString(),
  };
  return micrositeStore[id];
};

export const getAllMicrosites = () => {
  return micrositeStore;
};

