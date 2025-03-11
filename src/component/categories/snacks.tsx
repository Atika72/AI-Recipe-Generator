import Link from 'next/link'
import React from 'react'

export default function Snacks() {
  return (
    <div className='text-base bg-red-100 px-2 py-1 rounded-lg'>
      <Link href="/snacks">Snacks</Link> 
    </div>
  )
}
