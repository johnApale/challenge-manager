import api from "../../api";

// Create user
const create = async (userData) => {
  const response = await api.post("api/users", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Update user profile
const patch = async (id, data) => {
  const response = await api.patch(`api/users/${id}`, data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const usersService = {
  create,
  patch,
};

export default usersService;
