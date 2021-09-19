import { Layout } from '@components/common'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { Carousel } from '@components/ui'
import { Facebook, Twitter } from '@components/icons'

import { Tab, TabList, TabPanel, TabsProps } from 'react-tabs'
const Tabs = dynamic<TabsProps>(
  import('react-tabs').then((t) => t.Tabs),
  { ssr: false }
)

const tabs = {
  nav: [
    { name: 'First', disabled: false },
    { name: 'Second', disabled: false },
    { name: 'Third', disabled: false },
  ],

  body: [
    {
      image: {
        url: '/tab/tab-1.jpg',
        alt: 'Tab 1',
      },
      content:
        'Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.',
    },
    {
      image: {
        url: '/tab/tab-2.jpg',
        alt: 'Tab 2',
      },
      content:
        'Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.',
    },
    {
      image: {
        url: '/tab/tab-3.jpg',
        alt: 'Tab 3',
      },
      content:
        'Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.',
    },
  ],
}

const Home = () => {
  return (
    <>
      <Carousel />
      <div className='max-w-7xl mx-auto pl-[1.9375rem] pr-[1.875rem] xl:pl-[4.6875rem] xl:pr-[4.0625rem]'>
        <div className='py-9'>
          <h1 className='font-playfair text-primary text-[2.125rem] leading-[2.875rem]'>
            We do YAY things
          </h1>
          <p className='xl:max-w-[70.5rem] mt-3.5 text-secondary leading-6'>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
            a rutrum justo eros pretium libero. Nullam vel enim id mauris
            eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu
            sit amet, consectetur faucibus urna. Suspendisse massa diam,
            efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
            sollicitudin in luctus a, varius eget massa.
          </p>
        </div>
        <div className='pb-[176px] xl:pb-[248px]'>
          <Tabs className='pt-[5.25rem]'>
            <TabList>
              {tabs.nav.map((n, i) => (
                <Tab disabled={n.disabled} key={i}>
                  {n.name}
                </Tab>
              ))}
            </TabList>
            {tabs.body.map((b, i) => (
              <TabPanel className='shadow-1' key={i}>
                <div className='flex flex-col items-center md:items-stretch md:flex-row gap-x-[26px]'>
                  <h2 className='md:hidden mb-5 text-accents-5'>{b.content}</h2>
                  <div className='relative flex-shrink-0 w-[280px] h-[175px] md:w-[238px] md:h-[149px]'>
                    <Image
                      src={b.image.url}
                      alt={b.image.alt}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className='mt-7 md:mt-0 flex flex-col md:justify-between'>
                    <h2 className='hidden md:block text-accents-5'>
                      {b.content}
                    </h2>
                    <div className='flex gap-x-5'>
                      <Link href='#' scroll={false}>
                        <a className='text-foreground uppercase'>Share</a>
                      </Link>
                      <Facebook />
                      <Twitter />
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Home

Home.Layout = Layout
