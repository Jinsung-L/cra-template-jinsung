import React from 'react'

export const SizeIndicator: React.FC = () => (
  <div
    className={[
      'flex items-center justify-center w-20 h-20 rounded-lg',
      'text-2xl font-semibold tracking-wider text-white uppercase',
      'bg-red-400',
      'sm:bg-green-400',
      'md:bg-blue-400',
      'lg:bg-pink-400',
      'xl:bg-teal-400',
    ].join(' ')}
  >
    <span className="sm:hidden">xs</span>
    <span className="hidden sm:inline md:hidden">sm</span>
    <span className="hidden md:inline lg:hidden">md</span>
    <span className="hidden lg:inline xl:hidden">lg</span>
    <span className="hidden xl:inline">xl</span>
  </div>
)
