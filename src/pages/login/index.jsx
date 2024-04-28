// app/login/page.js
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, Input, Label, Alert, Checkbox } from '@/components/ui';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        remember: rememberMe,
      });

      if (result.error) {
        setError(result.error);
      } else {
        // Redirect to the dashboard or desired page
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.svg" alt="Company Logo" className="h-12" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && (
          <Alert variant="error" className="mb-4">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              Remember me
            </Checkbox>
            <a href="/forgot-password" className="text-blue-500 hover:text-blue-700">
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Dont have an account?{' '}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}