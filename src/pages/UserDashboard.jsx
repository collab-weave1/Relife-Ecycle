import { Globe, Package, Sprout, TreePine } from 'lucide-react';
import React, { useState } from 'react';

const SectionHeading = ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{children}</h2>
);

const ExportButtons = () => (
    <div className="flex space-x-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Export PDF
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
            Export CSV
        </button>
    </div>
);

export const UserDashboard = ({ onLogout, onNavigate }) => {
    const [sampleData] = useState([
        { id: 1, device: 'iPhone 12', brand: 'Apple', status: 'Recycled', date: '2024-06-01', value: 8500, co2Saved: 12 },
        { id: 2, device: 'MacBook Pro', brand: 'Apple', status: 'Refurbished', date: '2024-06-15', value: 25000, co2Saved: 45 },
        { id: 3, device: 'Samsung Smart TV', brand: 'Samsung', status: 'Recycled', date: '2024-06-20', value: 15000, co2Saved: 68 },
        { id: 4, device: 'iPad Air', brand: 'Apple', status: 'Pending', date: '2024-06-25', value: 12000, co2Saved: 25 },
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Recycled': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
            case 'Refurbished': return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white';
            case 'Pending': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getDeviceIcon = (device) => {
        if (device.toLowerCase().includes('phone') || device.toLowerCase().includes('iphone')) 
            return <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                    </svg>;
        if (device.toLowerCase().includes('laptop') || device.toLowerCase().includes('macbook')) 
            return <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>;
        if (device.toLowerCase().includes('tv')) 
            return <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m4 0H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1z" />
                    </svg>;
        if (device.toLowerCase().includes('ipad') || device.toLowerCase().includes('tablet')) 
            return <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                    </svg>;
        return '🔧';
    };

    const totalValue = sampleData.reduce((sum, item) => sum + item.value, 0);
    const totalCO2 = sampleData.reduce((sum, item) => sum + item.co2Saved, 0);
    const completedItems = sampleData.filter(item => item.status !== 'Pending').length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ml-16 mt-16">
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center pl-2">
                                <span className="text-white font-bold text-xl"><Sprout className="w-5 h-5 mr-2" /></span>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Welcome!</h1>
                                <p className="text-gray-600">Make a difference with sustainable e-waste management</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-green-700">Eco-Warrior</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Transform Your E-Waste Impact</h2>
                                <p className="text-lg text-blue-100 mb-6">
                                    Turn your old electronics into environmental action and earn money while doing it!
                                </p>
                                <button
                                    onClick={() => onNavigate('pickup-request')}
                                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                                >
                                    <span className="text-2xl"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                                    </svg></span>
                                    <span>Schedule E-Waste Pickup</span>
                                </button>
                            </div>
                            <div className="text-center lg:text-right">
                                <div className="text-8xl mb-4 opacity-50">♻️</div>
                                <p className="text-lg text-blue-100">
                                    Join thousands making a difference
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Items</p>
                                <p className="text-3xl font-bold text-gray-900">{sampleData.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center pl-2">
                                <span className="text-white text-xl">
                                    <Package className="w-5 h-5 mr-2" />
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-gray-500">Devices processed</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Value</p>
                                <p className="text-3xl font-bold text-green-600">₹{totalValue.toLocaleString()}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl rounded-full flex items-center justify-center pl-2">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-gray-500">Earned from recycling</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">CO₂ Saved</p>
                                <p className="text-3xl font-bold text-blue-600">{totalCO2} kg</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-xl flex items-center justify-center pl-2">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-gray-500">Environmental impact</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Completed</p>
                                <p className="text-3xl font-bold text-purple-600">{completedItems}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl rounded-full flex items-center justify-center pl-2">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-gray-500">Successfully processed</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Your E-Waste History</h2>
                                <p className="text-sm text-gray-600 mt-1">Track your environmental impact and earnings</p>
                            </div>
                            <ExportButtons />
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 rounded-lg">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CO₂ Saved</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {sampleData.map(item => (
                                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-2xl">{getDeviceIcon(item.device)}</span>
                                                    <span className="font-medium text-gray-900">{item.device}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-gray-900">{item.brand}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="font-semibold text-green-600">₹{item.value.toLocaleString()}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="font-medium text-blue-600">{item.co2Saved} kg</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                                {new Date(item.date).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
                            <span className="text-white text-2xl pl-2"><Sprout className="w-5 h-5 mr-2" /></span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Environmental Impact</h3>
                        <p className="text-gray-600 mb-6">Every device you recycle makes a difference!</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="text-3xl mb-2 pl-2 flex justify-center"><Globe className="w-5 h-5 mr-2 text-blue-600" /></div>
                                <h4 className="font-semibold text-gray-900">Carbon Footprint</h4>
                                <p className="text-sm text-gray-600">Reduced by {totalCO2} kg CO₂</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="text-3xl mb-2">♻️</div>
                                <h4 className="font-semibold text-gray-900">Materials Recycled</h4>
                                <p className="text-sm text-gray-600">{completedItems} devices processed</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="text-3xl mb-2 flex justify-center"><TreePine className="w-5 h-5 mr-2 text-green-600" /></div>
                                <h4 className="font-semibold text-gray-900">Trees Saved</h4>
                                <p className="text-sm text-gray-600">Equivalent to {Math.round(totalCO2 / 10)} trees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};