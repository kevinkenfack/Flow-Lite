import {useEffect, useState} from 'react'
import { LuTrash } from 'react-icons/lu'
import { colors } from '../colors'
import nodesTypes from '../nodes'

const NodeEdit = ({node, updateNode, deleteElements}) => {

  // Local state for holding node properties that can be edited
  const [label, setLabel] =useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [url, setUrl] = useState("");
  const [nodeGroup, setNodeGroup] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    updateNode(node.id, {color: color});
  }

  const handleLabelChange = (e) => {
    const value = e.target.value;
    setLabel(value);
    updateNode(node.id, {label: value});
  }

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    updateNode(node.id, {url: value});
  }

  const handleDeleteNode = () => {
    deleteElements({nodes: [{id: node.id}]});
  }

  // Effect hook to initialize node data
  useEffect(() => {

    if(node.data) {
      // Set local state with node properties if available
      setLabel(node.data.label);
      setSelectedColor(node.data.color);
      setUrl(node.data?.url || '');
    }

    // Set the node's group based on its type
    if(nodesTypes[node.type]) {
      const group = nodesTypes[node.type]?.group;
      setNodeGroup(group);

      // For wireframe nodes, URL is also part of the node's data
      if(group === 'wireframe') {
        setUrl(node.data?.url || '');
      } 
    } 

  }, [node])

  return (
    <div className='flex flex-col gap-4 p-4'>

      {/* Label */}
      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Label</label>
        <textarea type="text" rows={3} value={label} onChange={handleLabelChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
      </div>

      {/* If the node is a wireframe, display the URL input field */}
      {nodeGroup === 'wireframe' && 
      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Url</label>
        <input type="text" value={url} onChange={handleUrlChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
      </div>
      }

      {/* Color selection section*/}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">Color</label>
        <div className='flex items-center gap-1'>
          {Object.keys(colors).map(color => 
            <button key={color} onClick={() => handleColorChange(color)} className={'h-5 w-5 rounded' + (` bg-${color}-400 hover:bg-${color}-500`) + (selectedColor === color && " ring-[2px] ring-gray-300 border-2 border-white")}></button>
          )}
        </div>
      </div>

      {/* Delete node button */}
      <div >
        <button className='bg-white border hover:bg-gray-100 rounded px-2 py-1.5' onClick={handleDeleteNode}>
          <LuTrash />
        </button>
      </div>

    </div>
  )
}

export default NodeEdit;