import { Layout } from '@components/common'
import { Pagination } from '@components/ui'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'Nunc porttitor vel',
    description: 'Nunc malesuada eget est fringilla dapibus.',
    image: {
      url: '/news/news-1.jpg',
      alt: 'News 1',
    },
  },
  {
    id: 2,
    title: 'Nunc porttitor vel',
    description: 'Nunc malesuada eget est fringilla dapibus.',
    image: {
      url: '/news/news-2.jpg',
      alt: 'News 2',
    },
  },
  {
    id: 3,
    title: 'Nunc porttitor vel',
    description: 'Nunc malesuada eget est fringilla dapibus.',
    image: {
      url: '/news/news-3.jpg',
      alt: 'News 3',
    },
  },
  {
    id: 4,
    title: 'Nunc porttitor vel',
    description: 'Nunc malesuada eget est fringilla dapibus.',
    image: {
      url: '/news/news-4.jpg',
      alt: 'News 4',
    },
  },
  {
    id: 5,
    title: 'Nunc porttitor vel',
    description: 'Nunc malesuada eget est fringilla dapibus.',
    image: {
      url: '/news/news-5.jpg',
      alt: 'News 5',
    },
  },
  {
    id: 6,
    title: 'Nunc porttitor vel',
    description: 'Nunc malesuada eget est fringilla dapibus.',
    image: {
      url: '/news/news-6.jpg',
      alt: 'News 6',
    },
  },
  {
    id: 7,
    title: 'Nunc porttitor vel',
    description: 'Nunc malesuada eget est fringilla dapibus.',
    image: {
      url: '/news/news-7.jpg',
      alt: 'News 7',
    },
  },
  {
    id: 8,
    title: 'Nunc porttitor vel',
    description: 'Nunc malesuada eget est fringilla dapibus.',
    image: {
      url: '/news/news-8.jpg',
      alt: 'News 8',
    },
  },
]

const _News = () => {
  return (
    <div className='relative'>
      <div className='max-w-7xl mx-auto pl-[1.9375rem] pr-[1.875rem] xl:pl-[4.6875rem] xl:pr-[4.0625rem] pt-9 md:pt-10 pb-32'>
        <h1 className='font-playfair text-4xl text-primary'>News</h1>

        <div className='mt-10'>
          <Pagination />
        </div>

        <div className='mt-10'>
          <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-6'>
            {articles.map((a, i) => (
              <div className='flex flex-col shadow-2' key={i}>
                <div className='relative flex-shrink-0 w-full h-[190px]'>
                  <Image
                    className='rounded-t-[10px]'
                    src={a.image.url}
                    alt={a.image.alt}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='flex flex-col rounded-b-[10px] bg-white p-5'>
                  <p className='text-xl'>{a.title}</p>
                  <p className='mt-3 text-lg text-secondary'>{a.description}</p>
                  <div className='mt-6'>
                    <button className='inline-flex items-center justify-center w-full h-[46px] bg-primary text-white uppercase rounded border-r-[32px] border-accents-5'>
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-14'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default _News

_News.Layout = Layout
