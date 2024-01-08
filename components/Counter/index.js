import { useState } from "react"

export default function Counter() {
    const [number, setNumber] = useState(0);

    return(
        <>
            <div>
                <button onClick={() => setNumber(number + 1)}>Increment Incrementally</button>
                <button onClick={() => setNumber(number - 1)}>Decrement Decrementally</button>
            </div>
            <div>
                {number}
            </div>
        </>
    )
}