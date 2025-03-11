import Link from 'next/link'
import React from 'react'

export default function Dessert() {
  return (
    <div className='text-base bg-violet-100 px-2 py-1 rounded-lg'>
      <Link href="/dessert">Dessert</Link> 
    </div>
  )
}
