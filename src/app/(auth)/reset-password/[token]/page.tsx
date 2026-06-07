'use client';
import { Input } from '@/components/ui/input';
import { useRouter, useParams } from 'next/navigation';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        return;
      }

      setMessage('Password reset successfully! Redirecting to login...');
      setTimeout(() => router.push('/login'), 2000);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <div className="relative flex-1 hidden md:flex flex-col bg-gradient-to-br from-[#4F46E5] to-[#1325EC] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative z-10 flex flex-col p-10 gap-10 h-full justify-between">
          <div className="text-white font-extrabold text-xl flex gap-1 items-center">
            <svg width="28" height="25" viewBox="0 0 30 25" fill="none">
              <path
                d="M4.2586 0C2.22518 2.03341 0.840405 4.62414 0.279385 7.44461C-0.281635 10.265 0.00629795 13.1885 1.10678 15.8453C2.20726 18.5021 4.07085 20.7729 6.46187 22.3705C8.85294 23.9681 11.6641 24.8209 14.5397 24.8209C17.4154 24.8209 20.2265 23.9681 22.6176 22.3705C25.0086 20.7728 26.8722 18.5021 27.9727 15.8453C29.0732 13.1885 29.3611 10.265 28.8001 7.44461C28.2391 4.62414 26.8543 2.03341 24.8209 0L14.5397 10.2811L4.2586 0Z"
                fill="white"
              />
            </svg>
            Vidyasetu
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-6">
            <p className="font-extrabold text-3xl tracking-wide text-white text-center max-w-[60%]">
              Set a new password
            </p>
            <p className="text-[14px] tracking-wide text-white text-center max-w-[60%]">
              Choose a strong password you haven&apos;t used before.
            </p>
          </div>
          <p className="text-white text-[10px]">
            © 2023 Vidyasetu. AI-Powered Learning.
          </p>
        </div>
      </div>

      <div className="flex-1 h-screen flex flex-col pr-10 pt-4">
        <p className="flex justify-end text-[14px]">
          Need help? <span className="pl-2 text-button">Contact Support</span>
        </p>

        <div className="flex flex-1 justify-center items-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="capitalize text-3xl font-bold">Reset password</p>
              <p className="text-[16px] text-black/40">
                Enter your new password.
              </p>
            </div>

            <form
              className="flex flex-col gap-6 md:w-3/5 w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="password">New Password</label>
                <Input
                  className="bg-primary-foreground"
                  type="password"
                  placeholder="Min. 8 characters"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Input
                  className="bg-primary-foreground"
                  type="password"
                  placeholder="Re-enter new password"
                  id="confirmPassword"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {message && (
                <p className="text-green-600 text-[14px] font-light">
                  {message}
                </p>
              )}
              {error && (
                <p className="text-red-500 text-[14px] font-light">{error}</p>
              )}

              <Input
                type="submit"
                className="bg-button text-white font-bold cursor-pointer hover:bg-button/90 transition-all disabled:opacity-50"
                value={loading ? 'Resetting...' : 'Reset Password'}
                disabled={loading}
              />
            </form>

            <p className="mt-2">
              Remember your password?{' '}
              <span
                className="text-button cursor-pointer"
                onClick={() => router.push('/login')}
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
