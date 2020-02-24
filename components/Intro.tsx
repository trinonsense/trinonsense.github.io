import React from 'react'

export const Intro = (): JSX.Element => (
  <div>
    <style jsx>{`
      p {
        font-size: 2rem;
        line-height: 2.7rem;
      }

      p:first-child {
        margin-top: 7rem;
      }
    `}</style>
    <p>
      Hi. My name is Tri (pronounced "tree"). I’m a front end developer in
      Austin, Texas. I work with great people at <a href="indeed.com">Indeed</a>
      . I’m also currently interested in picking up new projects.
    </p>
    <p>
      <a href="#">Let’s get in touch</a> :)
    </p>
  </div>
)
