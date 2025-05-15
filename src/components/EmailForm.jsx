import React from 'react'

function EmailForm({name,email,message}) {
  return (
    <div className='flex flex-col gap-4 text-start'>
    <div >
        Email:<p>{email}</p>
    </div>
    <div  className='font-bold'>
        Name:<p>{name}</p>
    </div>
    <div >
        Message:<p>{message}</p>
    </div>
</div>
  )
}

export default EmailForm