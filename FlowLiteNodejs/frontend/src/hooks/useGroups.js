import { useState, useEffect } from "react";
import { apiGetGroups, apiUpdateGroup, apiAddGroup, apiDeleteGroup } from "../services/groupService";

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
        const storageGroups = await apiGetGroups();
        setGroups(storageGroups)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const addGroup = async (name) => {

    const newGroup = {name: name, color: "gray"}

    try {
      const groupAdded = await apiAddGroup(newGroup);
      setGroups(prev => {
        const updatedGroups = [...prev, groupAdded] ;
        return updatedGroups;
      })
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    
  }

  const changeColor = async (groupId, color) => {
    const groupData = { color: color};
    try {
      await apiUpdateGroup(groupId, groupData);
      setGroups(prev => {
        const updatedGroups = prev.map(group => {
          if(group.id === groupId) {
            return {...group, color: color}
          }
          return group
        })
  
        return updatedGroups
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const deleteGroup = async (groupId) => {
    try {
      await apiDeleteGroup(groupId);
      setGroups(prev => {
        const updatedGroups = prev.filter(group => group.id !== groupId)
        return updatedGroups
      })
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {groups, addGroup, changeColor, deleteGroup, loading, error}
}

export default useGroups;