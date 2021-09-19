import { FC } from 'react'
import { Navbar, Footer } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='flex-shrink-0'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
