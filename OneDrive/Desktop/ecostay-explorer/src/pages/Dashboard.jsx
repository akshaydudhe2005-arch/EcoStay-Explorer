import { ecoStays } from '../data/ecoStays'

function Dashboard() {
  const totalStays = ecoStays.length
  const averageRating = (
    ecoStays.reduce((sum, stay) => sum + stay.rating, 0) / totalStays
  ).toFixed(1)
  const regions = [...new Set(ecoStays.map((stay) => stay.location.split(', ').pop()))]

  const stats = [
    { label: 'Total Eco-Stays', value: totalStays, icon: 'Stays' },
    { label: 'Average Rating', value: averageRating, icon: 'Rating' },
    { label: 'Regions Covered', value: regions.length, icon: 'Regions' },
    { label: 'Carbon Neutral', value: '100%', icon: 'Carbon' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-forest-800">Dashboard</h1>
        <p className="mt-3 text-earth-700">
          Overview of your eco-stay portfolio and sustainability metrics.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-forest-200 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-forest-600">
              {stat.icon}
            </span>
            <p className="mt-4 text-3xl font-bold text-forest-700">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-earth-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-forest-200 bg-white shadow-lg">
        <div className="border-b border-forest-200 bg-forest-50 px-6 py-4">
          <h2 className="text-lg font-bold text-forest-800">
            Eco-Stay Inventory
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-forest-200 bg-forest-50/50 text-forest-700">
              <tr>
                <th className="px-6 py-3 font-semibold">Stay</th>
                <th className="px-6 py-3 font-semibold">Location</th>
                <th className="px-6 py-3 font-semibold">Rating</th>
                <th className="px-6 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {ecoStays.map((stay) => (
                <tr
                  key={stay.id}
                  className="border-b border-forest-100 transition-colors hover:bg-forest-50"
                >
                  <td className="px-6 py-4 font-medium text-earth-900">
                    {stay.title}
                  </td>
                  <td className="px-6 py-4 text-earth-600">{stay.location}</td>
                  <td className="px-6 py-4 text-forest-700">{stay.rating}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard