function Footer() {
  return (
    <footer className="mt-auto border-t border-forest-200 bg-forest-900 px-4 py-10 text-forest-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-white">EcoStay Explorer</p>
          <p className="mt-1 text-sm text-forest-300">
            Travel responsibly. Leave only footprints.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-7xl border-t border-forest-800 pt-6 text-center text-xs text-forest-400">
        &copy; {new Date().getFullYear()} EcoStay Explorer. Built for sustainable
        tourism.
      </p>
    </footer>
  )
}

export default Footer