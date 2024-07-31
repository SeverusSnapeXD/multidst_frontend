import React from 'react'

function Name({children}){
    return(
        <p className='text-2xl font-medium my-2'>{children}</p>
    )
}

export default function Contact() {
  return (
    <div className='text-white'>
        <h1 className='text-4xl font-semibold'>Our Team</h1>
        <div>
            <Name>
            Susara Ouchithya
            </Name>
            <Name>
            Sahan Madhushanka
            </Name>
            <Name>
            Kaleelur Rahman
            </Name>
        </div>
        <div>
            <p className='text-3xl font-medium'>Supervised By:</p>
            <p>Suzorro Daniel</p>
        </div>
    </div>
  )
}
