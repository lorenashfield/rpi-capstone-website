import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Enables static export for GitHub Pages
    images: {
        unoptimized: true, // Disable Next.js image optimization (not supported on GitHub Pages)
    },
    basePath: "/rpi-capstone-website",
};

export default nextConfig;