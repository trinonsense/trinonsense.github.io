import React from 'react'

export const Intro = (): JSX.Element => (
  <>
    <div className="intro">
      <p>
        Frontend developer in Austin, TX 🤠 Currently building buttons and
        modals at <a href="https://www.indeed.com/">Indeed</a>.
      </p>
      <p>
        <a href="#">Let’s get in touch.</a>
      </p>
    </div>

    <style jsx>{`
      .intro {
        margin: 1.3rem 1.3rem 15vmax;
      }

      p {
        font-size: calc(3vh + 1rem);
      }

      @media only screen and (min-width: 768px) {
        .intro {
          max-width: 80%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    `}</style>
  </>
)
