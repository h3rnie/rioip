/** @type {import('next').NextConfig} */

const withAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withAnalyzer({
    reactStrictMode: true,
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-left",
    },
    experimental: {
        runtime:
            process.env.NODE_ENV === "production"
                ? "experimental-edge"
                : "nodejs",
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    /* {
                        key: "Permissions-Policy",
                        value: ""
                    }, */
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin",
                    },
                    /* {
                        key: "Content-Security-Policy",
                        value: "",
                    }, */
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: "/src",
                destination: "https://github.com/h3rnie/rioip",
                permanent: true,
            },
            {
                source: "/git",
                destination: "https://github.com/h3rnie/rioip.git",
                permanent: true,
            },
        ];
    },
});
