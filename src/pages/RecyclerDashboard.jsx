import { Calendar, Clipboard, Clock, DollarSign, Laptop, MapPin, Settings, Smartphone, Truck, Tv } from 'lucide-react';
import React, { useState } from 'react';

export const RecyclerDashboard = ({ onNavigate }) => {
    const [requests] = useState([
        { id: 1, device: 'Smart TV', brand: 'Samsung', status: 'Waiting', submittedDate: '2024-06-15', value: 2800, location: 'Koramangala' },
        { id: 2, device: 'Laptop', brand: 'Dell', status: 'In Progress', submittedDate: '2024-06-18', value: 3200, location: 'Whitefield' },
        { id: 3, device: 'iPhone', brand: 'Apple', status: 'Completed', submittedDate: '2024-06-20', value: 1500, location: 'Indiranagar' },
        { id: 4, device: 'Tablet', brand: 'iPad', status: 'Waiting', submittedDate: '2024-06-22', value: 1800, location: 'HSR Layout' },
    ]);

    const handleClick = (request) => {
        if (request.status !== 'Completed') {
            onNavigate('recycler-route');
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Waiting': return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg';
            case 'In Progress': return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg';
            case 'Completed': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getButtonStyle = (status) => {
        const baseStyle = "w-full text-left transition-all duration-300 transform group hover:scale-[1.02]";
        
        switch (status) {
            case 'Waiting':
                return `${baseStyle} hover:shadow-xl cursor-pointer bg-gradient-to-br from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 border-l-4 border-yellow-400`;
            case 'In Progress':
                return `${baseStyle} hover:shadow-xl cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-l-4 border-blue-500`;
            case 'Completed':
                return `${baseStyle} hover:shadow-md cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-l-4 border-green-500`;
            default:
                return `${baseStyle} hover:shadow-lg cursor-pointer`;
        }
    };

    const getDeviceIcon = (device) => {
        switch (device.toLowerCase()) {
            case 'smart tv': 
                return <Tv className="w-5 h-5 mr-2" />;
            case 'laptop': 
                return <Laptop className="w-5 h-5 mr-2" />;
            case 'iphone': 
                return <Smartphone className="w-5 h-5 mr-2" />;
            case 'tablet': 
                return <Smartphone className="w-5 h-5 mr-2" />;
            default: 
                return <Settings className="w-5 h-5 mr-2" />;
        }
    };

    const totalValue = requests.reduce((sum, req) => sum + req.value, 0);
    const completedValue = requests.filter(r => r.status === 'Completed').reduce((sum, req) => sum + req.value, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ml-16 mt-16">
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">♻️</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Recycler Dashboard</h1>
                                <p className="text-sm text-gray-500">Manage your e-waste collection requests</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-green-700">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Requests</p>
                                <p className="text-3xl font-bold text-gray-900">{requests.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl ml-2"><Clipboard className="w-5 h-5 mr-2" /></span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-sm text-gray-500">Updated just now</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Pending Pickup</p>
                                <p className="text-3xl font-bold text-yellow-600">{requests.filter(r => r.status === 'Waiting').length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl ml-2"><Clock className="w-5 h-5 mr-2" /></span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-sm text-gray-500">Requires attention</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">In Progress</p>
                                <p className="text-3xl font-bold text-blue-600">{requests.filter(r => r.status === 'In Progress').length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl ml-2"><Truck className="w-5 h-5 mr-2" /></span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-sm text-gray-500">On the way</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Value</p>
                                <p className="text-3xl font-bold text-green-600">₹{totalValue.toLocaleString()}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl ml-2"><DollarSign className="w-5 h-5 mr-2" /></span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-sm text-gray-500">Earned: ₹{completedValue.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900">Collection Requests</h2>
                        <p className="text-sm text-gray-600 mt-1">Click on any request to view details and start collection</p>
                    </div>
                    
                    <div className="p-6">
                        <div className="space-y-4">
                            {requests.map(request => (
                                <button
                                    key={request.id}
                                    className={getButtonStyle(request.status)}
                                    onClick={() => handleClick(request)}
                                >
                                    <div className="flex items-center justify-between p-6 rounded-xl">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-4xl">
                                                {getDeviceIcon(request.device)}
                                            </div>
                                            <div className="text-left">
                                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-gray-800">
                                                    {request.device} - {request.brand}
                                                </h3>
                                                <div className="flex items-center space-x-4 mt-1">
                                                    <p className="flex justify-center text-sm text-gray-600">
                                                        <MapPin className="w-5 h-5 mr-2" /> {request.location}
                                                    </p>
                                                    <p className="flex justify-center text-sm text-gray-600">
                                                        <Calendar className="w-5 h-5 mr-2" /> {new Date(request.submittedDate).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <p className="text-sm font-semibold text-green-600 mt-1">
                                                    Value: ₹{request.value.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(request.status)}`}>
                                                {request.status}
                                            </span>
                                            {request.status !== 'Completed' && (
                                                <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold">Ready to collect more e-waste?</h3>
                            <p className="text-blue-100 mt-2">Help the environment while earning money</p>
                        </div>
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                            View Map
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};