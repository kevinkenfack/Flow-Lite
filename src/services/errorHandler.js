export const handleApiError = (error) => {
  let errorMessage = 'An error occurred';

  if (error.response) {
    if (error.response.data.message) {
      errorMessage = error.response.data.message;
    } 
    if (error.response.data.error) {
      errorMessage = error.response.data.error;
    }
  } else if (error.message) {
    errorMessage = error.message;
  }

  return errorMessage;
};