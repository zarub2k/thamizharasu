// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Thamizharasu',
  siteDescription: 'Platform for human transformation and coaching',
  siteUrl: 'https://zarub2k.github.io/thamizharasu',
  pathPrefix: '/thamizharasu',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post'
      }
    }
  ],
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link'
    }
  }
}
