import React, { useEffect, useState } from 'react';
import { fetchAdminStats } from '../api/adminData';
import { SectionHeading } from '../components/SectionHeading';
import { StatChart } from '../components/StatChart';
import { ExportButtons } from '../components/ExportButtons';
import { BarChart3, Download, Package, Smartphone, Sprout, Users } from 'lucide-react';

export const AdminDashboard = ({ onLogout, onNavigate }) => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAdminStats().then(data => {
            setStats(data);
            setLoading(false);
        });
    }, []);

    const reportData = stats
        ? [
            { metric: 'Total E-Waste Collected', value: stats.eWasteCollected },
            { metric: 'EPR Reports Logged', value: stats.eprReports },
            { metric: 'Registered Recyclers', value: stats.recyclers },
            { metric: 'User Engagement', value: stats.users },
            { metric: 'CO₂ Saved', value: stats.co2Saved },
            { metric: 'Refurbished Devices Sold', value: stats.refurbishedSold },
        ]
        : [];

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600 mx-auto mb-6"></div>
                    <p className="text-gray-700 text-lg font-medium">Loading admin statistics...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-6 min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="p-8 pt-20 pl-6 ml-16">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="text-center mb-8">
                        <SectionHeading title="Admin Dashboard" subtitle="Overview & Reports" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <AdminCard 
                            title="Total E-Waste Collected" 
                            stat={stats.eWasteCollected}
                            icon={<Package className="w-5 h-5 mr-2" />}
                            color="bg-teal-600"
                        />
                        <AdminCard 
                            title="EPR Reports Logged" 
                            stat={stats.eprReports}
                            icon={<BarChart3 className="w-5 h-5 mr-2" />}
                            color="bg-cyan-600"
                        />
                        <AdminCard 
                            title="Registered Recyclers" 
                            stat={stats.recyclers}
                            icon="♻️"
                            color="bg-pink-600"
                        />
                        <AdminCard 
                            title="User Engagement" 
                            stat={stats.users}
                            icon={<Users className="w-5 h-5 mr-2" />}
                            color="bg-red-600"
                        />
                        <AdminCard 
                            title="CO₂ Saved" 
                            stat={stats.co2Saved}
                            icon={<Sprout className="w-5 h-5 mr-2" />}
                            color="bg-emerald-600"
                        />
                        <AdminCard 
                            title="Refurbished Devices Sold" 
                            stat={stats.refurbishedSold}
                            icon={<Smartphone className="w-5 h-5 mr-2" />}
                            color="bg-purple-600"
                        />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100">
                        <StatChart />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-blue-500 rounded-full p-2">
                                <span className="text-white text-xl"><Download className="w-5 h-5" /></span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Download Reports</h2>
                        </div>
                        <ExportButtons data={reportData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const AdminCard = ({ title, stat, icon, color }) => (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
        <div className={`${color} p-4 text-white`}>
            <div className="flex items-center justify-between">
                <span className="text-2xl">{icon}</span>
                <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-700 group-hover:text-gray-800">{title}</h3>
            <p className="text-3xl font-bold text-gray-800">{stat}</p>
        </div>
    </div>
);