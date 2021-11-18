import { useState, useEffect, useRef } from 'react'

const useWordGame = (startingTime = 15) => {


    const [inputData, setInputData] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
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
        setTimeRemaining(startingTime)
        setInputData("")
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    useEffect(() => {
        if (timeRemaining > 0 && isTimeRunning) {
            setTimeout(() => { setTimeRemaining(time => time - 1) }, 1000)
        } else if (timeRemaining === 0) {
            setIsTimeRunning(false)
            setWordCount(calculateWords(inputData))
        }
    }, [timeRemaining, isTimeRunning])

    return { inputRef, handleInput, inputData, isTimeRunning, timeRemaining, startGame, wordCount }
}

export default useWordGame