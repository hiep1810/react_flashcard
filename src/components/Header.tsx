import { Menu, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'


interface HeaderProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  onSelectCard: (index: number) => void
}

export function Header({ isOpen, setIsOpen, onSelectCard }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="flex h-14 items-center px-4 gap-4">
      <Button variant="ghost" size="icon" className="shrink-0">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Menu</span>
      </Button>
      <Link href="#" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground grid place-items-center font-semibold">
          Q
        </div>
      </Link>
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-md flex items-center gap-2 px-3 rounded-md border bg-muted">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <Input
            type="search"
            placeholder="Find it faster with a search"
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
      <Button size="icon" className="shrink-0">
        <Plus className="h-5 w-5" />
        <span className="sr-only">Add new</span>
      </Button>
      <Avatar className="h-8 w-8 border-2 rounded-full">
        <AvatarFallback className="h-full w-full grid place-items-center rounded-full">T</AvatarFallback>
      </Avatar>
    </div>
  </header>
  )
} 