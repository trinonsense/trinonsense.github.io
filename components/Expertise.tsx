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
      <li>Javascript / Typescript</li>
      <li>DOM / Node</li>
      <li>React / Redux</li>
      <li>CSS / CSS-in-JS</li>
      <li>SASS / BEM</li>
      <li>Frontend Ops</li>
    </ul>
  </div>
)
