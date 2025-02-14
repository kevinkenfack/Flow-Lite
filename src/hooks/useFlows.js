import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { apiGetFlows, apiUpdateFlows } from "../services/flowService";

const useFlows = () => {

  // State for holding the flows array
  const [flows, setFlows] = useState([]);

  // State for tracking the loading and error status - used for api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchPlans = async () => {
      try {
        const storageFlows = apiGetFlows()
        setFlows(storageFlows)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const addFlow = () => {
    const id = nanoid(8)
    const number = flows.length + 1
    const newFlow = {id: id, name: `Flow ${number}`, nodes: [], edges: [], group: null, updatedAt: Date.now()}
    setFlows(prev => {
      const updatedFlows = [...prev, newFlow] 
      updateStorage(updatedFlows)
      return updatedFlows
    })
    return {id: id}
  }

  const deleteFlow = (flowId) => {
    setFlows(prev => {
      const updatedFlows = prev.filter(flow => flow.id !== flowId)
      updateStorage(updatedFlows)
      return updatedFlows
    })
  }

  const updateFlow = (flowId, data) => {
    setFlows(prev => {
      const updatedFlows = prev.map(flow => {
        if(flow.id === flowId) {
          return {...flow, ...data}
        }
        return flow
      })
      updateStorage(updatedFlows)
      return updatedFlows
    })
  }

  const clearGroupInFlows = (groupId) => {
    setFlows(prev => {
      const updatedFlows = prev.map(flow => {
        if(flow.group === groupId) {
          return {...flow, group: null}
        }
        return flow
      })
      updateStorage(updatedFlows)
      return updatedFlows
    })
  }

  // Update to localStorage
  const updateStorage = (updatedFlows) => {
    setLoading(true);
    try {
      apiUpdateFlows(updatedFlows)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {flows, addFlow, deleteFlow, updateFlow, clearGroupInFlows, loading, error}
}

export default useFlows;