'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// This would typically come from your CMS or API
const projects = [
  {
    id: 1,
    title: 'Urban Solitude',
    category: 'fine-art',
    thumbnail: '/photography-bg.jpg',
    year: '2023',
  },
  {
    id: 2,
    title: 'Wedding Stories',
    category: 'events',
    thumbnail: '/work/wedding-stories.jpg',
    year: '2023',
  },
  {
    id: 3,
    title: 'Portrait Series',
    category: 'portraits',
    thumbnail: '/work/portrait-series.jpg',
    year: '2023',
  },
  {
    id: 4,
    title: 'Brand Campaign',
    category: 'commercial',
    thumbnail: '/work/brand-campaign.jpg',
    year: '2023',
  },
  // Add more projects as needed
]

const WorkGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Link 
          href={`/work/${project.id}`} 
          key={project.id}
          className="group hover-image-container"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
            <div className="absolute inset-0 hover-image">
              {project.id === 1 ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={project.id === 1}
                />
              ) : (
                // Placeholder for other projects
                <div className="w-full h-full bg-neutral-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                    Image Placeholder
                  </div>
                </div>
              )}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-light">{project.title}</h3>
                <span className="text-sm text-neutral-400">{project.year}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default WorkGrid
