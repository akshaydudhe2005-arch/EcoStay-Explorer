import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
    isActive
      ? 'bg-forest-600 text-white shadow-md'
      : 'text-forest-800 hover:bg-forest-100 hover:text-forest-900'
  }`

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest-200 bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            {'\u{1F33F}'}
          </span>
          <span className="text-xl font-bold tracking-tight text-forest-800">
            EcoStay Explorer
          </span>
        </NavLink>

        <ul className="flex items-center gap-2 sm:gap-4">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar