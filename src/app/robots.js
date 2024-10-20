export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/blog', '/plan', '/product'],
            disallow: '/private/',
        },
        sitemap: 'https://on-dm.com/sitemap.xml',
    }
}