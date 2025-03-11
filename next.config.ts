import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns :[
    {
      protocol: "https",
      hostname: "static.vecteezy.com",
      port: "",
    }
   ]
  },
  reactStrictMode: true,
  // ...other next.config.js options
};

export default nextConfig;
