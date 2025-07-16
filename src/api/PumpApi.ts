import api from "./api";
import type { PumpType } from "../types";

// GET all pumps
export const getPumps = async (): Promise<PumpType[]> => {
  const response = await api.get("/PumpData");
  return response.data;
};

// GET a single pump by ID
export const getPumpById = async (id: string): Promise<PumpType> => {
  const response = await api.get(`/PumpData/${id}`);
  return response.data;
};

// CREATE a new pump
export const createPump = async (
  pump: Omit<PumpType, "id">
): Promise<PumpType> => {
  const response = await api.post("/PumpData", pump);
  return response.data;
};

// UPDATE an existing pump
export const updatePump = async (pump: PumpType): Promise<PumpType> => {
  const response = await api.put(`/PumpData/${pump.id}`, pump);
  return response.data;
};

// DELETE a pump by id
export const deletePump = async (id: number): Promise<void> => {
  await api.delete(`/PumpData/${id}`);
};

// Login endpoint using username and password
export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await api.post("/Auth/login", {
    username,
    password,
  });
  return response.data.token;
};

// GET a current User profile
export const getProfile = async (): Promise<void> => {
  const response = await api.get("/Auth/profile");
  return response.data;
};
