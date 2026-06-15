function About() {
  const values = [
    {
      icon: 'Planet',
      title: 'Planet First',
      text: 'Every listed stay meets strict sustainability criteria including renewable energy and waste reduction.',
    },
    {
      icon: 'Community',
      title: 'Community Impact',
      text: 'We partner with local communities to ensure tourism benefits the people who protect these ecosystems.',
    },
    {
      icon: 'Standards',
      title: 'Transparent Standards',
      text: 'Our vetting process covers carbon footprint, water usage, biodiversity protection, and guest education.',
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-forest-800 sm:text-5xl">
          About EcoStay Explorer
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-earth-700">
          EcoStay Explorer is a platform dedicated to making sustainable travel
          accessible. We curate eco-friendly accommodations worldwide so travelers
          can explore the planet without harming it.
        </p>
      </div>

      <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-forest-600 to-earth-600 p-8 text-white shadow-lg sm:p-12">
        <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-forest-100">
          To inspire a new generation of conscious travelers by connecting them
          with accommodations that prioritize environmental stewardship, support
          local economies, and create meaningful connections with nature.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-forest-200 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-forest-600">
              {value.icon}
            </span>
            <h3 className="mt-4 text-xl font-bold text-forest-800">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-earth-700">
              {value.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About