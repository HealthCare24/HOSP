import React, { useState } from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'

const Orders: React.FC = () => {
  const [filters, setFilters] = useState({
    dateRange: '',
    status: '',
    customer: '',
  })

  const columns = [
    { header: 'Order ID', accessor: 'id' },
    { header: 'Customer Name', accessor: 'customerName' },
    { header: 'Date', accessor: 'date' },
    { header: 'Total Amount', accessor: 'totalAmount' },
    { header: 'Status', accessor: 'status' },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <button
          onClick={() => handleViewDetails(row.id)}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        >
          View Details
        </button>
      ),
    },
  ]

  const data = [
    { id: '001', customerName: 'John Doe', date: '2023-05-01', totalAmount: '$150.00', status: 'Shipped' },
    { id: '002', customerName: 'Jane Smith', date: '2023-05-02', totalAmount: '$75.50', status: 'Pending' },
    { id: '003', customerName: 'Bob Johnson', date: '2023-05-03', totalAmount: '$200.25', status: 'Delivered' },
  ]

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const handleViewDetails = (id: string) => {
    // Implement view details logic here
    console.log(`View details for order ${id}`)
  }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Orders</h2>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Date Range
          </label>
          <input
            type="date"
            id="dateRange"
            name="dateRange"
            value={filters.dateRange}
            onChange={handleFilterChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <div>
          <label htmlFor="customer" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Customer Name
          </label>
          <input
            type="text"
            id="customer"
            name="customer"
            value={filters.customer}
            onChange={handleFilterChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Search by customer name"
          />
        </div>
      </div>
      <Table columns={columns} data={data} />
    </Layout>
  )
}

export default Orders

