'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Modal } from '@/components/ui';
import { upcomingReservations } from '@/data/ecoStays';
import type { Reservation } from '@/data/ecoStays';

const sidebarLinks = [
  { href: '/dashboard', label: 'Overview', active: true },
  { href: '/showcase', label: 'Components' },
  { href: '/about', label: 'Mission' },
  { href: '/login', label: 'Account' },
];

const metrics = [
  {
    label: 'Carbon Saved',
    value: '2.4t',
    detail: 'CO₂ offset this quarter',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    label: 'Eco-Stays Hosted',
    value: '128',
    detail: 'Verified green listings',
    color: 'from-green-500 to-emerald-600',
  },
  {
    label: 'Reward Badges',
    value: '14',
    detail: 'Sustainability achievements',
    color: 'from-lime-500 to-green-600',
  },
];

export default function DashboardPage() {
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 lg:flex-row lg:px-8">
      <aside className="w-full shrink-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:w-64">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Navigation
        </h2>
        <nav aria-label="Dashboard sidebar">
          <ul className="flex flex-row flex-wrap gap-2 lg:flex-col">
            {sidebarLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    link.active
                      ? 'bg-emerald-600 text-white'
                      : 'text-gray-700 hover:bg-emerald-50 dark:text-gray-300 dark:hover:bg-emerald-950',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Impact Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Monitor environmental metrics and upcoming eco-stay reservations.
            </p>
          </div>
          <Button variant="primary" size="md" onClick={() => setIsImpactModalOpen(true)}>
            View Impact Report
          </Button>
        </header>

        <section
          aria-label="Environmental impact metrics"
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className={`flex aspect-square flex-col justify-between rounded-2xl bg-gradient-to-br ${metric.color} p-5 text-white shadow-md`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                {metric.label}
              </p>
              <p className="text-4xl font-bold">{metric.value}</p>
              <p className="text-sm text-white/90">{metric.detail}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Upcoming Reservations
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                <tr>
                  <th className="px-5 py-3 font-semibold">ID</th>
                  <th className="px-5 py-3 font-semibold">Guest</th>
                  <th className="px-5 py-3 font-semibold">Eco-Stay</th>
                  <th className="px-5 py-3 font-semibold">Check-In</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {upcomingReservations.map((reservation) => (
                  <tr key={reservation.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                    <td className="px-5 py-4 font-mono text-xs text-gray-600 dark:text-gray-400">
                      {reservation.id}
                    </td>
                    <td className="px-5 py-4 font-medium text-gray-900 dark:text-gray-100">
                      {reservation.guest}
                    </td>
                    <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                      {reservation.stay}
                    </td>
                    <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                      {reservation.checkIn}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={[
                          'rounded-full px-2.5 py-0.5 text-xs font-semibold',
                          reservation.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : reservation.status === 'Pending'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
                        ].join(' ')}
                      >
                        {reservation.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedReservation(reservation)}
                      >
                        Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Modal
        isOpen={isImpactModalOpen}
        onClose={() => setIsImpactModalOpen(false)}
        title="Quarterly Impact Report"
      >
        <p className="mb-4">
          Your community has offset <strong>2.4 tonnes of CO₂</strong> this quarter through
          verified eco-stay bookings and reforestation partnerships.
        </p>
        <Button variant="primary" size="md" onClick={() => setIsImpactModalOpen(false)}>
          Close Report
        </Button>
      </Modal>

      <Modal
        isOpen={selectedReservation !== null}
        onClose={() => setSelectedReservation(null)}
        title="Reservation Details"
      >
        {selectedReservation && (
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Reservation ID</dt>
              <dd className="font-mono font-medium">{selectedReservation.id}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Guest</dt>
              <dd className="font-medium">{selectedReservation.guest}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Eco-Stay</dt>
              <dd className="font-medium">{selectedReservation.stay}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Check-In</dt>
              <dd className="font-medium">{selectedReservation.checkIn}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Status</dt>
              <dd className="font-medium">{selectedReservation.status}</dd>
            </div>
          </dl>
        )}
        <div className="mt-6">
          <Button variant="primary" size="md" onClick={() => setSelectedReservation(null)}>
            Close
          </Button>
        </div>
      </Modal>
    </main>
  );
}
