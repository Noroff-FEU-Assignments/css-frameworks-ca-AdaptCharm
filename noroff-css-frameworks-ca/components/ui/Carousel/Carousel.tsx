import React, { FC, useState, useRef, useEffect } from 'react'

import { useKeenSlider } from 'keen-slider/react'

import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

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
  const [isCurrent, setIsCurrent] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const postSliderRef = useRef<HTMLDivElement>(null)

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    loop: true,
    mounted: () => setIsActive(true),
    slideChanged(x) {
      setIsCurrent(x.details().relativeSlide)
    },
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
                  <a className='flex flex-col rounded-2xl transition ease-default duration-400 overflow-hidden'>
                    <div className='relative flex-shrink-0 w-full h-[462px]'>
                      <Image
                        src={s.image.url}
                        alt={s.image.alt}
                        layout='fill'
                        objectFit='cover'
                      />
                      <div className='absolute inset-0 bg-black opacity-50'></div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {slider && (
        <div className='hidden relative sm:flex sm:items-center sm:justify-center sm:mt-12'>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                aria-label='Position indicator'
                key={idx}
                className={cn('p-2 rounded-full focus:outline-none', {
                  'bg-black': isCurrent === idx,
                })}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
              >
                <div
                  className={cn('bg-black w-3 h-3 transition rounded-full', {
                    'bg-white': isCurrent === idx,
                  })}
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Carousel
