import Flows from '../models/flows.js';
import { nanoid } from 'nanoid';

export const getFlows = async (req, res) => {
  try {
    const flows = await Flows.findAll();
    res.status(200).json(flows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFlowById = async (req, res) => {
  try {
    const flow = await Flows.findByPk(req.params.id)
    if(!flow) {
      return res.status(404).json({message: "Flow not found"})
    }
    res.status(200).json(flow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFlow = async (req, res) => {

  const newFlow = {
    id: nanoid(12),
    name: "Flow"
  }

  try {
    const flow = await Flows.create(newFlow);
    res.status(200).json(flow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updateFlow = async (req, res) => {
  try{
    const flow = await Flows.findByPk(req.params.id)
    if(!flow) {
      return res.status(404).json({message: "Flow not found"})
    }
    await flow.update(req.body)
    res.status(200).json(flow);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const deleteFlow = async (req, res) => {
  try{
    const flow = await Flows.findByPk(req.params.id)
    if(!flow) {
      return res.status(404).json({message: "Flow not found"})
    }
    await flow.destroy()
    res.status(204).json("Flow removed")
  } catch (error) {
    res.status(500).json({error: error.message})
  }

}



