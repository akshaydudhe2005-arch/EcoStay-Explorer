import Hero from '../components/Hero'
import Card from '../components/Card'
import { ecoStays } from '../data/ecoStays'

function Home() {
  return (
    <>
      <Hero />

      <section
        id="eco-stays"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-forest-800 sm:text-4xl">
            Featured Eco-Stays
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-earth-700">
            Each stay is vetted for environmental impact, community support, and
            authentic nature experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ecoStays.map((stay) => (
            <Card
              key={stay.id}
              title={stay.title}
              description={stay.description}
              image={stay.image}
              location={stay.location}
              rating={stay.rating}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home