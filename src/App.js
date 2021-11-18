import React, { useState, useEffect, useRef } from 'react'

function App() {
    const STARTING_TIME = 10

    const [inputData, setInputData] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputRef = useRef(null)

    const handleInput = event => {
        const { value } = event.target
        setInputData(value)
    }

    const calculateWords = text => {
        const words = text.trim().split(" ");
        return words.filter(word => word !== "").length
    }

    const startGame = () => {
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setInputData("")
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    const endGame = () => {
        setIsTimeRunning(false)
        setWordCount(calculateWords(inputData))
    }

    useEffect(() => {
        if (timeRemaining > 0 && isTimeRunning) {
            setTimeout(() => { setTimeRemaining(time => time - 1) }, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])
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
