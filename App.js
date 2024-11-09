import Flashcard from './Flashcard';

function App() {
  const flashcards = [
    { front: 'What is the capital of France?', back: 'Paris' },
    { front: 'What is the highest mountain in the world?', back: 'Mount Everest' },
  ];

  return (
    <div>
      <h1>Flashcards</h1>
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} front={flashcard.front} back={flashcard.back} />
      ))}
    </div>
  );
}

export default App;
