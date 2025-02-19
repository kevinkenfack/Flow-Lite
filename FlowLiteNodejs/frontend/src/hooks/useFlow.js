import { useEffect, useState, useCallback } from "react";
import { useEdgesState, useNodesState, addEdge} from "@xyflow/react";
import { apiGetFlow, apiUpdateFlow } from "../services/flowService";
import { nanoid } from "nanoid";
import useDebounce from "./useDebounce";

const useFlow = (flowId) => {

  // State for holding the flow object
  const [flow, setFlow] = useState(null);

  // State and handler for managing nodes of the flow
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // State for tracking the loading and error status - used for api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)

    const fetchFlow = async () => {
      try {
        // Fetch flow data from the API
        const flowData = await apiGetFlow(flowId);
        
        // If no data is returned 
        if (!flowData) {
          setFlow(undefined);
          return;
        };

        // Update state with the fetched flow details
        setFlow({
          id: flowData.id, 
          name: flowData.name, 
          group: flowData.group, 
          updatedAt: flowData.updatedAt
        });
        setNodes(flowData.nodes);
        setEdges(flowData.edges);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlow();
  }, [flowId]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({...params, type: 'custom', animated: true, data: {color: "gray", strokeWidth: 1}}, eds)),
    [setEdges],
  );

  const addNode = (type, position, data = {}) => {
    const id = nanoid(8)
    const label = type.charAt(0).toUpperCase() + type.slice(1)
    // Default node
    const newNode = {id: id, type: type, position: {x: position.x, y:position.y}, data: {label: label, color: "gray", ...data}}
    setNodes(prev => {
      const updatedNodes = [...prev, newNode] 
      updateStorage({nodes: updatedNodes})
      return updatedNodes
    })
  }

  const changeName = (updatedName) => {
    setFlow(prev => ({...prev, name: updatedName}))
  }

  const updateNode = (nodeId, data) => {
    setNodes(prev => prev.map(node => {
      if(node.id === nodeId) {
        return {...node, data: {...node.data, ...data}}
      } 
      return node
    }))
  }

  const updateEdge = (edgeId, data) => {
    setEdges(prev => prev.map(edge => {
      if(edge.id === edgeId) {
        return {...edge, ...data}
      } 
      return edge
    }))
  }

  const updateDataEdge = (edgeId, data) => {
    setEdges(prev => prev.map(edge => {
      if(edge.id === edgeId) {
        return {...edge, data: {...edge.data, ...data}}
      } 
      return edge
    }))
  }
  
  const updateStorage = () => {
    setLoading(true);
    try {
      const flowData = {
        name: flow.name,
        nodes: nodes, 
        edges: edges, 
        updatedAt: Date.now()
      }
      apiUpdateFlow(flowId, flowData)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // On every change update database in background every 400ms
  const debounceUpdate = useDebounce(updateStorage, 400);
  useEffect(() => {
    
    debounceUpdate()
  }, [nodes, edges, flow])

  return {
    flow,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    changeName,
    onConnect,
    addNode,
    updateNode,
    updateEdge,
    updateDataEdge,
    loading, 
    error
  }
}

export default useFlow;