import { FC } from 'react'

interface Props {
  className?: string
}

const Pagination: FC<Props> = () => {
  return (
    <div className='flex'>
      <button className='w-[53px] h-[48px] bg-primary text-white rounded-tl rounded-bl'>
        1
      </button>
      <button className='w-[53px] h-[48px] bg-white text-primary border border-l-0 border-primary'>
        2
      </button>
      <button className='w-[53px] h-[48px] bg-white text-primary border border-l-0 border-primary'>
        3
      </button>
      <button className='w-[53px] h-[48px] bg-white text-primary rounded-tr rounded-br border-l-0 border border-primary'>
        4
      </button>
    </div>
  )
}

export default Pagination
