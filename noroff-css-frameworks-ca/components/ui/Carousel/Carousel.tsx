import React, { FC, useState, useRef, useEffect } from 'react'

import { useKeenSlider } from 'keen-slider/react'

import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: {
      url: '/carousel/carousel-1.jpg',
      alt: 'Carousel 1',
    },
  },
  {
    id: 2,
    image: {
      url: '/carousel/carousel-2.jpg',
      alt: 'Carousel 2',
    },
  },
  {
    id: 3,
    image: {
      url: '/carousel/carousel-3.jpg',
      alt: 'Carousel 3',
    },
  },
]

const Carousel: FC = () => {
  const [isActive, setIsActive] = useState(false)
  const postSliderRef = useRef<HTMLDivElement>(null)

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    loop: true,
    mounted: () => setIsActive(true),
  })

  useEffect(() => {
    const prevNavigation = (evt: TouchEvent) => {
      const touchXPos = evt.touches[0].pageX
      const touchXRadius = evt.touches[0].radiusX || 0

      if (
        touchXPos - touchXRadius < 10 ||
        touchXPos + touchXRadius > window.innerWidth - 10
      ) {
        evt.preventDefault()
      }
    }

    postSliderRef.current!.addEventListener('touchstart', prevNavigation)

    return () => {
      if (postSliderRef.current) {
        postSliderRef.current!.removeEventListener('touchstart', prevNavigation)
      }
    }
  }, [])

  return (
    <div className='relative'>
      <div className='block'>
        <div className='relative overflow-y-hidden' ref={postSliderRef}>
          <div
            ref={ref}
            className='keen-slider h-full transition-opacity duration-150'
            style={{ opacity: isActive ? 1 : 0 }}
          >
            {slides.map((s) => (
              <div className='keen-slider__slide' key={s.id}>
                <Link href='#' scroll={false}>
                  <a className='flex flex-col transition ease-default duration-400 overflow-hidden'>
                    <div className='relative flex-shrink-0 w-full h-[462px]'>
                      <Image
                        src={s.image.url}
                        alt={s.image.alt}
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {slider && (
        <div className='absolute inset-x-0 bottom-8 md:bottom-[31px] flex justify-center space-x-4'>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                aria-label='Position indicator'
                key={idx}
                className='w-[30px] h-[30px] bg-primary odd:bg-white rounded-sm shadow'
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Carousel
