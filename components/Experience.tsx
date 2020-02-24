import React from 'react'

interface Job {
  company: string
  duration: string
  link: string
}

const defineJob = (company: string, duration: string, link: string): Job => ({
  company,
  duration,
  link
})

const jobs: Job[] = [
  defineJob('Indeed', '2018 - present', 'https://www.indeed.com/'),
  defineJob('Tastemade', '2014 - 2018', 'https://watch.tastemade.com/browse'),
  defineJob(
    'Tripcase',
    '2012 - 2014',
    'https://www.sabretravelnetwork.com/home/solutions/product/TripCase'
  ),
  defineJob(
    'ARM Research Facility',
    '2009 - 2011',
    'https://www.arm.gov/data/data-quality-program'
  ),
  defineJob(
    'University of Oklahoma Web Communications',
    '2010',
    'http://www.ou.edu/marcomm'
  )
]

export const Experience = (): JSX.Element => (
  <div>
    <style jsx>{`
      h2 {
        margin-top: 3rem;
      }

      h3 {
        font-size: 3rem;
        margin-top: 0;
        margin-bottom: 1rem;
        word-wrap: break-word;
      }

      p {
        margin-top: 0;
        margin-bottom: 0;
      }
    `}</style>

    {jobs.map(({ company, link, duration }) => (
      <div key={company}>
        <p>{duration}</p>
        <h3>
          <a href={link}>{company}</a>
        </h3>
      </div>
    ))}
  </div>
)
