export interface FlashCard {
  id: number
  question: string
  answer: string
  setId: number
  hashtag: string
}

export class FlashCard {
  id: number
  question: string
  answer: string
  setId: number
  hashtag: string

  constructor(flashCard: FlashCard) {
    this.id = flashCard.id
    this.question = flashCard.question
    this.answer = flashCard.answer
    this.setId = flashCard.setId
    this.hashtag = flashCard.hashtag
  }
}