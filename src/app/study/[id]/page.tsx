"use client"
import { Menu, MoreHorizontal, Plus, Search, Share2, Volume2 } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

export default function FlashcardPage() {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <main className="container py-6">
      <div className="mb-6">
        <nav className="flex items-center text-sm mb-2">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            N4
          </Link>
        </nav>
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight">N4 Vocabulary</h1>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="gap-2">
              <span className="text-primary">Saved</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[300px] [perspective:1000px]">
      <div
        className="w-full h-full absolute transition-all duration-500 [transform-style:preserve-3d]"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : ''
        }}
      >
      <Card className="mb-4" onClick={() => setIsFlipped(!isFlipped)}>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-20">
            <Button variant="ghost" className="gap-2 text-muted-foreground">
              Get a hint
            </Button>
            <Button variant="ghost" size="icon">
              <Volume2 className="h-4 w-4" />
              <span className="sr-only">Play sound</span>
            </Button>
          </div>
          <div className="text-center text-6xl mb-20">弟</div>
          <div className="bg-muted/50 rounded-lg p-2 text-sm text-center text-muted-foreground">
            <span className="inline-block align-middle mr-2">⌨️</span>
            Shortcut <span className="px-2 py-0.5 rounded bg-muted mx-1">Space</span> or click on the card to flip
          </div>
        </CardContent>
      </Card>
      </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <Button variant="outline" size="icon" className="rounded-full w-12 h-12 text-destructive">
          ✕
        </Button>
        <div className="text-sm font-medium">14 / 54</div>
        <Button variant="outline" size="icon" className="rounded-full w-12 h-12 text-primary">
          ✓
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon">
          ↺<span className="sr-only">Reset</span>
        </Button>
        <div className="flex-1">
          <div className="text-sm font-medium mb-2">Track progress</div>
          <Progress value={33} />
        </div>
        <Button variant="ghost" size="icon">
          ⚙️
          <span className="sr-only">Settings</span>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link
          href="#"
          className="flex flex-col items-center gap-2 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        >
          <div className="w-8 h-8 rounded bg-primary text-primary-foreground grid place-items-center">
            <span className="text-lg">🗂️</span>
          </div>
          <span className="font-medium">Flashcards</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-2 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        >
          <div className="w-8 h-8 rounded bg-primary text-primary-foreground grid place-items-center">
            <span className="text-lg">🔄</span>
          </div>
          <span className="font-medium">Learn</span>
        </Link>
      </div>
    </main>
  )
}

