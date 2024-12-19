'use client'

import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function PharmacyLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSidebarToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="flex-1 flex">
        <div 
          className={`
            ${sidebarOpen ? 'w-64' : 'w-0'} 
            transition-all duration-300 ease-in-out 
            fixed inset-y-0 left-0 z-40 bg-white border-r overflow-hidden
            lg:relative
          `}
        >
          <Sidebar onClose={toggleSidebar} />
        </div>
        <main className={`flex-1 p-6 transition-all duration-300`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

