import '@assets/main.scss'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'

// ! https://giters.com/react-bootstrap/react-bootstrap/issues/6026#issuecomment-917044627
import { SSRProvider } from '@restart/ui/ssr'

import { Head } from '@components/common'

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <SSRProvider>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
