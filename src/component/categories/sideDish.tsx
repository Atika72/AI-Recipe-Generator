import Link from 'next/link'
import React from 'react'

export default function SideDish() {
  return (
    <div className='text-base bg-teal-100 px-2 py-1 rounded-lg'>
      <Link href="/side-dish">Side Dish</Link> 
    </div>
  )
}
