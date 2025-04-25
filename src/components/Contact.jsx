import React from 'react'
import {CONTACT} from '../constants/index.js'

function Contact() {
    return (
        <div className="pb-4 lg:pl-20 lg:pr-20 items-center text-center  ">
        <h1 className="my-10 text-center text-4xl text-slate-200">
          Get in<span className="text-neutral-500">Touch!</span>
        </h1>
        <p className="my-4 text-sm text-white">{CONTACT.address}</p>
        <p className="my-4 text-sm text-white">{CONTACT.phoneNo}</p>
        <p className="my-4 text-sm text-white">{CONTACT.email}</p>
        </div>
        
    )
}

export default Contact
