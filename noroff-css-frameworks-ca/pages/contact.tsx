import { Layout } from '@components/common'
import { Envelope, Phone, MapMarker } from '@components/icons'

const Contact = () => {
  return (
    <div className='relative'>
      <div className='max-w-7xl mx-auto pl-[1.9375rem] pr-[1.875rem] xl:pl-[4.6875rem] xl:pr-[4.0625rem] pt-9 md:pt-10 pb-32'>
        <h1 className='hidden md:block font-playfair text-4xl text-primary'>
          Submit your details
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[43px] md:gap-x-[68px]'>
          <div className='row-start-2 md:row-start-1'>
            <h1 className='md:hidden font-playfair text-4xl text-primary'>
              Submit your details
            </h1>
            <div className='mt-7 bg-accents-1 rounded-[3px] shadow-3 p-[33px]'>
              <form action='#' method='post'>
                <div>
                  <label className='text-xl text-secondary'>Name</label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      id='name'
                      className='px-3 py-[15px] w-full rounded border-transparent focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary'
                    />
                  </div>
                </div>
                <div className='mt-[15px]'>
                  <label className='text-xl text-secondary'>Email</label>
                  <div className='mt-2'>
                    <input
                      type='email'
                      id='email'
                      className='px-3 py-[15px] w-full rounded border-transparent focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary'
                    />
                  </div>
                </div>
                <div className='mt-[15px]'>
                  <label className='text-xl text-secondary'>Website</label>
                  <div className='mt-2 flex rounded'>
                    <span className='inline-flex items-center px-[14.65px] border-transparent rounded-l border border-r-0 bg-accents-4 text-white text-[17px]'>
                      https://
                    </span>
                    <input
                      type='text'
                      id='website'
                      className='flex-1 min-w-0 block w-full px-3 py-[15px] border-transparent rounded-none rounded-r focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary'
                    />
                  </div>
                </div>
                <div className='mt-[15px]'>
                  <label className='text-xl text-secondary'>Message</label>
                  <div className='mt-2'>
                    <textarea
                      id='message'
                      rows={7}
                      className='px-3 py-[15px] w-full rounded border-transparent focus:outline-none focus:ring-0 focus:ring-primary focus:border-primary'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className='mt-4'>
                  <label className='inline-flex items-center'>
                    <input
                      type='checkbox'
                      className='w-[34px] h-[33px] bg-primary rounded border-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none text-primary transition ease-in-out duration-200'
                    />
                    <span className='text-secondary ml-3.5'>
                      Allow us to sell your personal details to whomever we want
                    </span>
                  </label>
                </div>
                <div className='mt-4'>
                  <button className='inline-flex items-center justify-center w-full h-[58px] bg-accents-5 text-white text-[22px] rounded'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='md:mt-[61px]'>
            <dl className='text-accents-5'>
              <div>
                <dt className='sr-only'>Email</dt>
                <dd className='flex items-center'>
                  <Envelope className='flex-shrink-0' aria-hidden='true' />
                  <span className='ml-[30px]'>hello@yay.com</span>
                </dd>
              </div>
              <div className='mt-9'>
                <dt className='sr-only'>Phone number</dt>
                <dd className='flex items-center'>
                  <Phone className='flex-shrink-0' aria-hidden='true' />
                  <span className='ml-7'>123 456 7890</span>
                </dd>
              </div>
              <div className='mt-9'>
                <dt className='sr-only'>Postal address</dt>
                <dd className='flex'>
                  <MapMarker className='flex-shrink-0' aria-hidden='true' />
                  <div className='ml-9'>
                    <p>123 Some Street</p>
                    <p>Somewhere</p>
                    <p>Some City</p>
                    <p>10000</p>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

Contact.Layout = Layout
