/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // A4TECH / hstatic
      { protocol: "https", hostname: "product.hstatic.net" },
      // Logitech
      { protocol: "https", hostname: "resource.logitech.com" },
      // Gigabyte
      { protocol: "https", hostname: "www.gigabyte.com" },
      // ASUS
      { protocol: "https", hostname: "dlcdnwebimgs.asus.com" },
      // Corsair
      { protocol: "https", hostname: "www.corsair.com" },
      // Samsung
      { protocol: "https", hostname: "images.samsung.com" },
      // Synology
      { protocol: "https", hostname: "www.synology.com" },
      { protocol: "https", hostname: "global.synologycdn.com" },
      // APC / Schneider
      { protocol: "https", hostname: "www.apc.com" },
      { protocol: "https", hostname: "download.schneider-electric.com" },
      // Intel
      { protocol: "https", hostname: "www.intel.com" },
      // Kingston
      { protocol: "https", hostname: "www.kingston.com" },
      // Hikvision
      { protocol: "https", hostname: "www.hikvision.com" },
      // Cisco
      { protocol: "https", hostname: "www.cisco.com" },
      // RIBAO
      { protocol: "https", hostname: "ribao-technology.com" },
      { protocol: "https", hostname: "www.ribaotech.com" },
      // Epson
      { protocol: "https", hostname: "www.epson.com.sg" },
      { protocol: "https", hostname: "epson.com.vn" },
      // DaviSoft
      { protocol: "https", hostname: "davisoft.vn" },
      // Oudis
      { protocol: "https", hostname: "oudis.vn" },
      // Microsoft
      { protocol: "https", hostname: "store-images.s-microsoft.com" },
      // Kaspersky
      { protocol: "https", hostname: "www.kaspersky.com" },
      // Future CDN
      { protocol: "https", hostname: "cdn.mos.cms.futurecdn.net" },
      // Wildcard cho mọi domain khác (chỉ dùng trong dev)
      { protocol: "https", hostname: "**" },
    ],
  },
};

module.exports = nextConfig;