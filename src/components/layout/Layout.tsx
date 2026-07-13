import type { ReactNode } from 'react'
import { SkipLink } from '@components/layout/SkipLink'
import { Navbar } from '@components/layout/Navbar'
import { Footer } from '@components/layout/Footer'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SkipLink />
      <header className='container'>
        <Navbar />
      </header>
      <main id='main'>{children}</main>
      <Footer />
    </>
  )
}
