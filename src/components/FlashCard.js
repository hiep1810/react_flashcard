import React, { useState } from 'react';

function FlashCard() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      {flipped ? (
        <div className="back">
          What is the capital of France?
        </div>
      ) : (
        <div className="front">
          Paris
        </div>
      )}
    </div>
  );
}

export default FlashCard;
