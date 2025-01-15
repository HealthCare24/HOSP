import React from 'react'
import { Menu, Bell, LogOut } from 'lucide-react'

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <button
          className="text-gray-500 dark:text-gray-400 focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white ml-4">HOSP Admin</h1>
      </div>
      <div className="flex items-center">
        <button className="flex mx-4 text-gray-600 dark:text-gray-300 focus:outline-none">
          <Bell className="h-6 w-6" />
        </button>
        <div className="relative">
          <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none">
            <img
              className="h-full w-full object-cover"
              src="/placeholder.svg"
              alt="Your avatar"
            />
          </button>
        </div>
        <button className="flex mx-4 text-gray-600 dark:text-gray-300 focus:outline-none">
          <LogOut className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}

export default Header

