import React from 'react'

interface MetricCardProps {
  title: string
  value: string
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
    </div>
  )
}

export default MetricCard

