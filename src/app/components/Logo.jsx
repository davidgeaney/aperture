import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 font-light">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-2 border-white rounded-full"></div>
        <div className="absolute inset-[6px] border border-white rounded-full"></div>
        <div className="absolute inset-[10px] bg-white rounded-full"></div>
      </div>
      <span className="text-xl tracking-[0.2em] uppercase">Aperture</span>
    </Link>
  )
}

export default Logo
