import { Globe } from 'lucide-react';
import React, { useState } from 'react';

export const Login = ({ onLogin }) => {
    const [role, setRole] = useState('user');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        onLogin(role);
        setIsLoading(false);
    };

    return (
        <div className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://www.dotmagazine.online/_Resources/Persistent/e/8/6/6/e8660cd9a90ddc83b7c18718666f810178e78e01/Galeanu%20Mihai-1409544550.jpg-web.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
  
            <nav className="bg-gradient-to-r from-green-600 to-blue-600 shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4m0 5c0 2.21-3.79 4-8 4s-8-1.79-8-4" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white drop-shadow-lg">ReLife</h1>
                                <p className="text-white/80 text-sm">E-Waste Management Platform</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className="flex items-center mt-16 justify-center min-h-[calc(100vh-134px)] p-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 w-full max-w-md border border-white/20">
                    <div className="text-center mb-2">
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-20 h-20 mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-3xl"><Globe className="w-5 h-5" /></span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h2>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <label className="block text-sm font-semibold mb-3 text-gray-700">Select Your Role</label>
                            <div className="relative">
                                <select
                                    value={role}
                                    onChange={e => setRole(e.target.value)}
                                    className="w-full text-gray-700 bg-white border-2 border-gray-200 p-4 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all appearance-none cursor-pointer text-lg font-medium"
                                >
                                    <option value="user"> User</option>
                                    <option value="recycler"> Recycler</option>
                                    <option value="admin"> Admin</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                                    </div>
                        </div>

                        <button
                            onClick={handleLogin}
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                    <span>Logging in...</span>
                                </div>
                            ) : (
                                `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`
                            )}
                      </button>
                    </div>
                </div>
            </div>
        </div>
    );
}