import React from 'react'
import NextHead from 'next/head'

export const Head = (): JSX.Element => (
  <NextHead>
    <title>Tri Noensie | Frontend Developer</title>
    <meta
      name="description"
      content="Frontend Developer for Tastemade in Austin, TX"
    />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="https://use.typekit.net/cmf5fdg.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    />
  </NextHead>
)
