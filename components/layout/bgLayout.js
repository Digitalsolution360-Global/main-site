import React from 'react'
import Header from './header'
import Footer from './footer'
import { CoolHeader } from './cool-header'

function BgLayout({ children }) {
  return (
    <>
      <Header />
      {/* <CoolHeader/> */}
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default BgLayout