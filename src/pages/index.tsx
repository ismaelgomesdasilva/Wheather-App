import React from 'react'
import { DescriptionDay } from '../components/DescriptionDay'
import { SEO } from '../SEO'
const Home: React.FC = () => {
  return (
    <>
      {/* <SEO
        title="Wheater App"
        description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
      />
      <div>
        <h1>Oi, amigo!</h1>
      </div> */}
      <DescriptionDay/>
    </>
  )
}

export default Home
