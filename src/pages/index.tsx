import { SEO } from '../SEO'
import { CardsWrapper, Graphic, DescriptionDay, Search } from '../components'
import { Container } from '../components/Container'
const Home: React.FC = () => {
  return (
    <>
        <SEO
          title="Wheater App"
          description="The website consumes a Weather Weather API that informs the weather conditions in a certain region."
        />
       
      <Container>
        <DescriptionDay />
        <Graphic />
        <CardsWrapper />
      </Container>
    </>
  )
}

export default Home
