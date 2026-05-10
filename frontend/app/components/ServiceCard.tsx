'use client';
import Image from 'next/image';

interface ServiceProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceCard({ title, description, imageSrc }: ServiceProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden bg-white">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-contain p-4"
        />
      </div>
      <div className="p-4 bg-orange-50 flex-grow flex flex-col justify-center items-center text-center">
        <h3 className="text-blue-800 font-bold text-sm md:text-base leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-xs mt-1">{description}</p>
      </div>
    </div>
  );
}