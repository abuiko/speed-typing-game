import React, { useState } from 'react'

function App() {
    const [inputData, setInputData] = useState({ text: "" })

    const handleInput = event => {
        const { value } = event.target
        setInputData(prevData => ({ ...prevData, text: value }))
    }

    const calculateWords = text => {
        const words = text.trim().split(" ");
        return words.filter(word => word !== "")
    }

    return (
        <div>
            <h1 className="title">How fast can you type?</h1>
            <textarea onChange={handleInput} value={inputData.text} />
            <h4>Time Remaining</h4>
            <button className="startButton" onClick={() => calculateWords(inputData.text)}>Start</button>
            <h1 className="result">Result</h1>
        </div>
    )
}

export default App
