import Link from "next/link";
import React from "react";

export default function Dinner() {
  return (
    <div className='text-base bg-pink-100 px-2 py-1 rounded-lg'>
      <Link href="/dinner">Dinner</Link> 
    </div>
  );
}
