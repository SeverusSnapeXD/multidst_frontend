import React from 'react'
import Image from 'next/image'

export default function Testimonial({ imageSrc, text, name, role }) {
  return (
    <div className="flex flex-col items-center p-6 h-[350px] bg-white rounded-xl shadow-lg">
      <div className="w-24 h-24 relative rounded-full overflow-hidden mb-6">
        <Image
          src={imageSrc}
          alt={`${name}'s profile`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 w-full flex flex-col justify-between">
        <div className="text-center mb-4">
          <blockquote className="text-gray-600 italic line-clamp-6">
            "{text}"
          </blockquote>
        </div>

        <div className="text-center mt-auto">
          <h3 className="font-semibold text-lg">{name}</h3>
          {role && <p className="text-gray-500 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  )
}
