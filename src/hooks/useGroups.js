import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { apiGetGroups, apiUpdateGroups } from "../services/groupService";

const useGroups = () => {

  // State for holding the groups array
  const [groups, setGroups] = useState([]);

  // State for tracking the loading and error status - used for api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchGroups = async () => {
      try {
        const storageGroups = apiGetGroups();
        setGroups(storageGroups)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const addGroup = (name) => {
    const id = nanoid(8)
    const newGroup = {id: id, name: name, color: "gray"}
    setGroups(prev => {
      const updatedGroups = [...prev, newGroup] 
      updateStorage(updatedGroups)
      return updatedGroups
    })
  }

  const changeColor = (groupId, color) => {

    setGroups(prev => {
      const updatedGroups = prev.map(group => {
        if(group.id === groupId) {
          return {...group, color: color}
        }
        return group
      })

      updateStorage(updatedGroups)
      return updatedGroups
    })

  }

  const deleteGroup = (groupId) => {
    setGroups(prev => {
      const updatedGroups = prev.filter(group => group.id !== groupId)
      updateStorage(updatedGroups)
      return updatedGroups
    })
  }

  // Update to localStorage
  const updateStorage = (updatedGroups) => {
    setLoading(true);
    try {
      apiUpdateGroups(updatedGroups)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {groups, addGroup, changeColor, deleteGroup, loading, error}
}

export default useGroups;