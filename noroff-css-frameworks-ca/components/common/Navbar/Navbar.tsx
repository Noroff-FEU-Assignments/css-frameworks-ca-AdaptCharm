import { FC, useState } from 'react'
import { Router, useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import { Hamburger } from '@components/icons'

interface Props {
  href: string
  className?: string
  children: any
}

const ActiveLink: FC<Props> = ({ href, children }) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a
        className={cn(
          'inline-flex items-center h-[50px] md:h-[26px] pl-[51px] pr-[50px] md:px-4 text-foreground',
          {
            'bg-white rounded-[0.1875rem]':
              pathname.split('/')[1] === href.split('/')[1],
          }
        )}
      >
        {children}
      </a>
    </Link>
  )
}

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'News',
    href: '/news',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

const _Navbar: FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  Router.events.on('routeChangeStart', () => {
    setMobileMenu(false)
  })

  return (
    <div
      className={cn(
        'absolute md:relative z-10 w-full md:w-auto bg-accents-1 md:shadow-none',
        {
          'shadow-4': mobileMenu,
        }
      )}
    >
      <div className='max-w-7xl mx-auto pl-[1.9375rem] pr-[1.875rem] xl:pl-[4.6875rem] xl:pr-[4.0625rem] py-[14.5px] md:py-[17px]'>
        <div className='flex justify-between'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <span className='font-playfair font-bold italic text-primary text-xl'>
                The YAY Company
              </span>
            </div>
            <div className='hidden md:flex md:items-center sm:ml-[43px] sm:space-x-0.5'>
              {pages.map((page) => (
                <ActiveLink href={page.href} key={page.name}>
                  {page.name}
                </ActiveLink>
              ))}
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='w-full sm:max-w-xs'>
              <label htmlFor='search' className='sr-only'>
                Search
              </label>
              <div className='flex'>
                <input
                  id='search'
                  className='border-transparent w-[202px] bg-white rounded-tl rounded-bl py-[5px] pl-[19px] pr-3 text-[0.9375rem] placeholder-accents-5 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-0 focus:ring-primary focus:border-primary'
                  placeholder='Search'
                  type='search'
                />
                <button className='ml-[0.0625rem] mt-0.5 bg-primary text-white rounded-tr rounded-br min-w-[43px] px-2 ring-1 ring-primary'>
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-accents-5 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-primary border border-transparent hover:border-primary'
              onClick={() => {
                setMobileMenu(!mobileMenu)
              }}
            >
              <span className='sr-only'>Open main menu</span>
              <Hamburger />
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn('relative md:hidden pb-[43px]', {
          block: mobileMenu,
          hidden: !mobileMenu,
        })}
      >
        <div className='flex flex-col'>
          {pages.map((page) => (
            <ActiveLink href={page.href} key={page.name}>
              {page.name}
            </ActiveLink>
          ))}
        </div>
        <div className='mt-12 w-full'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <div className='flex pl-[31px] pr-[30px]'>
            <input
              id='search'
              name='search'
              className='border-transparent w-full bg-white rounded-tl rounded-bl py-2 pl-[19px] pr-3 text-[0.9375rem] placeholder-accents-5 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-0 focus:ring-primary focus:border-primary'
              placeholder='Search'
              type='search'
            />
            <button className='ml-[0.0625rem] mt-0.5 bg-primary text-white rounded-tr rounded-br min-w-[43px] px-2 ring-1 ring-primary'>
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default _Navbar
