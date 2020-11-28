import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Bio from "../components/bio"

const IndexPage = () => (
  <Layout>
     <SEO title="Home" />
     <Bio />
  </Layout>
)

export default IndexPage
