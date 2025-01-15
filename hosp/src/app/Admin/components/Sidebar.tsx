import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { X, LayoutDashboard, Package, ShoppingCart, Users, FileText, Settings } from 'lucide-react'

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const router = useRouter()

  const navigation = [
    { name: 'Dashboard', href: '/Admin/dashboard', icon: LayoutDashboard },
    { name: 'Products', href: '/Admin/products', icon: Package },
    { name: 'Orders', href: '/Admin/orders', icon: ShoppingCart },
    { name: 'Customers', href: '/Admin/customers', icon: Users },
    { name: 'Reports', href: '/Admin/reports', icon: FileText },
    { name: 'Settings', href: '/Admin/settings', icon: Settings },
  ];  

  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 overflow-y-auto transition duration-300 transform ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between px-4 py-6">
        <span className="text-2xl font-semibold text-gray-800 dark:text-white">HOSP</span>
        <button
          className="text-gray-500 dark:text-gray-400 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-10">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-6 py-2 mt-4 ${
              router.pathname === item.href
                ? 'text-gray-100 bg-blue-600 dark:bg-blue-800'
                : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="mx-4">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar

