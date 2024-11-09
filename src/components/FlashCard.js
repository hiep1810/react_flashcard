import React, { useState } from 'react';
import './FlashCard.css';

const flashcards = [
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

function FlashCard() {
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  const nextFlashcard = () => {
    setCurrentFlashcard((prev) => (prev + 1) % flashcards.length);
    setFlipped(false);
  }

  const previousFlashcard = () => {
    setCurrentFlashcard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setFlipped(false);
  }

  return (
    <div className="flashcard-container">
      <div className="flashcard" onClick={toggleFlip}>
        {flipped ? (
          <div className="back">{flashcards[currentFlashcard].answer}</div>
        ) : (
          <div className="front">{flashcards[currentFlashcard].question}</div>
        )}
      </div>
      <div className="flashcard-buttons">
        <button onClick={previousFlashcard}>Previous</button>
        <button onClick={nextFlashcard}>Next</button>
      </div>
    </div>
  );
}

export default FlashCard;
