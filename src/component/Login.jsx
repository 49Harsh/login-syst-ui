import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Project", "About-Us", "Contact", "Footer"];

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <a key={index} href="#" className="hover:text-blue-200">{item}</a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 text-white">
          {navItems.map((item, index) => (
            <a key={index} href="#" className="block py-2 px-4 hover:bg-blue-600">{item}</a>
          ))}
        </div>
      )}

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
          <form onChange={handleForm} className="space-y-4">
            <div>
              <label htmlFor="newnames" className="block text-sm font-medium text-gray-700">Please enter your name</label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="name"
                id="newnames"
                value={formData.name}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Please enter your password</label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="password"
                name="password"
                id="password"
                value={formData.password}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;