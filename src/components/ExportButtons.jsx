import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const ExportButtons = ({ data }) => {
  const handleCSV = () => {
    
    if (!data || data.length === 0) 
      return;

    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.csv';
    a.click();
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePDF = () => {
    const doc = new jsPDF();
    doc.text('ReLife Admin Report', 14, 16);
    autoTable(doc, {
      head: [Object.keys(data[0])],
      body: data.map(row => Object.values(row))
    });
    doc.save('report.pdf');
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        onClick={handleCSV}
      >
        Download CSV
      </button>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        onClick={handlePDF}
      >
        Download PDF
      </button>
    </div>
  );
}
