import Link from 'next/link'
import React from 'react'

export default function Lunch() {
  return (
    <div className='text-base bg-green-100 px-2 py-1 rounded-lg'>
      <Link href="/lunch">Lunch</Link> 
    </div>
  )
}
