import React, { useState } from 'react'

function App() {
    const [inputData, setInputData] = useState({ text: "" })

    const handleInput = event => {
        const { value } = event.target
        setInputData(prevData => ({ ...prevData, text: value }))
    }

    return (
        <div>
            <h1 className="title">How fast can you type?</h1>
            <textarea onChange={handleInput} value={inputData.text} />
            <h4>Time Remaining</h4>
            <button className="startButton">Start</button>
            <h1 className="result">Result</h1>
        </div>
    )
}

export default App
