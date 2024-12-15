"use client"

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Header } from '@/components/Header'
import { Flashcard } from '@/components/Flashcard'
import { flashcardSets } from '@/data/flashcards'

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleFlip = () => setIsFlipped(!isFlipped)

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcardSets.length)
    setIsFlipped(false)
  }

  const previousCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcardSets.length) % flashcardSets.length)
    setIsFlipped(false)
  }

  const card = flashcardSets[currentCard]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        onSelectCard={(index) => {
          setCurrentCard(index)
          setIsOpen(false)
          setIsFlipped(false)
        }}
      />
      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-4 text-sm font-medium text-muted-foreground">
            Card {currentCard + 1} of {flashcardSets.length}
          </div>
          <Flashcard
            category={card.category}
            question={card.question}
            answer={card.answer}
            isFlipped={isFlipped}
            onFlip={toggleFlip}
          />
        </div>
        <div className="flex justify-between w-full max-w-md mt-6 gap-4">
          <Button 
            onClick={previousCard} 
            variant="outline"
            className="flex-1"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button 
            onClick={nextCard} 
            variant="outline"
            className="flex-1"
          >
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}