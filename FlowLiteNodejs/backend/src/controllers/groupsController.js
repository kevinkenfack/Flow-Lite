import Groups from '../models/groups.js';
import { nanoid } from 'nanoid';

export const getGroups = async (req, res) => {
  try {
    const groups = await Groups.findAll();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGroupById = async (req, res) => {
  try {
    const group = await Groups.findByPk(req.params.id)
    if(!group) {
      return res.status(404).json({message: "Group not found"})
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createGroup = async (req, res) => {

  // Default group
  const newGroup = {
    id: nanoid(12),
    name: req.body.name,
    color: 'gray'
  }

  try {
    const group = await Groups.create(newGroup);
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updateGroup = async (req, res) => {
  try{
    const group = await Groups.findByPk(req.params.id)
    if(!group) {
      return res.status(404).json({message: "Group not found"})
    }
    await group.update(req.body)
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const deleteGroup = async (req, res) => {
  try{
    const group = await Groups.findByPk(req.params.id)
    if(!group) {
      return res.status(404).json({message: "Group not found"})
    }
    await group.destroy()
    res.status(204).json("Group removed")
  } catch (error) {
    res.status(500).json({error: error.message})
  }

}



