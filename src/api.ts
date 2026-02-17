import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export type AppointmentPayload = {
  full_name: string;
  phone: string;
  email?: string;
  department: string;
  preferred_date?: string;
  message?: string;
};

export async function createAppointment(payload: AppointmentPayload) {
  const { data } = await api.post("/appointments", payload);
  return data as { id: number; message: string };
}
