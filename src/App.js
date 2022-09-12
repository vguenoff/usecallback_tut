import { useState, useEffect, useCallback } from 'react'

const App = () => {
    const [userInput, setUserInput] = useState('')
    const [result, setResult] = useState(0)
    const [num1] = useState(4)
    const [num2] = useState(5)

    // without useCallback it will rerender endlessly and crush
    // because even the arrays are the same they don't have referential equality
    const buildArray = useCallback(() => [num1, num2], [num1, num2])

    useEffect(() => {
        console.log(`New array: ${buildArray()}`)

        setResult(buildArray())
    }, [buildArray])

    return (
        <main className="App">
            <input
                type="text"
                placeholder="input"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
            />
            <h1>Output: {userInput || '--'}</h1>
            <p>Result: {JSON.stringify(result)}</p>
        </main>
    )
}

export default App
