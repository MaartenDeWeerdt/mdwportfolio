import React from "react"
import { Content, Inner, Divider } from "../elements"
import ProjectCard from "./Project-card"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const breakpoints = [1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const Projects = ({ offset, theme, highlightedProjects }) => (
  <div>
    <Divider
      bg={theme.colors.blueLight}
      clipPath="polygon(0 12%, 100% 0%, 100% 82%, 0 94%)"
      speed={-0.2}
      offset={offset}
      factor={1.5}
    />
    <Content speed={0.4} offset={offset} factor={1.5}>
      <Inner css={css({ [mq[0]]: { padding: "0 !important" } })}>
        <div>
          <h1 css={css({ color: theme.colors.white })}>
            Projects in the Spotlight
          </h1>
          {highlightedProjects.map(({ project }, index) => {
            return (
              <ProjectCard
                idnex={index}
                key={project.document[0].id}
                project={project.document[0]}
              />
            )
          })}
        </div>
      </Inner>
    </Content>
  </div>
)

export default withTheme(Projects)
