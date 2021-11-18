import React from 'react'
import useWordGame from "./hooks/useWordGame"

function App() {
    const {
        inputRef,
        handleInput,
        inputData,
        isTimeRunning,
        timeRemaining,
        startGame,
        wordCount
    } = useWordGame(20)
    return (
        <div>
            <h1 className="title">How fast can you type?</h1>
            <textarea
                ref={inputRef}
                onChange={handleInput}
                value={inputData}
                disabled={!isTimeRunning}
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button
                className="startButton"
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start</button>
            <h1 className="result">Word Count: {wordCount}</h1>
        </div>
    )
}

export default App
