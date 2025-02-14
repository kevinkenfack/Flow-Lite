import { LuArrowLeft, LuArrowRight, LuCheckCheck, LuCross, LuCrosshair, LuDelete, LuDollarSign, LuDownload, LuFile, LuFileArchive, LuFileImage, LuFileText, LuHand, LuImage, LuImagePlus, LuMousePointerClick, LuPictureInPicture, LuSearch, LuStar, LuStarOff, LuTrash, LuTrash2, LuUser, LuUser2, LuVideo } from 'react-icons/lu';

export const Navigation = () => {
  return(
    <div className='bg-gray-100 p-1 py-1 flex justify-between items-center rounded-sm'>
      <div className='h-1 bg-gray-300 w-3 rounded-sm'></div>
      <div className='flex gap-0.5'>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
      </div>
    </div>
  )
}

export const Slideshow = ({height = 20}) => {
  return(
    <div className='bg-gray-100 rounded-sm px-1'>
      <div className='flex items-center justify-between ' style={{height: height}}>
        <div>
          <LuArrowLeft className='text-gray-400'/>
        </div>
        <div>
        </div>
        <div>
        <LuArrowRight className='text-gray-400'/>
        </div>
      </div>
      <div className='flex items-center justify-center gap-1 mb-1'>
        <div className='h-1 w-1 bg-gray-400 rounded-full'></div>
        <div className='h-1 w-1 bg-gray-200 rounded-full'></div>
        <div className='h-1 w-1 bg-gray-200 rounded-full'></div>
      </div>
    </div>
  )

}

export const Grid = ({children}) => {
  return(
    <div className='grid grid-cols-3 gap-1'>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>{children}</div>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>{children}</div>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>{children}</div>
    </div>
  )
}

export const FilesSection = () => {
  return(
    <>
      <div className='py-1 bg-white rounded flex flex-col'>
        <div className='space-y-0.5'>
          <div className='h-0.5 bg-gray-300 w-10 rounded-sm'></div>
          <div className='h-0.5 bg-gray-100 w-5 rounded-sm'></div>
        </div>
      </div>    
    <div className='grid grid-cols-3 gap-1'>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>
        <LuFileText />
      </div>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>
        <LuFileText />
      </div>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>
        <LuFileText />
      </div>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>
        <LuFileText />
      </div>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>
        <LuFileText />
      </div>
      <div className='bg-gray-50 text-gray-400 flex items-center justify-center rounded p-1'>
        <LuFileText />
      </div>
    </div>
    </>
  )
}

export const Stars = () => {
  return(
    <div className='flex items-center justify-center gap-1 py-1.5'>
      <LuStar className='fill-gray-200 text-gray-200' />
      <LuStar className='fill-gray-200 text-gray-200' />
      <LuStar className='fill-gray-200 text-gray-200' />
      <LuStar className='fill-gray-100 text-gray-100' />
    </div>
  )
}

export const Charts = () => {
  return(
    <>
    <div className='grid grid-cols-3 gap-1'>
      <div className='space-y-0.5 py-1 pl-1'>
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-px bg-gray-100 w-2/3 rounded-sm'></div>
        <div className='h-px bg-gray-100 w-2/3 rounded-sm'></div>
      </div>
      <div className='p-0.5'>
        <svg className='w-[15px] h-3'>
          <polyline points='0 11, 4 4, 8 7, 10 5, 12 6, 15 0' className='stroke-gray-200 fill-none' strokeWidth={1} />
        </svg>
      </div>
      <div className='bg-gray-50 p-0.5 px-1 rounded-sm'>
        <svg className='w-[15px] h-3'>
          <polyline points='0 3, 4 2, 8 7, 10 5, 12 10, 15 7' strokeLinecap='round' className='stroke-gray-200 fill-none' strokeWidth={1} />
        </svg>
      </div>
    </div>
    <div className='bg-gray-50 rounded p-2 flex gap-1.5 items-end'> 
      <div className='w-full h-3 bg-gray-300 rounded-sm'></div>
      <div className='w-full h-5 bg-gray-300 rounded-sm'></div>
      <div className='w-full h-6 bg-gray-300 rounded-sm'></div>
      <div className='w-full h-2 bg-gray-300 rounded-sm'></div>
      <div className='w-full h-5 bg-gray-300 rounded-sm'></div>
    </div>
    </>
  )
}

export const CreditCard = () => {
  return(
    <div className='py-0.5'>
      <div className='border border-gray-200 rounded bg-gray-100 mx-1'>
        <div className='bg-white border-y mt-1 py-px px-1'>
          <LuDollarSign className='text-gray-300' size={8}/>
        </div>
        <div className='px-1 mt-1'>
          <div className='bg-white border rounded-sm h-1 w-full'></div>
        </div>
        <div className='p-1'>
          <div className='flex gap-1 '>
            <div className='bg-white border rounded-sm h-1.5 w-full'></div>
            <div className='bg-white border rounded-sm h-1.5 w-full'></div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center pt-1'>
        <div className='h-1 bg-blue-500 w-6 rounded-sm'></div>
      </div>
      
    </div>
  )
}

export const ShoppingCart = () => {
  return(
    <>
      <div className='px-1 py-px'>
        <div className='flex items-start justify-center gap-1'>
          <div className='bg-gray-100 w-4 h-3 rounded-sm'>
          </div>
          <div className='w-full space-y-0.5 pt-0.5'>
            <div className='h-1 bg-gray-200 w-1/2 rounded-sm'></div>
            <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
            <div className='h-px bg-gray-100 w-2/3 rounded-sm'></div>
          </div>
          <div>
            <LuTrash2 size={7} className='text-gray-400'/>
          </div>
        </div>
      </div>
      <div className='px-1 py-px'>
        <div className='flex items-start justify-center gap-1'>
          <div className='bg-gray-100 w-4 h-3 rounded-sm'>
          </div>
          <div className='w-full space-y-0.5 pt-0.5'>
            <div className='h-1 bg-gray-200 w-1/2 rounded-sm'></div>
            <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
            <div className='h-px bg-gray-100 w-2/3 rounded-sm'></div>
          </div>
          <div>
            <LuTrash2 size={7} className='text-gray-400'/>
          </div>
        </div>
      </div>
      <div className='px-1 py-px'>
        <div className='flex items-start justify-center gap-1'>
          <div className='bg-gray-100 w-4 h-3 rounded-sm'>
          </div>
          <div className='w-full space-y-0.5 pt-0.5'>
            <div className='h-1 bg-gray-200 w-1/2 rounded-sm'></div>
            <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
            <div className='h-px bg-gray-100 w-2/3 rounded-sm'></div>
          </div>
          <div>
            <LuTrash2 size={7} className='text-gray-400'/>
          </div>
        </div>
      </div>
    </>
  )
}

export const ProductDetail = () => {
  return(
    <div className='grid grid-cols-2'>
      <div className='flex flex-col justify-center items-center bg-gray-50 rounded py-1'>
        <LuImage size={16} className='text-gray-300'/>
        <div className='flex gap-0.5 items-center justify-center py-0.5'>
          <div className='h-0.5 w-0.5 rounded-full bg-gray-200'></div>
          <div className='h-0.5 w-0.5 rounded-full bg-gray-200'></div>
          <div className='h-0.5 w-0.5 rounded-full bg-gray-200'></div>
        </div>
      </div>
      <div className='flex flex-col p-1.5 gap-0.5'>
       <div className='h-1 bg-gray-200 w-2 rounded-sm'></div>
       <div className='h-1 bg-gray-300 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-2/3 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-2/3 rounded-sm'></div>
        <div className='h-0.5 bg-gray-50 w-1/2 rounded-sm'></div>
        <div className='h-1 bg-blue-500 w-5 rounded-sm'></div>
      </div>
      
    </div>
  )
}

export const ProductList = () => {
  return(
    <div className='grid grid-cols-3 gap-0.5 w-[72px] p-0.5'>
      <div className='flex flex-col gap-px  rounded-sm p-px border-gray-100'>
        <LuImage className='text-gray-400' size={14} />
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
      </div>
      <div className='flex flex-col gap-px  rounded-sm p-px border-gray-100'>
        <LuImage className='text-gray-400' size={14} />
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
      </div>
      <div className='flex flex-col gap-px  rounded-sm p-px border-gray-100'>
        <LuImage className='text-gray-400' size={14} />
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
      </div>
      <div className='flex flex-col gap-px  rounded-sm p-px border-gray-100'>
        <LuImage className='text-gray-400' size={14} />
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
      </div>
      <div className='flex flex-col gap-px  rounded-sm p-px border-gray-100'>
        <LuImage className='text-gray-400' size={14} />
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
      </div>
      <div className='flex flex-col gap-px  rounded-sm p-px border-gray-100'>
        <LuImage className='text-gray-400' size={14} />
        <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
        <div className='h-px bg-gray-100 w-1/2 rounded-sm'></div>
      </div>
    </div>
  )
}

export const Table = () => {
  return(
    <>
    <div className='flex items-center justify-between px-1 py-0.5'>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-3 rounded-sm'></div>
    </div>
    <div className='border rounded w-[72px]'>
      <div className='flex items-s justify-stretch gap-1 px-1 py-1 '>
        <div className='h-0.5 bg-gray-300 w-5 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-10 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-12 rounded-sm'></div>
      </div>

      <div className='flex items-s justify-stretch gap-1 px-1 py-px border-y '>
        <div className='h-0.5 bg-gray-100 w-5 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-10 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-12 rounded-sm'></div>
      </div>
      <div className='flex items-s justify-stretch gap-1 px-1 py-px border-b '>
        <div className='h-0.5 bg-gray-100 w-5 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-10 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-12 rounded-sm'></div>
      </div>
      <div className='flex items-s justify-stretch gap-1 px-1 py-px border-b '>
        <div className='h-0.5 bg-gray-100 w-5 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-10 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-12 rounded-sm'></div>
      </div>
      <div className='flex items-s justify-stretch gap-1 px-1 py-px border-b '>
        <div className='h-0.5 bg-gray-100 w-5 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-10 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-12 rounded-sm'></div>
      </div>
      <div className='flex items-s justify-stretch gap-1 px-1 py-px'>
        <div className='h-0.5 bg-gray-100 w-5 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-10 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-12 rounded-sm'></div>
      </div>
    </div>
    </>
  )
}

export const Comments = () => {
  return(
    <div className='px-2 py-2  flex flex-col gap-1 items-center justify-center rounded'>
      <div className='w-full flex items-center gap-0.5'>
        <div className='w-3'>
          <LuUser className='text-gray-400' size={9}/>
        </div>
        <div className='h-2 flex-1 bg-gray-100 rounded-sm'>
        </div>
      </div>
      <div className='w-full flex items-center gap-0.5'>
        <div className='h-2 flex-1 bg-gray-100 rounded-sm'>
        </div>
        <div className='w-3'>
          <LuUser className='text-gray-400' size={9}/>
        </div>
      </div>
      <div className='w-full flex items-center gap-0.5'>
        <div className='w-3'>
          <LuUser className='text-gray-400' size={9}/>
        </div>
        <div className='h-4 flex-1 bg-gray-100 rounded-sm'>
        </div>
      </div>
      
    </div>
  )
}

export const User = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-0.5 items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px] mb-0.5'><LuUser2 className='text-gray-400' size={14}/></span>
      <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
    </div>
  )
}

export const ThankYou = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-0.5 items-center justify-center rounded'>
      <LuCheckCheck className='text-blue-500 mb-0.5' size={14}/>
      <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-8 rounded-sm'></div>
    </div>
  )
}

export const Frame = () => {
  return(
    <div className='h-10 bg-gray-100 flex items-center justify-center rounded'><LuImage className='text-gray-400' size={14} /></div>
  )
}

export const SignIn = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-semibold text-gray-600 text-[6px]'>Sign In</span>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-blue-500 w-5 rounded-sm'></div>
    </div>
  )
}

export const Register = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-semibold text-gray-600 text-[6px]'>Register</span>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-blue-500 w-5 rounded-sm'></div>
    </div>
  )
}

export const Form = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-semibold text-gray-600 text-[6px]'>Form</span>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-blue-500 w-8 rounded-sm'></div>
    </div>
  )
}

export const Survay = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-semibold text-gray-600 text-[6px]'>Question</span>
      <div className='flex flex-col gap-1'>
        <div className='h-1 bg-white w-10 rounded-sm'></div>
        <div className='h-1 bg-white w-10 rounded-sm'></div>
        <div className='h-3 bg-white w-10 rounded-sm'></div>
      </div>
      
      <div className='h-1 bg-blue-500 w-6 rounded-sm'></div>
    </div>
  )
}

export const Video = () => {
  return(
    <div className='h-10 bg-gray-100 flex items-center justify-center rounded'><LuVideo className='text-gray-400' size={14} /></div>
  )
}

export const Download = () => {
  return(

    <div className='py-2 bg-gray-100 flex flex-col gap-px items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px] mb-1'><LuDownload className='text-gray-400' size={14} /></span>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-4 rounded-sm'></div>
    </div>
  )
}

export const Calendar = () => {
  return(
    <div className='p-2.5 bg-gray-100 rounded'>
      <div className='font-semibold px-1 py-0.5 bg-gray-200 text-gray-600 text-center text-[4px] rounded-t-sm'>Calendar</div>
      <div className='flex flex-col gap-px'>
        <div className='h-1.5 flex items-stretch justify-items-stretch gap-px'>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
        </div>
        <div className='h-1.5 flex items-stretch justify-items-stretch gap-px'>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
        </div>
        <div className='h-1.5 flex items-stretch justify-items-stretch gap-px'>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
        </div>
        <div className='h-1.5 flex items-stretch justify-items-stretch gap-px'>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-gray-300 flex-1'></div>
          <div className='bg-gray-300 flex-1'></div>
        </div>
      </div>
    </div>
  )
}

export const HeroText = () => {
  return(
    <div className='flex flex-col items-center justify-center pt-2 gap-0.5'>
      <div className='h-1 bg-gray-200 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-100 w-6 rounded-sm'></div>
      <div className='h-0.5 bg-gray-100 w-6 rounded-sm'></div>
    </div>
  )
}

export const TextBlock = () => {
  return(
    <div className='h-8 bg-gray-100 flex items-center justify-center rounded'>
      <span className='font-bold text-gray-400 text-[8px]'>Section</span>
    </div>
  )
}

export const BigTextBlock = ({text}) => {
  return(
    <div className='h-12 bg-gray-100 flex flex-col items-center justify-center rounded'>
      <span className='font-bold text-gray-400 text-[18px]'>{text}</span>
    </div>
  )
}

export const Hero = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px]'><LuImage className='text-gray-400' size={14} /></span>
      <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
    </div>
  )
}



export const Hero2 = () => {
  return(
    <div className='py-2 bg-white flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px]'><LuImage className='text-gray-400' size={14} /></span>
      <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
    </div>
  )
}

export const Hero3 = () => {
  return(
    <div className='p-2 py-3 bg-gray-100 flex gap-1 items-center justify-between rounded'>
      <div className='flex flex-col gap-1'>
        <div className='h-1 bg-gray-300 w-7 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      </div>
      <div>
        <LuImage className='text-gray-400' size={16} />
      </div>
    </div>
  )
}

export const Hero4 = () => {
  return(
    <>
    <div className='py-2 bg-white flex gap-1 items-center justify-center rounded'>
      <div>
        <span className='font-bold text-gray-600'><LuImage className='text-gray-400' size={20} /></span>
      </div>
      <div className='space-y-0.5'>
        <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      </div>
    </div>
    <div className='flex gap-1 my-1'>
      <div className='h-1 bg-gray-300 w-full rounded-sm'></div>
      <div className='h-1 bg-gray-300 w-full rounded-sm'></div>
    </div>
    </>
  )
}

export const Hero5 = () => {
  return(
    <div className='my-1.5'>
      <div className='py-1 mb-1 bg-white rounded flex flex-col items-center'>
        <div className='space-y-0.5'>
          <div className='h-1 mx-auto bg-gray-300 w-8 rounded-sm'></div>
          <div className='h-0.5 mx-auto bg-gray-300 w-6 rounded-sm'></div>
        </div>
      </div>
      <div className='flex gap-0.5 items-center justify-center'>
        <LuImage className='text-gray-400 -rotate-[20deg] pt-0.5' size={14} />
        <LuImage className='text-gray-400 -rotate-[14deg]' size={14} />
        <LuImage className='text-gray-400 rotate-[14deg]' size={14} />
        <LuImage className='text-gray-400 rotate-[20deg] pt-0.5' size={14} />
      </div>
    </div>
  )
}

export const CallToAction = () => {
  return(
    <div className='py-2 bg-white flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px]'><LuMousePointerClick className='text-gray-400' size={14} /></span>
      <div className='h-1 bg-blue-500 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
    </div>
  )
}

export const Article = () => {
  return(
    <div className='flex items-start gap-1'>
      <div className='bg-gray-100 w-8 h-4 rounded'>
      </div>
      <div className='w-full space-y-0.5 pt-0.5'>
        <div className='h-1 bg-gray-200 w-1/2 rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
        <div className='h-0.5 bg-gray-100 w-full rounded-sm'></div>
      </div>
    </div>
  ) 
}

export const SearchForm = () => {
  return(
    <div>
      <div className='flex gap-1'>
        <div className='bg-gray-100 p-1 rounded-sm'>
          <LuSearch className='' size={8}/>
        </div>
        <div className='bg-gray-50 pl-1 rounded-sm w-full text-left text-gray-400'>
          ......
        </div>
      </div>
      <div className='mt-1 p-1 bg-gray-100 rounded-sm'>
        <div className='flex flex-col gap-px'>
          <div className='h-0.5 bg-gray-300 w-2/3 rounded-sm'></div>
          <div className='h-px bg-gray-200 w-1/2 rounded-sm'></div>
        </div>
      </div>
      <div className='mt-1 p-1 bg-gray-100 rounded-sm'>
        <div className='flex flex-col gap-px'>
          <div className='h-0.5 bg-gray-300 w-2/3 rounded-sm'></div>
          <div className='h-px bg-gray-200 w-1/2 rounded-sm'></div>
        </div>
      </div>
    </div>
  )
}

export const ContactForm = () => {
  return(
    <div className='flex flex-col p-0.5 w-[70px]'>
      <div className='flex gap-1'>
        <div className='w-8 space-y-0.5 p-1'>
          <div className='h-0.5  bg-gray-300 w-7 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-5 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-5 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-5 rounded-sm'></div>
        </div>
        <svg className='h-6 bg-gray-200'>
          <line x1={0} y1={0} x2={10} y2={40} strokeWidth={2} className='stroke-white' />
          <line x1={0} y1={30} x2={80} y2={20} strokeWidth={2} className='stroke-white' />
          <line x1={0} y1={40} x2={80} y2={30} strokeWidth={2} className='stroke-white' />
          <line x1={40} y1={0} x2={50} y2={40} strokeWidth={2} className='stroke-white' />
          <line x1={4} y1={20} x2={20} y2={17} strokeWidth={1} className='stroke-white' />
          <line x1={20} y1={17} x2={15} y2={0} strokeWidth={1} className='stroke-white' />
          <line x1={3} y1={10} x2={16} y2={7} strokeWidth={1} className='stroke-white' />
          <line x1={60} y1={56} x2={70} y2={0} strokeWidth={3} className='stroke-white' />
          <path d="m18 16-4-8c-.008-6.304 7.964-6.268 8 0l-4 8" className='fill-gray-400'/>
        </svg>
      </div>
      <div className='space-y-0.5 py-1'>
          <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
      </div>
      <div className='flex gap-2 w-full '>
        <div className='w-full space-y-0.5'>
            <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
            <div className='h-px bg-gray-200 w-full rounded-sm'></div>
            <div className='h-px bg-gray-200 w-full rounded-sm'></div>
        </div>
        <div className='w-full space-y-0.5'>
            <div className='h-0.5 bg-gray-200 w-full rounded-sm'></div>
            <div className='h-px bg-gray-200 w-full rounded-sm'></div>
            <div className='h-px bg-gray-200 w-full rounded-sm'></div>
        </div>
      </div>
    </div>
  )
}


export const Pricing = () => {
  return(
    <div className='mx-1.5 mb-1'>
      <div className='py-1 mb-1 bg-white rounded flex flex-col items-center'>
        <div className='space-y-0.5'>
          <div className='h-0.5 mx-auto bg-gray-300 w-10 rounded-sm'></div>
          <div className='h-px mx-auto bg-gray-300 w-5 rounded-sm'></div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-1'>
        <div className='flex flex-col gap-0.5 w-full'>
          <div className='bg-gray-200 rounded-t h-2'></div>
          <div className='bg-gray-100 h-5 flex flex-col p-1 rounded-b'>
            <div className='bg-gray-300 w-full h-1 mt-auto'></div>
          </div>
        </div>
        <div className='flex flex-col gap-0.5 w-full'>
          <div className='bg-gray-400 rounded-t h-2'></div>
          <div className='bg-gray-100 h-5 flex flex-col p-1 rounded-b'>
            <div className='bg-gray-300 w-full h-1 mt-auto'></div>
          </div>
        </div>
        <div className='flex flex-col gap-0.5 w-full'>
          <div className='bg-gray-200 rounded-t h-2'></div>
          <div className='bg-gray-100 h-5 flex flex-col p-1 rounded-b'>
            <div className='bg-gray-300 w-full h-1 mt-auto'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Map = () => {
  return(
    <div className='bg-white flex flex-col gap-1 items-center justify-center rounded'>
      <svg className='w-[4.5rem] h-10 bg-gray-200'>
        <line x1={0} y1={0} x2={10} y2={40} strokeWidth={2} className='stroke-white' />
        <line x1={0} y1={30} x2={80} y2={20} strokeWidth={2} className='stroke-white' />
        <line x1={0} y1={40} x2={80} y2={30} strokeWidth={2} className='stroke-white' />
        <line x1={40} y1={0} x2={50} y2={40} strokeWidth={2} className='stroke-white' />
        <line x1={4} y1={20} x2={20} y2={17} strokeWidth={1} className='stroke-white' />
        <line x1={20} y1={17} x2={15} y2={0} strokeWidth={1} className='stroke-white' />
        <line x1={3} y1={10} x2={16} y2={7} strokeWidth={1} className='stroke-white' />
        <line x1={60} y1={56} x2={70} y2={0} strokeWidth={3} className='stroke-white' />
        <path d="m53 24-4-8c-.008-6.304 7.964-6.268 8 0l-4 8" className='fill-gray-400'/>
      </svg>
    </div>
  )
}


export const Footer = () => {
  return(
    <div className='bg-gray-100 p-1 py-1.5 flex justify-between items-center rounded-sm'>
      <div className='flex gap-0.5 flex-col'>
        <div className='h-0.5 bg-gray-300 w-4 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-2 rounded-sm'></div>
      </div>
      <div className='flex gap-0.5'>
      <div className='flex gap-px flex-col'>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2.5 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-1.5 rounded-sm'></div>
        </div>
        <div className='flex gap-px flex-col'>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2.5 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-1.5 rounded-sm'></div>
        </div>
        <div className='flex gap-px flex-col'>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2.5 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-1.5 rounded-sm'></div>
        </div>
      </div>
    </div>
  )
}