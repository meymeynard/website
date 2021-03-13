import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Meta = () => {
  const { site } = useStaticQuery(graphql`
    query MetaQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet
      title={site.siteMetadata.title}
    />
  )
}

export default Meta
