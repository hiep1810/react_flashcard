import { Menu, Plus, User, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { flashcardSets } from '@/data/flashcards'
import Link from 'next/link'

interface HeaderProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  onSelectCard: (index: number) => void
}

export function Header({ isOpen, setIsOpen, onSelectCard }: HeaderProps) {
  return (
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
              {flashcardSets.map((set, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => onSelectCard(index)}
                >
                  {set.category}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard">
          <h1 className="text-xl font-bold text-primary cursor-pointer">FlashLingo</h1>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </Button>
        </Link>
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
  )
} 