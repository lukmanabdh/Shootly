/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shootlyapp.net',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://shootlyapp.net/sitemap.xml'],
  },
  outDir: './out',
};
