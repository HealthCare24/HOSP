import React, { useState } from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Modal from '../components/Modal'
import ProductForm from '../components/ProductForm'

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const columns = [
    { header: 'Product Name', accessor: 'name' },
    { header: 'Category', accessor: 'category' },
    { header: 'Price', accessor: 'price' },
    { header: 'Stock Quantity', accessor: 'stock' },
    { header: 'Status', accessor: 'status' },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(row)}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200"
          >
            Delete
          </button>
        </div>
      ),
    },
  ]

  const data = [
    { id: 1, name: 'Product 1', category: 'Category A', price: '$10.99', stock: 100, status: 'Active' },
    { id: 2, name: 'Product 2', category: 'Category B', price: '$15.99', stock: 50, status: 'Active' },
    { id: 3, name: 'Product 3', category: 'Category A', price: '$8.99', stock: 75, status: 'Inactive' },
  ]

  const handleAdd = () => {
    setEditingProduct(null)
    setIsModalOpen(true)
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    // Implement delete logic here
    console.log(`Delete product with id: ${id}`)
  }

  const handleSubmit = (product) => {
    // Implement add/edit logic here
    console.log('Submit product:', product)
    setIsModalOpen(false)
  }

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Manage Products</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div>
      <Table columns={columns} data={data} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProductForm onSubmit={handleSubmit} initialData={editingProduct} />
      </Modal>
    </Layout>
  )
}

export default Products

