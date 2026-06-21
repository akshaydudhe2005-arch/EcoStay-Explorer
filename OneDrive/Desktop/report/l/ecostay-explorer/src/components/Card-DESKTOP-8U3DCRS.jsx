function Card({ title, description, image, location, rating }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-forest-700 shadow-md">
          {'\u2605'} {rating}
        </div>
      </div>

      <div className="p-6">
        <p className="mb-1 text-sm font-medium text-forest-600">{location}</p>
        <h3 className="mb-3 text-xl font-bold text-earth-900">{title}</h3>
        <p className="text-sm leading-relaxed text-earth-700">{description}</p>
        <button
          type="button"
          className="mt-5 w-full rounded-lg bg-forest-600 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-forest-700"
        >
          Learn More
        </button>
      </div>
    </article>
  )
}

export default Card