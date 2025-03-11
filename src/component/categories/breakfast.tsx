import Link from 'next/link'
import React from 'react'

export default function Breakfast() {
  return (
    <div className='text-base bg-fuchsia-100 px-2 py-1 rounded-lg'>
      <Link href="/breakfast">Breakfast</Link> 
    </div>
  )
}
