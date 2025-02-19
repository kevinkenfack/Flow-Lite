import { create } from "zustand";

export const useAppStore = create((set) => ({
  // Boolean flag that determines whether objects should snap to a grid
  snapToGrid: false,
  
  // Boolean flag that determines whether the grid should be visible
  showGrid: true,

  // Method to dynamically update properties in the store
  setProperty: (prop, v) => set((state) => ({...state, [prop]: v}))
}))