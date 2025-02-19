import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { flashcardSets, flashcards } from "@/data/flashcards"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Bộ thẻ ghi nhớ của bạn</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashcardSets.map((set, index) => (
          <Link href={`/study/${set.id}`} key={index}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{set.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {set.description}
                </p>
                <p className="text-md">
                  {flashcards.filter(card => card.setId === set.id).length} flashcards
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 