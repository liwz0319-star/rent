import React, { useState } from 'react';

interface SignupPageProps {
  onNavigateToLogin: () => void;
  onSignupSuccess: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigateToLogin, onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      onSignupSuccess();
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    onSignupSuccess();
  };

  return (
    <div className="h-screen w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans antialiased overflow-hidden flex">
      {/* Left Column - Image & Branding */}
      <div className="hidden lg:flex w-1/2 relative bg-sky-400 overflow-hidden">
        <img
          alt="High-key aerial photograph of a dense CBD skyline with vibrant blue sky and soft white clouds"
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZP7ilmO05c4B2oGoj5fFKoVjLAaXlud1XlA6pHBHfa8r4FxcS0UuOLqZ9JwwiNGibW9I9dggxTzoMluPf-5HH7BqlUrUh1t2LJBX2O7sjZcJ--AXQJfo7AJ5zMSk6Sux8dt0qc2SylJGaG2EcAkM7gl2fiSadenGkgxueTodRxPC9H910OgEsM23GA77kBn8NqBQZzoF_2JqMwRTHTrS0lM8QD6gztuLJ6WnjW9q18Oyuxn4SY4qTHXgeOZtgvNjTTwGcsX7SkreQ"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 via-transparent to-black/60"></div>
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-12">
          <div>
            {/* Optional Top Content */}
          </div>
          <div className="mb-12">
            <h1 className="text-5xl font-display font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Smart matching for <br />
              <span className="text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-extrabold">commercial assets.</span>
            </h1>
            <p className="text-lg text-white font-medium max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] bg-black/10 p-2 rounded-lg backdrop-blur-sm">
              Connect with premium office spaces instantly. Our AI infrastructure analyzes thousands of data points to find your perfect commercial match.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Signup Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 bg-background-light dark:bg-background-dark overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg">
              <span className="material-icons">domain</span>
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-gray-900 dark:text-white">OfficeMatch.ai</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create an account</h2>
            <p className="text-gray-500 dark:text-gray-400">Enter your details below to get started.</p>
          </div>

          <form onSubmit={handleSignup} className="mt-8 space-y-6">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email address</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-gray-400 text-sm">email</span>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-surface-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out dark:text-white dark:placeholder-gray-500"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-gray-400 text-sm">lock</span>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-surface-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out dark:text-white dark:placeholder-gray-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="confirm-password">Confirm password</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-gray-400 text-sm">lock</span>
                  </div>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-surface-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out dark:text-white dark:placeholder-gray-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </>
                ) : (
                  'Sign up'
                )}
              </button>
            </div>
          </form>

          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background-light dark:bg-background-dark text-gray-500 dark:text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-surface-dark text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg aria-hidden="true" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path d="M12.0003 20.45c-4.6667 0-8.45-3.7833-8.45-8.45 0-4.6667 3.7833-8.45 8.45-8.45 2.15 0 4.1.75 5.6167 2.1667l-1.8 1.8c-1.0667-.9333-2.45-1.4667-3.8167-1.4667-3.2833 0-5.95 2.6667-5.95 5.95s2.6667 5.95 5.95 5.95c2.7833 0 4.8667-1.7667 5.3-4.1667h-5.3v-2.3833h7.8333c.0833.45.1333.9167.1333 1.4167 0 4.8833-3.5 8.45-7.9666 8.45z" fill="currentColor"></path>
              </svg>
              Google
            </button>
            <button
              onClick={() => handleSocialLogin('WeChat')}
              className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-surface-dark text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="h-5 w-5 mr-2 text-[#07C160]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.5,14c-4.1,0-7.5-2.9-7.5-6.5S4.4,1,8.5,1s7.5,2.9,7.5,6.5S12.6,14,8.5,14z M8.9,3.7c-0.4,0-0.7,0.3-0.7,0.6 c0,0.4,0.3,0.6,0.7,0.6c0.4,0,0.7-0.3,0.7-0.6C9.6,4,9.3,3.7,8.9,3.7z M5.8,3.7c-0.4,0-0.7,0.3-0.7,0.6c0,0.4,0.3,0.6,0.7,0.6 c0.4,0,0.7-0.3,0.7-0.6C6.5,4,6.2,3.7,5.8,3.7z M17.2,12.5c-3.1,0-5.7,2.2-5.7,4.9c0,1.3,0.6,2.5,1.7,3.4l-0.4,1.4l1.6-0.8 c0.7,0.3,1.5,0.4,2.3,0.4c3.1,0,5.7-2.2,5.7-4.9S19.8,12.5,17.2,12.5z M18.4,15.2c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5C18.9,15,18.7,15.2,18.4,15.2z M15.9,15.2c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5C16.4,15,16.2,15.2,15.9,15.2z"></path>
              </svg>
              WeChat
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavigateToLogin();
              }}
              className="font-medium text-primary hover:text-primary-hover transition-colors"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;