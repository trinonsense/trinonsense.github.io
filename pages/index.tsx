import React from 'react'
import { NextPage } from 'next'
import { Head } from './../components/Head'

const HomePage: NextPage = () => (
  <div>
    <Head />
    <GlobalStyle />
    <Navigation />
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
      }
    `}
  </style>
)

const Navigation = (): JSX.Element => (
  <ul>
    <li>
      <a href="https://github.com/trinonsense">Github</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/trinonsense">LinkedIn</a>
    </li>
    <li>
      <a href="https://www.instagram.com/trinonsense">Instagram</a>
    </li>
  </ul>
)

const Intro = (): JSX.Element => (
  <p>
    Hi. My name is Tri (pronounced "tree"). I’m a front end developer based out
    of Austin, Texas. I work with great people at{' '}
    <a href="indeed.com">Indeed</a>. I’m also currently interested in picking up
    new projects. <a href="#">Let’s be in touch</a> :)
  </p>
)

const Expertise = (): JSX.Element => (
  <div>
    <h2>Expertise</h2>
    <ul>
      <li>Javascript/Typescript</li>
      <li>Browser/Node</li>
      <li>React/Redux</li>
      <li>CSS/SASS/CSS-in-JS</li>
      <li>BEM/SMACSS</li>
      <li>HTML/JSX/Mustache</li>
      <li>CI/CD</li>
      <li>Performance</li>
    </ul>
  </div>
)

const Experience = (): JSX.Element => (
  <div>
    <h2>
      Experience | <a href="https://standardresume.co/r/trinoensie">CV</a>
    </h2>
    <div>
      <p>2018 - present</p>
      <h3>
        <a href="https://www.indeed.com/">Indeed</a>
      </h3>
    </div>
    <div>
      <p>2014 - 2018</p>
      <h3>
        <a href="https://watch.tastemade.com/browse">Tastemade</a>
      </h3>
    </div>
    <div>
      <p>2012 - 2014</p>
      <h3>
        <a href="https://www.sabretravelnetwork.com/home/solutions/product/TripCase">
          Tripcase
        </a>
      </h3>
    </div>
    <div>
      <p>2009 - 2011</p>
      <h3>
        <a href="https://www.arm.gov/data/data-quality-program">
          ARM Research Facility
        </a>
      </h3>
    </div>
    <div>
      <p>2010</p>
      <h3>
        <a href="http://www.ou.edu/marcomm">
          University of Oklahoma Web Communications
        </a>
      </h3>
    </div>
  </div>
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
