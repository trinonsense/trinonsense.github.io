import React from 'react'
import { NextPage } from 'next'
import { Head } from './../components/Head'
import { Links } from './../components/Links'
import { Intro } from './../components/Intro'
import { Expertise } from './../components/Expertise'
import { Experience } from './../components/Experience'

const HomePage: NextPage = () => (
  <div>
    <Head />
    <GlobalStyle />
    <Links />
    <Intro />
    <Expertise />
    <Experience />
    <ContactMe />
    <Footer />
    <GA />
  </div>
)

const GlobalStyle = (): JSX.Element => (
  <style global jsx>
    {`
      body {
        font-family: adobe-garamond-pro, serif;
        font-weight: 400;
        font-style: normal;
        padding: 1.5rem;
        font-size: 16px;
      }

      a,
      a:visited,
      a:active {
      }
    `}
  </style>
)

const ContactMe = (): JSX.Element => (
  <h2>
    <a href="mailto:tnnoensie@gmail.com">Contact Me</a>
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

const GA = (): JSX.Element => (
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
