"use client"

import { Header } from '@/components/Header'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSelectCard={() => { }}
      />
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  )
} 