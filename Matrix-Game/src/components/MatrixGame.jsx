import React, { useState } from 'react';
import '../styles.css';

const MatrixGame = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [clickHistory, setClickHistory] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (index) => {
    if (isAnimating) return;

    if (clickHistory.length === 8 && matrix[index] === null) {
      setMatrix(prev => {
        const newMatrix = [...prev];
        newMatrix[index] = 'green';
        return newMatrix;
      });
      
      const finalHistory = [...clickHistory, index];
      setClickHistory(finalHistory);
      
      setIsAnimating(true);
      finalHistory.forEach((historyIndex, i) => {
        setTimeout(() => {
          setMatrix(prev => {
            const newMatrix = [...prev];
            newMatrix[historyIndex] = 'orange';
            return newMatrix;
          });
          
          if (i === finalHistory.length - 1) {
            setIsAnimating(false);
          }
        }, i * 300);
      });
    } 
    else if (matrix[index] === null) {
      setMatrix(prev => {
        const newMatrix = [...prev];
        newMatrix[index] = 'green';
        return newMatrix;
      });
      setClickHistory(prev => [...prev, index]);
    }
  };

  const resetGame = () => {
    setMatrix(Array(9).fill(null));
    setClickHistory([]);
    setIsAnimating(false);
  };

  return (
    <div className="matrix-game">
      <h1>3x3 Matrix Game</h1>
      <div className="matrix-container">
        {matrix.map((color, index) => (
          <div
            key={index}
            className="matrix-box"
            style={{ 
              backgroundColor: color || 'lightgray',
              cursor: matrix[index] || isAnimating ? 'default' : 'pointer'
            }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button onClick={resetGame} style={{ marginTop: '20px' }}>
        Reset Game
      </button>
    </div>
  );
};

export default MatrixGame;