import { useEffect, useState } from 'react'
import { LuTrash } from 'react-icons/lu'
import { colors } from '../colors'
import { MarkerType } from '@xyflow/react'

const EdgeEdit = ({edge, updateEdge, updateDataEdge, deleteElements}) => {

  // Local state for holding edge properties that can be edited
  const [animated, setAnimated] = useState(false);
  const [label, setLabel] =useState("");
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [pathStyle, setPathStyle] = useState("smooth");
  const [markerEnd, setMarkerEnd] = useState(false);
  const [markerStart, setMarkerStart] = useState(false);
  const [animationReverse, setAnimationReverse] = useState(false);

  const handleDeleteEdge = () => {
    deleteElements({edges: [{id: edge.id}]});
  }

  const handleAnimatedChange = () => {
    const updatedAnimate = !animated;
    setAnimated(updatedAnimate);
    updateEdge(edge.id, {animated: updatedAnimate});
  }

  const handleAnimatedReverseChange = (reverse) => {
    setAnimationReverse(reverse);
    updateDataEdge(edge.id, {animationReverse: reverse});
  }

  const handleLabelChange = (e) => {
    const value = e.target.value;
    setLabel(value);
    updateEdge(edge.id, {label: value});
  }

  const handlePathStyle = (s) => {
    setPathStyle(s);
    updateDataEdge(edge.id, {pathStyle: s});
  }

  const handleStrokeWidthChange = (e) => {
    const width = e.target.value;
    setStrokeWidth(width);
    updateDataEdge(edge.id, {strokeWidth: width});
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
    updateDataEdge(edge.id,  {color: color});
    if(markerStart) updateEdge(edge.id, {markerStart: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: colors[color].stroke}});
    if(markerEnd) updateEdge(edge.id, {markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: colors[color].stroke}});
  }

  const handleStartMark = (marker) => {
    if(marker) {
      updateEdge(edge.id, {markerStart: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: colors[selectedColor].stroke}});
    } else {
      updateEdge(edge.id, {markerStart: null});
    }
    setMarkerStart(marker)
  }

  const handleEndMark = (marker) => {
    if(marker) {
      updateEdge(edge.id, {markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: colors[selectedColor].stroke}});
    } else {
      updateEdge(edge.id, {markerEnd: null});
    }
    setMarkerEnd(marker)
  }

  // Effect hook to initialize edge data
  useEffect(() => {

    setAnimated(edge.animated);
    if(edge.data) {
      setStrokeWidth(edge.data.strokeWidth || 1);
      setSelectedColor(edge.data.color);
      setPathStyle(edge.data.pathStyle || "smooth");
      setMarkerEnd(edge.markerEnd );
      setMarkerStart(edge.markerStart);
      setAnimationReverse(edge.data.animationReverse);
    }
    setLabel(edge.label || "");

  }, [edge])

  return (
    <div className='flex flex-col gap-4 p-4'>

      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900">Label</label>
        <input type="text" value={label} onChange={handleLabelChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
      </div>

      <div className='flex gap-5'>
        <div className='w-2/5'>
          <label className="block text-sm font-medium text-gray-900 ">Animation</label>
          <div className="relative mt-4 ml-1">
            <input checked={animated} onChange={handleAnimatedChange} id="switch-component-blue" type="checkbox" className="peer appearance-none w-11 h-4 bg-slate-100 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300" />
            <label htmlFor="switch-component-blue" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-blue-600 cursor-pointer">
            </label>
          </div>
        </div>
        <div>
          <label className={"block mb-2 text-sm font-medium " + (animated ? 'text-gray-900' : 'text-gray-400')}>Direction</label>
          <div className='flex items-center gap-1'>
            <button onClick={() => handleAnimatedReverseChange(true)} className={'flex items-center justify-center p-2 rounded-md ' + (animationReverse && animated && 'bg-gray-100')}> 
              <svg width={29} height={19} className={animated ? 'fill-black stroke-black' : 'fill-gray-200 stroke-gray-200'}>
                <path d="M 28 10 L 3 10" strokeWidth={1.2} strokeDasharray={5} className={'' + animated && 'animation'}></path>
                <path d="M8 10 8 8 8 6C8.001 4.76 2.862 9.397 2.978 10.041 2.862 10.619 7.981 15.193 8 14L8 10" strokeWidth={1.2}></path>
              </svg>
            </button>
            <button onClick={() => handleAnimatedReverseChange(false)} className={'flex items-center justify-center p-2 rounded-md ' + (!animationReverse && animated  && 'bg-gray-100')}> 
              <svg width={29} height={19} className={'rotate-180 ' + (animated ? 'fill-black stroke-black' : 'fill-gray-200 stroke-gray-200')}>
                <path d="M 28 10 L 3 10" className={'' + animated && 'animation'} strokeWidth={1.2} strokeDasharray={5}></path>
                <path d="M8 10 8 8 8 6C8.001 4.76 2.862 9.397 2.978 10.041 2.862 10.619 7.981 15.193 8 14L8 10" strokeWidth={1.2}></path>
              </svg>  
            </button>
          </div>
        </div>
      </div>

      <div className='flex gap-5'>
        <div  className='w-2/5'>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Start marker</label>
          <div className='flex items-center gap-1'>
            <button onClick={() => handleStartMark(true)} className={'flex items-center justify-center p-2 rounded-md ' + (markerStart && 'bg-gray-100')}> 
              <svg width={19} height={19}>
                <path d="M 18 10 L 8 10 L 8 6 C 8.001 4.76 2.862 9.397 2.978 10.041 C 2.862 10.619 7.981 15.193 8 14 L 8 10" strokeWidth={1.2} className='fill-black stroke-black'></path>
              </svg>
            </button>
            <button onClick={() => handleStartMark(false)} className={'flex items-center justify-center p-2 rounded-md ' + (!markerStart && 'bg-gray-100')}> 
            <svg width={19} height={19}>
                <path d="M 18 10 L 3 10" className='fill-black stroke-black' strokeWidth={1.2}></path>
              </svg>  
            </button>
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">End marker</label>
          <div className='flex items-center gap-1'>
            <button onClick={() => handleEndMark(false)} className={'flex items-center justify-center p-2 rounded-md ' + (!markerEnd && 'bg-gray-100')}> 
            <svg width={19} height={19}>
                <path d="M 18 10 L 3 10" className='fill-black stroke-black' strokeWidth={1.2}></path>
              </svg>  
            </button>
            <button onClick={() => handleEndMark(true)} className={'flex items-center justify-center p-2 rounded-md ' + (markerEnd && 'bg-gray-100')}> 
              <svg width={19} height={19} className='rotate-180'>
                <path d="M 18 10 L 8 10 L 8 6 C 8.001 4.76 2.862 9.397 2.978 10.041 C 2.862 10.619 7.981 15.193 8 14 L 8 10" strokeWidth={1.2} className='fill-black stroke-black'></path>
              </svg>
            </button>
          </div>
        </div>
        
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">Line style</label>
        <div className='flex items-center gap-1'>
          <button onClick={() => handlePathStyle("straight")} className={'flex items-center justify-center p-2 rounded-md ' + (pathStyle === "straight" && 'bg-gray-100')}> 
            <svg width={19} height={19}>
              <path d="M 3 3 A 1 1 0 0 0 6 6 M 6 6 A 1 1 0 0 0 3 3 M 6 6 L 13 13 A 1 1 0 0 0 16 16 A 1 1 0 0 0 13 13" fill='none' className='stroke-black'></path>
            </svg>
          </button>
          <button onClick={() => handlePathStyle("smooth")} className={'flex items-center justify-center p-2 rounded-md ' + (pathStyle === "smooth" && 'bg-gray-100')}> 
          <svg width={19} height={19}>
              <path d="M 5 5 A 1 1 0 0 0 1 5 A 1 1 0 0 0 5 5 Q 12 5 12 12 A 1 1 0 0 0 12 16 A 1 1 0 0 0 12 12" fill='none' className='stroke-black'></path>
            </svg>  
          </button>
          <button onClick={() => handlePathStyle("step")} className={'flex items-center justify-center p-2 rounded-md ' + (pathStyle === "step" && 'bg-gray-100')}> 
          <svg width={19} height={19}>
              <path d="M 4 6 A 1 1 0 0 0 4 2 A 1 1 0 0 0 4 6 C 4 12 12 6 12 12 A 1 1 0 0 0 12 16 A 1 1 0 0 0 12 12" fill='none' className='stroke-black'></path>
            </svg>    
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 ">Stroke width</label>
        <input id="minmax-range" type="range" min="1" max="3" step={0.1} value={strokeWidth} onChange={handleStrokeWidthChange} className=" accent-blue-600 w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer [&::-moz-range-thumb]:border-blue-600" />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">Color</label>
        <div className='flex items-center gap-1'>
          {Object.keys(colors).map(color => 
            <button key={color} onClick={() => handleColorChange(color)} className={'h-5 w-5 rounded ' + (` bg-${color}-400 hover:bg-${color}-500 `) + (selectedColor === color && " ring-[2px] ring-gray-300 border-2 border-white")}></button>
          )}
        </div>
      </div>
      <div>
        <button className='bg-white border hover:bg-gray-100 rounded px-2 py-1.5' onClick={handleDeleteEdge}>
          <LuTrash />
        </button>
      </div>
     
    </div>
  )
}

export default EdgeEdit;