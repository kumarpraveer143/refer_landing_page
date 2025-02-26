const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || "";

export const apiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};
