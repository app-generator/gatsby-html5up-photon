module.exports = {
  siteMetadata: {
		title: 'Gatsby Html5up - Open-Source app with Photon design',
    description: `Open-Source Gatsby Starter`,
    author: `@Sm0keDev`,
		siteUrl: `https://gatsby-html5up-photon.appseed.us`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline'
  ],
}
