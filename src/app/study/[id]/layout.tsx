"use client"

import { Header } from '@/components/Header'
import { useState } from 'react'

export default function StudyLayout({
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
        {children}
    </div>
  )
} 