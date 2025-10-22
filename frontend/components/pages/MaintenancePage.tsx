import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export const MaintenancePage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      // Reload the page to show the authenticated content
      window.location.reload();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#284139] to-[#1a2b25] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="Beyond MediSpa"
              className="h-16 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Maintenance Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#284139] mb-4">
              We're Getting Ready
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Our website is currently under maintenance and will be launching soon.
            </p>
            <p className="text-gray-500">
              We're working hard to bring you an enhanced experience. Thank you for your patience!
            </p>
          </div>

          {/* Decorative Line */}
          <div className="border-t border-[#C6A77D] my-8"></div>

          {/* Contact Information */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-[#284139] mb-4">
              Contact Us
            </h2>
            <div className="space-y-3 text-gray-600">
              <div>
                <p className="font-medium text-[#284139]">London Clinic</p>
                <p>145-147 Harley Street, London W1G 6DD</p>
                <p>Tel: <a href="tel:+442072241555" className="text-[#C6A77D] hover:underline">020 7224 1555</a></p>
              </div>
              <div className="mt-4">
                <p className="font-medium text-[#284139]">Edinburgh Clinic</p>
                <p>50 Melville Street, Edinburgh EH3 7HF</p>
                <p>Tel: <a href="tel:+441312268828" className="text-[#C6A77D] hover:underline">0131 226 8828</a></p>
              </div>
            </div>
          </div>

          {/* Login Section */}
          {!showLoginForm ? (
            <div className="text-center">
              <button
                onClick={() => setShowLoginForm(true)}
                className="text-sm text-gray-400 hover:text-[#C6A77D] transition-colors"
              >
                Staff/QA Access
              </button>
            </div>
          ) : (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-4 text-center">
                QA Access Login
              </h3>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter QA password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A77D] focus:border-transparent outline-none"
                    autoComplete="off"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-[#C6A77D] text-white py-2 px-4 rounded-lg hover:bg-[#b89670] transition-colors font-medium"
                >
                  Access Site
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowLoginForm(false);
                    setPassword('');
                    setError('');
                  }}
                  className="w-full text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <p className="text-center text-white/60 text-sm mt-6">
          &copy; {new Date().getFullYear()} Beyond MediSpa. All rights reserved.
        </p>
      </div>
    </div>
  );
};
