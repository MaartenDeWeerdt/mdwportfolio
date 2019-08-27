import React from "react"
import styled from "@emotion/styled"
import { Content, Divider } from "../elements"
import ProjectCard from "./Project-card"
import { withTheme } from "emotion-theming"

const StyledDiv = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1fr);
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Projects = ({ offset, projects, theme }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
      speed={-0.2}
      offset={1.1}
      factor={2}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={2}>
      <StyledDiv>
        <h1 style={{ gridColumn: "-1/1" }}>Projects</h1>
        {projects.nodes.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            bg={theme.colors.greyDarker}
          />
        ))}
      </StyledDiv>
    </Content>
  </div>
)

export default withTheme(Projects)
