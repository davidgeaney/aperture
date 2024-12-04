'use client'

import React, { useState } from 'react'

const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'portraits', name: 'Portraits' },
  { id: 'events', name: 'Events' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'fine-art', name: 'Fine Art' },
]

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-8 text-sm">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`uppercase tracking-[0.2em] hover:text-white transition-colors
              ${activeCategory === category.id ? 'text-white' : 'text-neutral-400'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="h-[1px] bg-neutral-800 mt-8"></div>
    </div>
  )
}

export default CategoryFilter
