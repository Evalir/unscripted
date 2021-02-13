import React from 'react'
import { Helmet } from 'react-helmet'
import 'styled-components/macro'
import GlobalStyles from '../../global-styles'
import Typography from '../../typography'

export default function Layout({ children }) {
  return (
    <div
      css={`
        min-height: 100vh;
        max-width: 60rem;
        margin: 0 auto;
        padding: 1.6rem;
      `}
    >
      <Helmet>
        <title>unscripted.email</title>
      </Helmet>
      <GlobalStyles />
      <Typography />
      {children}
    </div>
  )
}
