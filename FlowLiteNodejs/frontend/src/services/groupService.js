import { handleApiError } from "./errorHandler";
import api from "./api";
/*

Groups Table structure:

Column Name       Data Type
---------------------------
id                INT
name              TEXT
color             TEXT

*/

export const apiGetGroups = async () => {
  try {
    const response = await api.get('/groups');
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiAddGroup = async (data) => {
  try {
    const response = await api.post(`/groups/`, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiUpdateGroup = async (groupId, data) => {
  try {
    const response = await api.put(`/groups/${groupId}`, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiDeleteGroup = async (groupId) => {
  try {
    const response = await api.delete(`/groups/${groupId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}