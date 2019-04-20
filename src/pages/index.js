import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import Header from "../components/header"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Header>
    <Container>
      <h1>Hey.</h1>
      <p>Welcome to step 1 in my JS journey</p>
      <User
        username="Max Linsenbard"
        avatar="http://linsenbard.com/static/img/me.jpg"
        excerpt={[
          "Max is an iOS engineer who's trying to branch out and learn new and unfamiliar technologies. First stop: ",
          <a href="https://reactjs.org">React.js</a>,
          ", ",
          <a href="https://gatsbyjs.org">Gatsby</a>,
          ", and ",
          <a href="https://graphql.org">GraphQL</a>,
          "!",
        ]}
      />
    </Container>
  </Header>
)
