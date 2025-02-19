import { useState, useEffect } from "react";
import { apiAddFlow, apiDeleteFlow, apiGetFlows, apiUpdateFlow } from "../services/flowService";

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
        const storageFlows = await apiGetFlows()
        setFlows(storageFlows)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const addFlow = async () => {

    const number = flows.length + 1
    const newFlow = { name: `Flow ${number}`, nodes: [], edges: [], group: null}
    try {
      const flowAdded = await apiAddFlow(newFlow);
      return {id: flowAdded.id}
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    
  }

  const deleteFlow = async (flowId) => {
    try {
      await apiDeleteFlow(flowId);
      setFlows(prev => {
        const updatedFlows = prev.filter(flow => flow.id !== flowId)
        return updatedFlows
      })
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const updateFlow = (flowId, data) => {
    setLoading(true);
    try {
      const flowData = {
        ...data, 
        updatedAt: Date.now()
      }
      apiUpdateFlow(flowId, flowData);
      setFlows(prev => {
        const updatedFlows = prev.map(flow => {
          if(flow.id === flowId) {
            return {...flow, ...data}
          }
          return flow
        })
        return updatedFlows
      })
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const clearGroupInFlows = (groupId) => {
    setFlows(prev => {
      const updatedFlows = prev.map(flow => {
        if(flow.group === groupId) {
          return {...flow, group: null}
        }
        return flow
      })
      return updatedFlows
    })
    // TODO clear all flows that contains this group
  }


  return {flows, addFlow, deleteFlow, updateFlow, clearGroupInFlows, loading, error}
}

export default useFlows;