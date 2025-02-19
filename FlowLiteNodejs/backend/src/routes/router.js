import express from 'express';
const router = express.Router()

import { getFlows, getFlowById, updateFlow, createFlow, deleteFlow } from '../controllers/flowsController.js';
import { getGroups, getGroupById, updateGroup, createGroup, deleteGroup } from '../controllers/groupsController.js';

router.get('/', (req, res) => {
  res.status(500).json({ message: 'API routes'});
})

router.get('/flows', getFlows)
router.get('/flows/:id', getFlowById)
router.post('/flows', createFlow)
router.put('/flows/:id', updateFlow)
router.delete('/flows/:id', deleteFlow)

router.get('/groups', getGroups)
router.get('/groups/:id', getGroupById)
router.post('/groups', createGroup)
router.put('/groups/:id', updateGroup)
router.delete('/groups/:id', deleteGroup)

export default router