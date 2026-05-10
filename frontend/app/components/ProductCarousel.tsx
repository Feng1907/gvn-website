"use client";

import { useState } from "react";
import Link from "next/link";

interface CarouselProduct {
  id: number;
  name: string;
  image: string;
  emoji: string;
  category: string;
}

const PRODUCTS: CarouselProduct[] = [
  {
    id: 1,
    name: "Synology SSD SAT5221-960G",
    image: "/images/products/synology-ssd-sat5221.png",
    emoji: "💾",
    category: "SSD",
  },
  {
    id: 2,
    name: "Synology HDD HAT5310-16T",
    image: "/images/products/synology-hdd-16tb.png",
    emoji: "🖴",
    category: "HDD 16TB",
  },
  {
    id: 3,
    name: "Synology HDD HAT5310-12T",
    image: "/images/products/synology-hdd-12tb.png",
    emoji: "🖴",
    category: "HDD 12TB",
  },
  {
    id: 4,
    name: "Synology HDD HAT5310-8T",
    image: "/images/products/synology-hdd-8tb.png",
    emoji: "🖴",
    category: "HDD 8TB",
  },
  {
    id: 5,
    name: "Synology HDD HAT5310-6T",
    image: "/images/products/synology-hdd-6tb.png",
    emoji: "🖴",
    category: "HDD 6TB",
  },
  {
    id: 6,
    name: "Synology HDD HAT5310-4T",
    image: "/images/products/synology-hdd-4tb.png",
    emoji: "🖴",
    category: "HDD 4TB",
  },
  {
    id: 7,
    name: "Synology NAS DS1825+",
    image: "/images/products/synology-ds1825plus.png",
    emoji: "🗄️",
    category: "NAS",
  },
  {
    id: 8,
    name: "Synology NAS DS1525+",
    image: "/images/products/synology-ds1525plus.png",
    emoji: "🗄️",
    category: "NAS",
  },
];

const PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(PRODUCTS.length / PER_PAGE);

function ProductCard({ product }: { product: CarouselProduct }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col bg-white border-0">
      <div className="bg-white aspect-square flex items-center justify-content p-6 relative overflow-hidden">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-7xl select-none">{product.emoji}</span>
        )}
      </div>
      <div className="bg-[#0d3060] px-4 py-3 flex-1 flex flex-col gap-1">
        <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider">
          {product.category}
        </span>
        <span className="text-white text-sm font-semibold leading-snug line-clamp-2">
          {product.name}
        </span>
      </div>
    </div>
  );
}

export default function ProductCarousel() {
  const [page, setPage] = useState(0);

  const visible = PRODUCTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="py-10 px-4 md:px-10 bg-[#f0f5fb]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 max-w-6xl mx-auto">
        <h2 className="text-[#1a2340] text-lg md:text-xl font-bold leading-snug max-w-xs md:max-w-md">
          Sản xuất phần mềm, cung cấp các thiết bị CNTT
        </h2>
        <Link
          href="/products"
          className="text-[#1a6fc4] text-sm font-semibold border border-[#1a6fc4] rounded-full px-4 py-1.5 hover:bg-[#1a6fc4] hover:text-white transition-colors whitespace-nowrap"
        >
          Xem tất cả
        </Link>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-gray-200">
          {visible.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="block">
              <ProductCard product={p} />
            </Link>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      {TOTAL_PAGES > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page
                  ? "w-6 bg-[#1a6fc4]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Trang ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
