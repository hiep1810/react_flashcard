import { Card, CardContent } from "@/components/ui/card"

interface FlashcardProps {
  category: string
  question: string
  answer: string
  isFlipped: boolean
  onFlip: () => void
}

export function Flashcard({ category, question, answer, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div className="relative w-full h-[300px] [perspective:1000px]">
      <div
        className="w-full h-full absolute transition-all duration-500 [transform-style:preserve-3d]"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : ''
        }}
      >
        <Card 
          className="absolute w-full h-full cursor-pointer [backface-visibility:hidden]"
          onClick={onFlip}
        >
          <CardContent className="h-full flex flex-col p-6">
            <div className="text-sm font-medium text-primary mb-4">{category}</div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4 text-center">Question</h3>
              <p className="text-center text-lg">{question}</p>
            </div>
            <div className="text-sm text-muted-foreground text-center mt-4">
              Click to flip
            </div>
          </CardContent>
        </Card>
        <Card 
          className="absolute w-full h-full cursor-pointer [backface-visibility:hidden] [transform:rotateY(180deg)]"
          onClick={onFlip}
        >
          <CardContent className="h-full flex flex-col p-6">
            <div className="text-sm font-medium text-primary mb-4">{category}</div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4 text-center">Answer</h3>
              <p className="whitespace-pre-line text-center leading-relaxed">{answer}</p>
            </div>
            <div className="text-sm text-muted-foreground text-center mt-4">
              Click to flip back
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 