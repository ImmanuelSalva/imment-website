import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <a href="/">Copyright IMM Entertainment - 2021</a>
    </div>
  </Container>
)

export default Footer
