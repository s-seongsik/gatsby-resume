import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: `/g-resume`,
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sass`  
  ],
  
}

export default config
