import { useState } from 'react';

function Flashcard({ front, back }) {
  const [showBack, setShowBack] = useState(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      {showBack ? back : front}
    </div>
  );
}

export default Flashcard;
