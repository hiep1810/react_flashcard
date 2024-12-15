"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Flashcard } from '@/components/Flashcard'
import { flashcardSets } from '@/data/flashcards'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'

export default function StudyPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const setIndex = parseInt(params.id)

  const [mounted, setMounted] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (isNaN(setIndex) || setIndex < 0 || setIndex >= flashcardSets.length) {
    router.push('/dashboard')
    return null
  }

  const card = flashcardSets[setIndex]

  const toggleFlip = () => setIsFlipped(!isFlipped)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSelectCard={() => { }}
      />

      <div className="container mx-auto max-w-2xl">

        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push('/dashboard')}
            className="mb-4"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
          </Button>
          <h1 className="text-2xl font-bold">{card.category}</h1>
        </div>

        <Flashcard
          category={card.category}
          question={card.question}
          answer={card.answer}
          isFlipped={isFlipped}
          onFlip={toggleFlip}
        />
      </div>
    </div>
  )
} 