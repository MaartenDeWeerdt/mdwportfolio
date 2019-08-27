import React from "react"
import { graphql } from "gatsby"
const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
    </React.Fragment>
  )
}
export default Project
export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
      }
    }
  }
`
