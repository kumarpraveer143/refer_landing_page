const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || "";

export const apiUrl = (endpoint: string): string => {
  console.log(import.meta.env.VITE_API_BASE_URL);
  return `${API_BASE_URL}${endpoint}`;
};
