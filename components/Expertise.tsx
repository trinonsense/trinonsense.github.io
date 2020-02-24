import React from 'react'

export const Expertise = (): JSX.Element => (
  <div>
    <style jsx>{`
      h2 {
        margin-top: 3rem;
      }

      ul {
        margin: 0;
        padding-inline-start: 0;
        list-style: none;
      }

      li {
        font-size: 1rem;
      }

      li:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    `}</style>
    <h2>Expertise</h2>
    <ul>
      <li>
        Javascript / <a href="https://www.typescriptlang.org/">Typescript</a>
      </li>
      <li>
        Browser / <a href="https://nodejs.org/en/">Node</a>
      </li>
      <li>
        <a href="https://reactjs.org/">React</a> /{' '}
        <a href="https://redux.js.org/">Redux</a>
      </li>
      <li>
        CSS / <a href="https://sass-lang.com/">SASS</a>
      </li>
      <li>
        <a href="http://getbem.com/">BEM</a> /{' '}
        <a href="http://smacss.com/">SMACSS</a>
      </li>
      <li>
        HTML / <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>
      </li>
    </ul>
  </div>
)
