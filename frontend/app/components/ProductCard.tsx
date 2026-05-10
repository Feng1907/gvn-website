'use client';
import Image from 'next/image';

interface Product {
  id: number;
  category: string;
  title: string;
  img: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      {/* Khung chứa ảnh */}
      <div className="relative h-64 w-full bg-white border border-gray-200">
        <Image 
          src={product.img} 
          alt={product.title} 
          fill 
          className="object-contain"
        />
      </div>
      
      {/* Thông tin chữ bên dưới */}
      <div className="mt-3 text-center md:text-left">
        <p className="text-[10px] text-gray-400 uppercase font-semibold">{product.category}</p>
        <h3 className="text-gray-700 font-medium text-sm mt-1 group-hover:text-blue-700 transition-colors">
          {product.title}
        </h3>
        <p className="text-blue-800 font-bold mt-1">Liên hệ</p>
      </div>
    </div>
  );
}