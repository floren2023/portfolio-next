import React from 'react'
import Contact from '../../components/Contact'
export const metadata={
    title:"Contact",
    description:"Contact me"
  }

function Page() {
    return (
        <div className=" -z-10    w-full 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Contact/>
        </div>
    )
}

export default Page
