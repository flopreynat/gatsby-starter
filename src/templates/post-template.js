import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data: post }) => (
  <Layout>
    <h1>{post.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </Layout>
)

export const query = graphql`
	query($slug: String!) {
	  markdownRemark(fields: {
	    slug: { eq: $slug}
	  }) {
	    html
	    frontmatter {
	      title
	    }
	  }
	}
`