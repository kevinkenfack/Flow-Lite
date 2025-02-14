import { handleApiError } from "./errorHandler";

/*

Groups Table structure:

Column Name       Data Type
---------------------------
id                INT
name              TEXT
color             TEXT

*/

// Use async and await if you are dealing with asynchronous api calls
// Localstorage functions are synchronous so we dont need it here
export const apiGetGroups = () => {
  try {
    const response = localStorage.getItem("flow_lite_groups");
    const groups = JSON.parse(response) || [];
    return groups;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

// With Localstorage with are dealing with one array so it is simpler to just update array in a single call
export const apiUpdateGroups = (updatedGroups) => {
  try {
    localStorage.setItem("flow_lite_groups", JSON.stringify(updatedGroups));
    return updatedGroups;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}