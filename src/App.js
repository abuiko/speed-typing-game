import React, { useState, useEffect } from 'react'

function App() {
    const [inputData, setInputData] = useState({ text: "" })
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const handleInput = event => {
        const { value } = event.target
        setInputData(prevData => ({ ...prevData, text: value }))
    }

    const calculateWords = text => {
        const words = text.trim().split(" ");
        return words.filter(word => word !== "").length
    }

    useEffect(() => {
        if (timeRemaining > 0 && isTimeRunning) {
            setTimeout(() => { setTimeRemaining(time => time - 1) }, 1000)
        } else if (timeRemaining === 0) {
            setIsTimeRunning(false)
            setWordCount(calculateWords(inputData.text))
        }
    }, [timeRemaining, isTimeRunning])
    return (
        <div>
            <h1 className="title">How fast can you type?</h1>
            <textarea onChange={handleInput} value={inputData.text} />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button className="startButton" onClick={() => setIsTimeRunning(true)}>Start</button>
            <h1 className="result">Word Count: {wordCount}</h1>
        </div>
    )
}

export default App
