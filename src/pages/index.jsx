import React, { Component } from "react"
import { graphql } from "gatsby"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import {
  Layout,
  Header,
  Projects,
  Technologies,
  About,
  Contact,
} from "../components"

class Index extends Component {
  render() {
    const {
      data: { header, about, highlightedProjects, technologies },
    } = this.props

    return (
      <Layout>
        <Parallax pages={7}>
          <Header offset={0} header={header} />
          <About offset={1} about={about} />
          <Projects
            offset={2}
            highlightedProjects={highlightedProjects.data.projects}
          />
          <Technologies offset={5} technologies={technologies} />
          <Contact offset={6} />
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
    technologies: allPrismicTechnology {
      nodes {
        data {
          icon {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title {
            text
          }
        }
      }
    }
    about: prismicAbout {
      data {
        content {
          html
        }
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
