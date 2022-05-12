import React, { useState } from "react";
import generateCompletion from "../util/openapi";


const App = () => {

    const [prompt, setPrompt] = useState('')

    return (
        <div>
            <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            <button onClick={() => generateCompletion(prompt, 0)} >Generate</button>
        </div>
    )


}

export default App