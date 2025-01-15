import React from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'

const Customers: React.FC = () => {
  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Total Orders', accessor: 'totalOrders' },
    { header: 'Total Spent', accessor: 'totalSpent' },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <button
          onClick={() => handleViewActivity(row.id)}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        >
          View Activity
        </button>
      ),
    },
  ]

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', totalOrders: 5, totalSpent: '$500.00' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', totalOrders: 3, totalSpent: '$300.00' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-555-5555', totalOrders: 7, totalSpent: '$750.00' },
  ]

  const handleViewActivity = (id: number) => {
    // Implement view activity logic here
    console.log(`View activity for customer ${id}`)
  }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Customers</h2>
      <Table columns={columns} data={data} />
    </Layout>
  )
}

export default Customers

