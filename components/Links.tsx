import React from 'react'

export const Links = (): JSX.Element => (
  <>
    <style jsx>{`
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

      a,
      a:visited,
      a:active {
        color: black;
        text-decoration: none;
      }
    `}</style>
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
      <li>
        <a href="https://standardresume.co/r/trinoensie">Resume</a>
      </li>
    </ul>
  </>
)
