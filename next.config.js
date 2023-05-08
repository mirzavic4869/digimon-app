/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "digimon.shadowsmith.com",
				port: "",
				pathname: "/img/**",
			},
		],
	},
};
