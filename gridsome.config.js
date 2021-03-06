// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Zack Cuddy',
  titleTemplate: 'Zack Cuddy',
  siteUrl: 'https://zack-cuddy.com',
  siteDescription: 'Zack Cuddy - Developer.  Bringing VueJS Apps to a site near you!',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-123361165-1'
      }
    }
  ]
}