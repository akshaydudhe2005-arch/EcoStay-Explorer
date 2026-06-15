import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-600 to-earth-600 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-forest-300 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-earth-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-forest-200">
          Sustainable Travel
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Discover Eco-Friendly Stays Around the World
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-forest-100 sm:text-xl">
          Explore handpicked sustainable accommodations that protect nature while
          delivering unforgettable experiences.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#eco-stays"
            className="rounded-xl bg-white px-8 py-3 font-semibold text-forest-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-forest-50 hover:shadow-xl"
          >
            Browse Stays
          </a>
          <Link
            to="/dashboard"
            className="rounded-xl border-2 border-white/40 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero