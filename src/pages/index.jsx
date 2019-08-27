import React, { Component } from "react"
import { graphql } from "gatsby"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import { Layout, Header, Projects, About, Contact } from "../components"

class Index extends Component {
  render() {
    const {
      data: { header, projects, about },
    } = this.props

    return (
      <Layout>
        <Parallax pages={5}>
          <Header offset={0} header={header} />
          <Projects offset={1} projects={projects} />
          <About offset={3} about={about} />
          <Contact offset={4} />
        </Parallax>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    header: prismicHeader {
      data {
        title {
          text
        }
        subtitle {
          text
        }
      }
    }
    projects: allPrismicProject {
      nodes {
        data {
          title {
            text
          }
          content {
            html
          }
        }
        id
        uid
      }
    }
    about: prismicAbout {
      data {
        content {
          html
        }
      }
    }
  }
`
