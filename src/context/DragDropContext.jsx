import { createContext, useState, useContext } from "react";

// Creating the DragDropContext
const DragDropContext = createContext();

export const DDProvider = ({children}) => {

  // Defining a state to store type of node 
  const [type, setType] = useState(null);

  return(
    <DragDropContext.Provider value={{type, setType}}>
      {children}
    </DragDropContext.Provider>
  )
}

export default DragDropContext;

// Custom hook to access the DragDropContext
export const useDragDrop = () => {
  return useContext(DragDropContext);
}