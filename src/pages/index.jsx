import React, { Component } from "react"
import { graphql } from "gatsby"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import { Layout, Header, Projects, About, Contact } from "../components"

class Index extends Component {
  render() {
    const {
      data: { header, about, highlightedProjects },
    } = this.props

    return (
      <Layout>
        <Parallax pages={5}>
          <Header offset={0} header={header} />
          <About offset={1} about={about} />
          <Projects
            offset={2}
            highlightedProjects={highlightedProjects.data.projects}
          />
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
    highlightedProjects: prismicHighlightedProjects {
      data {
        projects {
          project {
            document {
              data {
                title {
                  text
                }
                content {
                  html
                }
                thumbnail {
                  localFile {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
              id
              uid
            }
          }
        }
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
