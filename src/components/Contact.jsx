import React from "react"
import { withTheme } from "emotion-theming"
import Wave from "react-wavify"
import { Content, Inner, Divider } from "../elements"

const Contact = ({ offset, contact, theme }) => (
  <div>
    <Divider speed={0.2} offset={offset}>
      <div
        css={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bottom: 0,
        }}
      >
        <Wave
          css={{ height: "100%", position: "fixed", transform: "skewY(5deg)" }}
          fill={theme.colors.greyLight}
          paused={false}
          options={{
            height: 100,
            amplitude: 100,
            speed: 0.05,
            points: 2,
          }}
        />
        <Wave
          css={{
            height: "100%",
            position: "fixed",
            transform: "skewY(-10deg)",
          }}
          fill={theme.colors.blueLight}
          paused={false}
          options={{
            height: 50,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
        <Wave
          css={{ height: "100%", position: "fixed" }}
          fill={theme.colors.blueDarker}
          paused={false}
          options={{
            height: 150,
            amplitude: 70,
            speed: 0.1,
            points: 2,
          }}
        />
      </div>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <h1 css={{ color: theme.colors.white }}>Get in touch</h1>
      </Inner>
    </Content>
  </div>
)

export default withTheme(Contact)
