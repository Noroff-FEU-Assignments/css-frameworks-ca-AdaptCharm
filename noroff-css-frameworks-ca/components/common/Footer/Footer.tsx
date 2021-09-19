import { FC } from 'react'

import { Vimeo, Youtube } from '@components/icons'

const Footer: FC = () => {
  return (
    <div className='bg-white mt-auto'>
      <div className='max-w-7xl mx-auto pl-[1.9375rem] pr-[1.875rem] xl:pl-[4.6875rem] xl:pr-[4.0625rem] pt-[45px] pb-[26px] md:py-[11.5px]'>
        <div className='grid grid-cols-3 items-center gap-y-10'>
          <div className='col-start-1 col-end-4 md:col-auto'>
            <div className='flex justify-center md:justify-start gap-x-[22.5px]'>
              <Vimeo />
              <Youtube />
            </div>
          </div>
          <div className='col-start-1 md:col-start-2'>
            <div className='flex md:justify-center'>
              <span className='text-accents-5'>hello@yay.com</span>
            </div>
          </div>
          <div className='col-span-2 md:col-auto'>
            <div className='flex justify-end'>
              <span className='text-accents-5'>Copyright 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
