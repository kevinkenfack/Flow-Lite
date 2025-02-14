import { LuDownload,} from 'react-icons/lu'
import { toPng } from 'html-to-image';
import { getNodesBounds, getViewportForBounds, useReactFlow } from '@xyflow/react';

const Export = ({flowName}) => {

  // Extract getNodes function from React Flow context 
  const { getNodes } = useReactFlow();

  // Define the  image dimensions
  const imageWidth = 1280;
  const imageHeight = 800;

  // Function to handle the image download
  const handleDownloadImage = () => {
    const nodesBounds = getNodesBounds(getNodes());
    const viewport = getViewportForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2,
      0.2
    );

    toPng(document.querySelector('.react-flow__viewport'), {
      backgroundColor: '#f9fafb',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
      },
    }).then(triggerDownload);
  };

  // Trigger the actual download of the image
  const triggerDownload = (dataUrl) => {
    const a = document.createElement('a');
   
    a.setAttribute('download', flowName);
    a.setAttribute('href', dataUrl);
    a.click();
  }

  return (
    <button onClick={handleDownloadImage} className='bg-blue-500 text-white rounded px-2 py-1.5 font-semibold  text-smb flex items-center gap-1 hover:bg-blue-600 active:bg-blue-700'>
      <LuDownload /> PNG
    </button>
  )
}

export default Export