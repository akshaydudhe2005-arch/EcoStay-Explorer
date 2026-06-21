'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Toast } from '@/components/ui';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Enter a valid email address.');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      valid = false;
    }

    if (valid) {
      setToastVisible(true);
    }
  };

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Welcome Back
          </p>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Sign in to EcoStay
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Access your dashboard, reservations, and sustainability rewards.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError('');
            }}
            error={emailError}
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError('');
            }}
            error={passwordError}
            autoComplete="current-password"
          />
          <Button variant="primary" size="lg" type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          New to EcoStay?{' '}
          <Link href="/about" className="font-medium text-emerald-600 hover:underline dark:text-emerald-400">
            Learn about our mission
          </Link>
        </p>
      </div>

      <Toast
        message="Login successful! Redirecting to dashboard..."
        variant="success"
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
      />
    </main>
  );
}
