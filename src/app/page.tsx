"use client"

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Menu, Plus, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"


const flashcardSets = [
    {
      category: "Present Simple",
      question: "Công thức của thì hiện tại đơn?",
      answer: "(+) S + V(s/es) + O\n(-) S + don't/doesn't + V + O\n(?) Do/Does + V + O?"
    },
    {
      category: "Present Continuous",
      question: "Công thức của thì hiện tại tiếp diễn?",
      answer: "(+) S + am/is/are + Ving + O\n(-) S + am/is/are + not + Ving + O\n(?) Am/is/are + S + Ving + O?"
    },
    {
      category: "Present Perfect",
      question: "Công thức của thì hiện tại hoàn thành?",
      answer: "(+) S + have/has + P2 + O\n(-) S + have/has + not + P2 + O\n(?) Have/has + S + P2 + O?"
    },
    {
      category: "Past Simple",
      question: "Công thức của thì quá khứ đơn?",
      answer: "(+) S + V2/Ved + O\n(-) S + didn't + V + O\n(?) Did + S + V + O?"
    },
    {
      category: "Past Continuous",
      question: "Công thức của thì quá khứ tiếp diễn?",
      answer: "(+) S + was/were + Ving + O\n(-) S + was/were + not + Ving + O\n(?) Was/were + S + Ving + O?"
    },
    {
      category: "Future Simple",
      question: "Công thức của thì tương lai đơn?",
      answer: "(+) S + shall/will + V + O\n(-) S + shall/will + not + V + O\n(?) Shall/will + S + V + O?"
    }
]

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>Flashcard Sets</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                {Object.keys(flashcardSets).map((set) => (
                  <Button
                    key={set}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {}}
                  >
                    {set}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-bold text-primary">FlashLingo</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Plus className="h-5 w-5" />
            <span className="sr-only">Add flashcard</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User profile</span>
          </Button>
        </div>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-4 text-sm font-medium text-muted-foreground">
            Card {currentCard + 1} of {flashcardSets.length}
          </div>
          <div className="relative w-full h-[300px] [perspective:1000px]">
            <div
              className="w-full h-full absolute transition-all duration-500 [transform-style:preserve-3d]"
              style={{
                transform: isFlipped ? 'rotateY(180deg)' : ''
              }}
            >
              <Card 
                className="absolute w-full h-full cursor-pointer [backface-visibility:hidden]"
                onClick={toggleFlip}
              >
                <CardContent className="h-full flex flex-col p-6">
                  <div className="text-sm font-medium text-primary mb-4">{card.category}</div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold mb-4 text-center">Question</h3>
                    <p className="text-center text-lg">{card.question}</p>
                  </div>
                  <div className="text-sm text-muted-foreground text-center mt-4">
                    Click to flip
                  </div>
                </CardContent>
              </Card>
              <Card 
                className="absolute w-full h-full cursor-pointer [backface-visibility:hidden] [transform:rotateY(180deg)]"
                onClick={toggleFlip}
              >
                <CardContent className="h-full flex flex-col p-6">
                  <div className="text-sm font-medium text-primary mb-4">{card.category}</div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold mb-4 text-center">Answer</h3>
                    <p className="whitespace-pre-line text-center leading-relaxed">{card.answer}</p>
                  </div>
                  <div className="text-sm text-muted-foreground text-center mt-4">
                    Click to flip back
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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