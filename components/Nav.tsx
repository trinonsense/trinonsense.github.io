import React from 'react'

export const Nav = (): JSX.Element => (
  <nav>
    <h2>Tri Noensie</h2>
    <ul>
      <li>
        <a href="https://github.com/trinonsense">Github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/trinonsense">LinkedIn</a>
      </li>
      <li>
        <a href="https://standardresume.co/r/trinoensie">Resume</a>
      </li>
    </ul>
    <style jsx>{`
      nav {
        margin: 1.3rem 1.3rem 5rem;
      }

      ul {
        margin: 0;
        padding-inline-start: 0;
        list-style: none;
        display: flex;
        justify-content: center;
      }

      li:not(:last-child) {
        margin-right: 1rem;
      }

      h2 {
        text-align: center;
        margin: 0 0 0.4rem;
      }

      @media only screen and (min-width: 768px) {
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 2.5rem 2.5rem 6rem;
        }
      }
    `}</style>
  </nav>
)
