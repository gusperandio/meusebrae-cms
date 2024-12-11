/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "false" },
          { key: "Access-Control-Allow-Origin", value: "" }, 
          {
            key: "Access-Control-Allow-Methods",
            value: "PATCH",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "",
          },
        ],
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
