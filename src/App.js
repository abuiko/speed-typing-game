import React, { useState, useEffect } from 'react'

function App() {
    const STARTING_TIME = 10

    const [inputData, setInputData] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

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
            <textarea onChange={handleInput} value={inputData} />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button className="startButton" onClick={startGame}>Start</button>
            <h1 className="result">Word Count: {wordCount}</h1>
        </div>
    )
}

export default App
