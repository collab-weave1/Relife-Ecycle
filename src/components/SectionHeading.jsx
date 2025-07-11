import React from 'react';

export const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2">{subtitle}</p>}
    </div>
  );
}