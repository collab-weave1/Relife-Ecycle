import { BarChart3 } from 'lucide-react';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
  { month: 'Jan', devices: 120 },
  { month: 'Feb', devices: 200 },
  { month: 'Mar', devices: 150 },
  { month: 'Apr', devices: 300 },
  { month: 'May', devices: 280 },
  { month: 'Jun', devices: 350 },
];

export const StatChart = () => {
  return (
    <div className="shadow rounded p-4">
      <h3 className="text-lg font-semibold mb-4"><BarChart3 className="w-5 h-5 mr-2" /> Devices Processed Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sampleData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="devices" fill="#4ade80" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
