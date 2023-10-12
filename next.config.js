/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["cdn.sanity.io"] },
  async headers() {
    return [
      {
        source: "/(.*)?",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,HEAD,PUT,PATCH,POST,DELETE",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
