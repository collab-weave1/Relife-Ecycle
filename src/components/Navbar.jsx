import React, { useState } from 'react';
import {
    Menu,
    X,
    Home,
    ShoppingCart,
    Settings,
    User,
    Sun,
    Moon,
    LogOut,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const Navbar = ({ role, onLogout, onNavigate, onDarkToggle, isDark }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [activeItem, setActiveItem] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    

    const roleLabel = {
        admin: 'Admin Portal',
        user: 'User Portal',
        recycler: 'Recycler Portal'
    }[role];

    const menuItems = [
        { id: `${role}-dashboard`, label: 'Dashboard', icon: Home, badge: null },
        { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart, badge: null },
        { id: 'profile', label: 'Profile', icon: User, badge: null },
        { id: 'settings', label: 'Settings', icon: Settings, badge: null },
    ];

    const handleNavigate = (route) => {
        setSidebarOpen(false);
        onNavigate(route);
    };

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
        handleNavigate(itemId);
    };

    return (
        <>
            <nav className="bg-gradient-to-r from-green-600 to-blue-600 shadow-lg fixed top-0 left-0 right-0 z-50">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg"
                            >
                                <Menu className="w-6 h-6" />
                            </button>

                            <button
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg"
                            >
                                <Menu className="w-6 h-6" />
                            </button>

                            <div className="bg-white/20 rounded-lg p-2">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4m0 5c0 2.21-3.79 4-8 4s-8-1.79-8-4" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-white">ReLife</h1>
                                <p className="text-green-100 text-sm">{roleLabel}</p>
                            </div>
                        </div>

                        <button
                            onClick={onDarkToggle}
                            className="hidden md:block text-white hover:bg-white/20 p-2 rounded-lg"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {sidebarOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg fixed top-20 left-0 right-0 z-40">
                    <div className="p-4">
                        <button
                            onClick={() => handleNavigate(role + '-dashboard')}
                            className="flex items-center w-full px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2"
                        >
                            <Home className='w-5 h-5 mr-3 text-green-600'/> 
                            Dashboard
                        </button>
                        <button
                            onClick={() => handleNavigate('marketplace')}
                            className="flex items-center w-full px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2"
                        >
                            <ShoppingCart className='w-5 h-5 mr-3 text-green-600'/> 
                            Marketplace
                        </button>
                        <button
                            onClick={onDarkToggle}
                            className="flex items-center w-full px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2"
                        >
                            {isDark ? <Sun className="w-5 h-5 mr-3 text-yellow-500"/> : <Moon className="w-5 h-5 mr-3 text-blue-500"/>}
                            Theme
                        </button>
                        <button
                            onClick={onLogout}
                            className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                        >
                            <LogOut className="w-5 h-5 mr-3" /> 
                            Logout
                        </button>
                    </div>
                </div>
            )}

            <div
                className={`${isCollapsed ? 'w-20' : 'w-64'
                    } transition-all duration-300 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-700 flex-col fixed left-0 top-20 bottom-0 z-30 hidden md:flex`}
            >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        {!isCollapsed && (
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">R</span>
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white">{role.toUpperCase()}</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{roleLabel}</p>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleItemClick(item.id)}
                                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'
                                    } py-3 px-4 rounded-lg transition-all duration-200 ${isActive
                                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-l-4 border-green-500'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {!isCollapsed && (
                                    <>
                                        <span className="ml-3 font-medium">{item.label}</span>
                                        {item.badge && (
                                            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                                {item.badge}
                                            </span>
                                        )}
                                    </>
                                )}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={onLogout}
                        className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'
                            } py-3 px-4 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200`}
                    >
                        <LogOut className="w-5 h-5" />
                        {!isCollapsed && <span className="ml-3 font-medium">Logout</span>}
                    </button>
                    
                    {!isCollapsed && (
                        <button
                            onClick={onDarkToggle}
                            className="w-full flex items-center justify-start py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 mt-2"
                        >
                            {isDark ? <Sun className="w-5 h-5 mr-3 text-yellow-500"/> : <Moon className="w-5 h-5 mr-3 text-blue-500"/>}
                            <span className="font-medium">Theme</span>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;