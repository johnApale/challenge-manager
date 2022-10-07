import api from "../../api";

// Create challenge
const create = async (challengeData) => {
  const response = await api.post("api/challenges", challengeData);

  if (response.data) {
    localStorage.setItem("challenge", JSON.stringify(response.data));
  }
  return response.data;
};

// Get challenge by ID
const getByID = async (id) => {
  const response = await api.get(`api/challenges/${id}`);

  if (response.data) {
    localStorage.setItem("challenge", JSON.stringify(response.data));
  }
  return response.data;
};

// Update challenge participants by ID
const addParticipant = async (id, data) => {
  const response = await api.patch(`api/challenges/add-user/${id}`, data);

  if (response.data) {
    localStorage.setItem("challenge", JSON.stringify(response.data));
  }
  return response.data;
};

const challengeService = {
  create,
  getByID,
  addParticipant,
};

export default challengeService;
