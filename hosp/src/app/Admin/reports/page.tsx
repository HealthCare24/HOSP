import React from 'react'
import Layout from '../components/Layout'
import { FileText, Download } from 'lucide-react'

const Reports: React.FC = () => {
  const reports = [
    { name: 'Daily Sales Report', type: 'sales', period: 'daily' },
    { name: 'Weekly Sales Report', type: 'sales', period: 'weekly' },
    { name: 'Monthly Sales Report', type: 'sales', period: 'monthly' },
    { name: 'Low Stock Report', type: 'inventory', period: 'current' },
    { name: 'Out of Stock Report', type: 'inventory', period: 'current' },
    { name: 'Customer Activity Report', type: 'customer', period: 'monthly' },
  ]

  const handleDownload = (report) => {
    // Implement report generation and download logic here
    console.log(`Downloading ${report.name}`)
  }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{report.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {report.type.charAt(0).toUpperCase() + report.type.slice(1)} report for {report.period} period
            </p>
            <button
              onClick={() => handleDownload(report)}
              className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Report
            </button>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Reports

