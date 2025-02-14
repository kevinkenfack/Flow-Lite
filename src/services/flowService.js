import { handleApiError } from "./errorHandler";
import { initialFlows } from '../data/initialFlows'

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

// Use async and await if you are dealing with asynchronous api calls
// Localstorage functions are synchronous so we dont need it here
export const apiGetFlows = () => {
  try {
    const response = localStorage.getItem("flow_lite_projects");
    // if(response == null) {
    //   // For demo purpose initialise some flows
    //   localStorage.setItem("flow_lite_projects", JSON.stringify(initialFlows));
    //   return initialFlows;
    // }
    return JSON.parse(response) || [];
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiGetFlow = (flowId) => {
  try {
    // Get all flows
    const response = localStorage.getItem("flow_lite_projects");
    if(response == null) {
      return false;
    }
    // Find flow by Id
    const flowData = JSON.parse(response).find(e => e.id === flowId) || false;
    return flowData;
  } catch (error) {
    const errorMessage = handleApiError(error)
    throw new Error(errorMessage);
  }
}

// With Localstorage with are dealing with one array so it is simpler to just update array in a single call
export const apiUpdateFlows = (updatedFlows) => {
  try {
    // Update localstorage
    localStorage.setItem("flow_lite_projects", JSON.stringify(updatedFlows))
    return updatedFlows;
  } catch (error) {
    const errorMessage = handleApiError(error)
    throw new Error(errorMessage);
  }
}

export const apiUpdateFlow = (flowId, data) => {
  try {
    // Get all flows
    const response = localStorage.getItem("flow_lite_projects");
    if(response == null) {
      return false;
    }

    // Parse flows
    const flows = JSON.parse(response);

    // Update flow by id
    const updatedFlows = flows.map((flow) =>
      flow.id === flowId ? {...flow, ...data} : flow
    )

    // Update localstorage
    localStorage.setItem("flow_lite_projects", JSON.stringify(updatedFlows));
    return updatedFlows;

  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}