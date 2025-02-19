import { handleApiError } from "./errorHandler";
import api from "./api";
/*

Flow Table structure:

Column Name       Data Type
---------------------------
id                INT
name              TEXT
group             TEXT
nodes             JSON
edges             JSON
updatedAt         TIMESTAMP

*/

export const apiGetFlows = async () => {
  try {
    const response = await api.get('/flows');
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiAddFlow = async (data) => {
  try {
    const response = await api.post(`/flows/`, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiGetFlow = async (flowId) => {
  try {
    const response = await api.get(`/flows/${flowId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiUpdateFlow = async (flowId, data) => {
  try {
    const response = await api.put(`/flows/${flowId}`, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiDeleteFlow = async (flowId) => {
  try {
    const response = await api.delete(`/flows/${flowId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}