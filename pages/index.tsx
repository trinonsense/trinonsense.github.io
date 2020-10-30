import React from 'react'
import { NextPage } from 'next'
import { Head } from './../components/Head'
import { Nav } from './../components/Nav'
import { Intro } from './../components/Intro'
import { Expertise } from './../components/Expertise'
import { Experience } from './../components/Experience'

const HomePage: NextPage = () => (
  <>
    <Head />
    <GlobalStyle />
    <Nav />
    <Intro />
    <Expertise />
    <Experience />
    <CTA />
    <Footer />
    <Scripts />
  </>
)

const GlobalStyle = (): JSX.Element => (
  <style global jsx>
    {`
      html {
        font-size: 18px;
      }

      body {
        font-family: adobe-garamond-pro, serif;
        font-weight: 400;
        font-style: normal;
        background-color: rgb(246, 245, 234);
        color: rgb(54, 51, 23);
      }

      a,
      a:visited,
      a:active {
        color: rgb(54, 51, 23);
      }
    `}
  </style>
)

const CTA = (): JSX.Element => (
  <h2>
    <a href="mailto:tnnoensie@gmail.com">Get in touch</a>
  </h2>
)

const Footer = (): JSX.Element => (
  <div>
    <p>Trisatria Noensie Austin, TX tnnoensie@gmail.com</p>
    <p>
      Updated: March 2020 //{' '}
      <a href="https://github.com/trinonsense/trinonsense.github.io">
        &lt;code /&gt;
      </a>
    </p>
  </div>
)

const Scripts = (): JSX.Element => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;ga('create','UA-51684944-2','auto');ga('send','pageview')`
      }}
    />
    <script src="https://www.google-analytics.com/analytics.js" async defer />
  </>
)

export default HomePage
